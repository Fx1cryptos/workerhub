import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, CheckCircle2, AlertCircle, Search, Calendar, Star, MessageSquare } from 'lucide-react'

export default async function CustomerDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Mock data - in production, fetch from database
  const mockBookings = [
    {
      id: '1',
      workerName: 'John Plumbing Pro',
      service: 'Pipe Installation',
      status: 'pending',
      date: '2024-12-20',
      time: '14:00',
      amount: '₦15,000',
    },
    {
      id: '2',
      workerName: 'Mike Electrical',
      service: 'Electrical Repair',
      status: 'confirmed',
      date: '2024-12-22',
      time: '10:00',
      amount: '₦12,000',
    },
    {
      id: '3',
      workerName: 'Bola Carpentry',
      service: 'Furniture Building',
      status: 'completed',
      date: '2024-12-15',
      time: '09:00',
      amount: '₦45,000',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-800'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="w-4 h-4" />
      case 'confirmed':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle2 className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customer Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your bookings and find professionals</p>
            </div>
            <Link href="/search">
              <Button className="bg-[#0504AA] hover:bg-[#040399]">
                <Search className="w-4 h-4 mr-2" />
                Find Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <Calendar className="w-8 h-8 text-[#0504AA] opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending</p>
                  <p className="text-3xl font-bold text-amber-600">2</p>
                </div>
                <AlertCircle className="w-8 h-8 text-amber-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed</p>
                  <p className="text-3xl font-bold text-green-600">9</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-green-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Avg Rating</p>
                  <p className="text-3xl font-bold text-amber-600">4.8</p>
                </div>
                <Star className="w-8 h-8 text-amber-400 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/search">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Find Professionals
                </Button>
              </Link>
              <Link href="/dashboard/customer/messages">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <Link href="/dashboard/customer/profile">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  My Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Your Bookings</CardTitle>
            <CardDescription>Recent and upcoming service bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBookings.length > 0 ? (
                mockBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-gray-900">{booking.workerName}</h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {booking.date} at {booking.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{booking.amount}</p>
                      <button className="text-sm text-[#0504AA] hover:underline mt-2">
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No bookings yet</p>
                  <Link href="/search">
                    <Button className="bg-[#0504AA] hover:bg-[#040399]">Find Services Now</Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
