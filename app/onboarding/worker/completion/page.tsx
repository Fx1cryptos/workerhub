import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock } from 'lucide-react'

export default async function Page() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16" />
            </div>
            <CardTitle className="text-3xl text-white">Profile Setup Complete!</CardTitle>
            <CardDescription className="text-green-100 text-lg mt-2">
              Your professional profile is ready
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-8">
            <div className="space-y-8">
              {/* Success Message */}
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Welcome to WorkerHub!</h2>
                <p className="text-gray-600">
                  Your professional profile has been created successfully. We're reviewing your information to ensure quality standards.
                </p>
              </div>

              {/* Status Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <div className="flex gap-3">
                  <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-900">Verification In Progress</h3>
                    <p className="text-sm text-amber-700 mt-1">
                      Your account is currently under review. This typically takes 24-48 hours. You'll receive an email notification once verified.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-900">What's Next?</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0504AA] text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Complete Your Profile</p>
                      <p className="text-sm text-gray-600">Add a professional photo and portfolio images to stand out</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0504AA] text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Verify Your Identity</p>
                      <p className="text-sm text-gray-600">Complete identity verification to increase customer trust</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0504AA] text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Start Receiving Bookings</p>
                      <p className="text-sm text-gray-600">Once verified, customers can book your services directly</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Pro Tips to Get More Bookings</h3>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>✓ Write a compelling professional bio</li>
                  <li>✓ Set competitive pricing</li>
                  <li>✓ Upload high-quality portfolio images</li>
                  <li>✓ Respond quickly to customer inquiries</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Link href="/dashboard/worker" className="flex-1">
                  <Button className="w-full bg-[#0504AA] hover:bg-[#040399]">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Need help? <Link href="#" className="text-[#0504AA] font-semibold hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  )
}
