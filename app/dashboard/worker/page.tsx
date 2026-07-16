import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, Clock, CheckCircle2, AlertCircle, Star, MessageSquare, Calendar, DollarSign } from 'lucide-react'

export default async function WorkerDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Mock data - in production, fetch from database
  const mockJobs = [
    {
      id: '1',
      customerName: 'Mrs. Adeyemi',
      service: 'Pipe Installation',
      status: 'pending',
      date: '2024-12-20',
      time: '14:00',
      amount: '₦15,000',
      location: 'Lekki, Lagos',
    },
    {
      id: '2',
      customerName: 'Mr. Olawale',
      service: 'General Plumbing Repair',
      status: 'accepted',
      date: '2024-12-22',
      time: '10:00',
      amount: '₦12,000',
      location: 'VI, Lagos',
    },
    {
      id: '3',
      customerName: 'Ms. Chinyere',
      service: 'Drain Cleaning',
      status: 'completed',
      date: '2024-12-15',
      time: '09:00',
      amount: '₦8,000',
      location: 'Ikoyi, Lagos',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-amber-100 text-amber-800'
      case 'accepted':
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
      case 'accepted':
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
              <h1 className="text-3xl font-bold text-gray-900">Professional Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your jobs and grow your business</p>
            </div>
            <Link href="/dashboard/worker/profile">
              <Button variant="outline">View Profile</Button>
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
                  <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold text-gray-900">₦125,000</p>
                  <p className="text-xs text-green-600 mt-1">This month</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Pending Requests</p>
                  <p className="text-3xl font-bold text-amber-600">3</p>
                </div>
                <AlertCircle className="w-8 h-8 text-amber-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Completed Jobs</p>
                  <p className="text-3xl font-bold text-green-600">24</p>
                </div>
                <CheckCircle2 className="w-8 h-8 text-green-400 opacity-20" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Rating</p>
                  <p className="text-3xl font-bold text-amber-600">4.9</p>
                  <p className="text-xs text-gray-500 mt-1">Based on 45 reviews</p>
                </div>
                <Star className="w-8 h-8 text-amber-400 opacity-20" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart Placeholder */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Performance Overview
            </CardTitle>
            <CardDescription>Your booking trends this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Chart visualization coming soon</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <Link href="/dashboard/worker/profile">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </Link>
              <Link href="/dashboard/worker/availability">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Set Availability
                </Button>
              </Link>
              <Link href="/dashboard/worker/messages">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </Button>
              </Link>
              <Link href="/dashboard/worker/earnings">
                <Button variant="outline" className="w-full justify-start">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Earnings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Active Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Active Job Requests</CardTitle>
            <CardDescription>Respond to new job requests from customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockJobs.length > 0 ? (
                mockJobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-semibold text-gray-900">{job.customerName}</h3>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            job.status
                          )}`}
                        >
                          {getStatusIcon(job.status)}
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{job.service}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {job.location} • {job.date} at {job.time}
                      </p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="font-semibold text-gray-900">{job.amount}</p>
                      <div className="flex gap-2">
                        {job.status === 'pending' && (
                          <>
                            <Button size="sm" className="bg-[#0504AA] hover:bg-[#040399]">
                              Accept
                            </Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </>
                        )}
                        {job.status === 'accepted' && (
                          <Button size="sm" variant="outline">
                            Message
                          </Button>
                        )}
                        {job.status === 'completed' && (
                          <button className="text-sm text-[#0504AA] hover:underline">
                            View Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No pending requests</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
