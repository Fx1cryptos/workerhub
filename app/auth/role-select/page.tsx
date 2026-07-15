'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Briefcase, Users } from 'lucide-react'

export default function RoleSelectPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const selectRole = async (role: 'customer' | 'professional') => {
    setIsLoading(true)
    setError(null)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('User not found')
      }

      if (role === 'professional') {
        // Create worker_profile
        const { error: workerError } = await supabase
          .from('worker_profiles')
          .insert({
            user_id: user.id,
            profession: '',
            business_name: '',
          })

        if (workerError) throw workerError

        // Create wallet
        const { error: walletError } = await supabase
          .from('wallets')
          .insert({
            user_id: user.id,
            balance: 0,
            total_earned: 0,
          })

        if (walletError) throw walletError

        router.push('/onboarding/worker')
      } else {
        // Create customer_profile
        const { error: customerError } = await supabase
          .from('customer_profiles')
          .insert({
            user_id: user.id,
            total_bookings: 0,
          })

        if (customerError) throw customerError

        router.push('/dashboard/customer')
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to WorkerHub</h1>
            <p className="mt-2 text-lg text-gray-600">
              What brings you here today?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => selectRole('customer')}>
              <CardHeader>
                <Users className="w-8 h-8 text-[#0504AA] mb-2" />
                <CardTitle>I&apos;m Looking for Services</CardTitle>
                <CardDescription>
                  Find trusted professionals for your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0504AA]">✓</span>
                    Browse available professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0504AA]">✓</span>
                    Book services instantly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0504AA]">✓</span>
                    Chat with professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0504AA]">✓</span>
                    Leave verified reviews
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#0504AA] hover:bg-[#0504AA]/90"
                  onClick={() => selectRole('customer')}
                  disabled={isLoading}
                >
                  Continue as Customer
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => selectRole('professional')}>
              <CardHeader>
                <Briefcase className="w-8 h-8 text-[#FFB81C] mb-2" />
                <CardTitle>I&apos;m a Professional</CardTitle>
                <CardDescription>
                  Earn money by offering your services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB81C]">✓</span>
                    Create your professional profile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB81C]">✓</span>
                    Get verified and trusted
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB81C]">✓</span>
                    Receive job requests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFB81C]">✓</span>
                    Build your reputation
                  </li>
                </ul>
                <Button
                  className="w-full bg-[#FFB81C] hover:bg-[#FFB81C]/90 text-gray-900"
                  onClick={() => selectRole('professional')}
                  disabled={isLoading}
                >
                  Continue as Professional
                </Button>
              </CardContent>
            </Card>
          </div>

          {error && (
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <p className="text-sm text-red-600">{error}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
