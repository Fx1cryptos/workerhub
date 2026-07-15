import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function WorkerDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const { data: workerProfile } = await supabase
    .from('worker_profiles')
    .select('*')
    .eq('user_id', user.id)
    .single()

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome, {profile?.first_name}!
            </h2>
            <p className="text-gray-600">
              Complete your professional profile to start receiving job requests.
            </p>
          </div>
          <Link href="/dashboard/worker/profile">
            <Button className="bg-[#0504AA] hover:bg-[#0504AA]/90">
              Complete Profile
            </Button>
          </Link>
        </div>

        {workerProfile?.verification_status === 'unverified' && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              Your profile is under review. You&apos;ll receive a notification once verified.
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Total Jobs</div>
          <div className="text-3xl font-bold text-[#0504AA]">
            {workerProfile?.total_jobs || 0}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Average Rating</div>
          <div className="text-3xl font-bold text-yellow-500">
            {workerProfile?.average_rating || '0.0'}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Profile Status</div>
          <div className="text-sm font-semibold text-gray-900 capitalize">
            {workerProfile?.verification_status || 'unverified'}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Response Time</div>
          <div className="text-3xl font-bold text-green-600">
            {workerProfile?.response_time ? `${workerProfile.response_time}h` : 'N/A'}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/dashboard/worker/jobs">
              <Button variant="outline" className="w-full justify-start">
                View Incoming Jobs
              </Button>
            </Link>
            <Link href="/dashboard/worker/profile">
              <Button variant="outline" className="w-full justify-start">
                Edit Profile
              </Button>
            </Link>
            <Link href="/dashboard/worker/earnings">
              <Button variant="outline" className="w-full justify-start">
                View Earnings
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Profile Completion</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="font-semibold text-gray-900">
                  {workerProfile?.profession && workerProfile?.bio ? '50%' : '25%'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#0504AA] h-2 rounded-full transition-all"
                  style={{
                    width: workerProfile?.profession && workerProfile?.bio ? '50%' : '25%',
                  }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {!workerProfile?.profession
                ? 'Add your profession to get started'
                : !workerProfile?.bio
                  ? 'Add a bio to attract more clients'
                  : 'Profile looking good!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
