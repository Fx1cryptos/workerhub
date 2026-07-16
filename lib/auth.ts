import { createClient } from '@/lib/supabase/client'

export async function signInWithGoogle() {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export async function resetPassword(email: string) {
  const supabase = createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`,
  })

  if (error) {
    throw new Error(error.message)
  }
}

export async function updatePassword(newPassword: string) {
  const supabase = createClient()

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  })

  if (error) {
    throw new Error(error.message)
  }
}

export async function getUserRole(userId: string) {
  const supabase = createClient()

  const { data: workerProfile } = await supabase
    .from('worker_profiles')
    .select('id')
    .eq('user_id', userId)
    .single()

  const { data: customerProfile } = await supabase
    .from('customer_profiles')
    .select('id')
    .eq('user_id', userId)
    .single()

  if (workerProfile) return 'worker'
  if (customerProfile) return 'customer'
  return null
}
