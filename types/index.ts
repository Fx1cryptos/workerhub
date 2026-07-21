/**
 * User & Authentication Types
 */
export type UserRole = 'customer' | 'worker' | 'admin'

export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string
  avatar_url?: string
  role: UserRole
  created_at: string
  updated_at: string
}

/**
 * Worker Profile Types
 */
export type VerificationStatus = 'pending' | 'under_review' | 'verified' | 'rejected'

export interface WorkerProfile {
  id: string
  user_id: string
  profession: string
  business_name?: string
  bio?: string
  years_of_experience?: number
  hourly_rate?: number
  is_available: boolean
  verified_badge: boolean
  verification_status: VerificationStatus
  rating?: number
  total_reviews?: number
  total_jobs_completed?: number
  created_at: string
  updated_at: string
}

export interface WorkerVerification {
  id: string
  worker_id: string
  government_id_url?: string
  selfie_url?: string
  trade_certificate_url?: string
  bvn?: string
  nin?: string
  status: VerificationStatus
  rejection_reason?: string
  reviewed_by?: string
  reviewed_at?: string
  created_at: string
  updated_at: string
}

export interface WorkerLocation {
  id: string
  worker_id: string
  latitude: number
  longitude: number
  state: string
  lga: string
  address: string
  is_primary: boolean
  service_radius_km: number
  updated_at: string
}

export interface WorkerAvailability {
  id: string
  worker_id: string
  day_of_week: number // 0-6 (Sunday-Saturday)
  start_time: string // HH:MM
  end_time: string // HH:MM
  is_available: boolean
}

/**
 * Customer Profile Types
 */
export interface CustomerProfile {
  id: string
  user_id: string
  total_bookings: number
  total_spent?: number
  rating?: number
  total_reviews?: number
  created_at: string
  updated_at: string
}

/**
 * Booking Types
 */
export type BookingStatus = 'pending' | 'accepted' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled'

export interface Booking {
  id: string
  customer_id: string
  worker_id: string
  service_category: string
  status: BookingStatus
  scheduled_date: string
  scheduled_time: string
  location: string
  latitude?: number
  longitude?: number
  description?: string
  photos_urls?: string[]
  estimated_duration_hours?: number
  amount: number
  payment_status: 'pending' | 'completed' | 'refunded'
  payment_method?: string
  transaction_id?: string
  created_at: string
  updated_at: string
  completed_at?: string
  cancelled_at?: string
  cancellation_reason?: string
}

export interface BookingUpdate {
  id: string
  booking_id: string
  status: BookingStatus
  latitude?: number
  longitude?: number
  estimated_arrival_time?: number // in minutes
  updated_by: string
  created_at: string
}

/**
 * Payment Types
 */
export type PaymentProvider = 'paystack' | 'flutterwave'

export interface Payment {
  id: string
  booking_id: string
  amount: number
  currency: string
  provider: PaymentProvider
  transaction_reference: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_method: string
  customer_id: string
  worker_id: string
  created_at: string
  updated_at: string
}

export interface Payout {
  id: string
  worker_id: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  transaction_reference?: string
  created_at: string
  processed_at?: string
}

/**
 * Chat Types
 */
export interface ChatMessage {
  id: string
  conversation_id: string
  sender_id: string
  content: string
  message_type: 'text' | 'image' | 'file' | 'voice'
  media_url?: string
  is_read: boolean
  created_at: string
}

export interface Conversation {
  id: string
  customer_id: string
  worker_id: string
  last_message?: string
  last_message_at?: string
  customer_last_seen?: string
  worker_last_seen?: string
  created_at: string
  updated_at: string
}

/**
 * Review & Rating Types
 */
export interface Review {
  id: string
  booking_id: string
  reviewer_id: string
  reviewee_id: string
  rating: number // 1-5
  review_text?: string
  images_urls?: string[]
  is_verified_customer: boolean
  helpful_count: number
  report_count: number
  can_edit_until: string
  created_at: string
  updated_at: string
}

/**
 * Notification Types
 */
export type NotificationType = 
  | 'booking_update'
  | 'new_message'
  | 'worker_accepted'
  | 'worker_arrived'
  | 'payment_received'
  | 'verification_approved'
  | 'verification_rejected'
  | 'referral_reward'
  | 'admin_announcement'

export interface Notification {
  id: string
  user_id: string
  type: NotificationType
  title: string
  message: string
  data?: Record<string, any>
  is_read: boolean
  email_sent: boolean
  created_at: string
}

/**
 * Portfolio Types
 */
export interface PortfolioItem {
  id: string
  worker_id: string
  title: string
  description?: string
  category: string
  images_urls: string[]
  completion_date: string
  created_at: string
}

/**
 * Referral Types
 */
export interface Referral {
  id: string
  referrer_id: string
  referred_user_id?: string
  referral_code: string
  referral_link: string
  status: 'pending' | 'completed'
  reward_amount: number
  reward_type: 'bonus' | 'discount' | 'credit'
  created_at: string
  completed_at?: string
}

/**
 * Admin Types
 */
export interface AdminLog {
  id: string
  admin_id: string
  action: string
  entity_type: string
  entity_id: string
  changes: Record<string, any>
  created_at: string
}

/**
 * Analytics Types
 */
export interface DailyAnalytics {
  id: string
  date: string
  total_users: number
  verified_workers: number
  pending_verifications: number
  total_bookings: number
  completed_bookings: number
  total_revenue: number
  new_users: number
}
