import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function CustomerDashboard() {
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

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome, {profile?.first_name}!
        </h2>
        <p className="text-gray-600">
          Your customer dashboard is being set up. You can now browse and book services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Total Bookings</div>
          <div className="text-3xl font-bold text-[#0504AA]">0</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Pending Bookings</div>
          <div className="text-3xl font-bold text-yellow-600">0</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-sm text-gray-600 mb-2">Completed Bookings</div>
          <div className="text-3xl font-bold text-green-600">0</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Get Started</h3>
        <p className="text-blue-800">
          Ready to find services? Head to the marketplace to browse trusted professionals in your area.
        </p>
      </div>
    </div>
  )
}
