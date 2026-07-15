'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-6">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-12 h-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-green-900">
                Check Your Email
              </CardTitle>
              <CardDescription>
                Confirm your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  We&apos;ve sent a confirmation email to the address you provided.
                </p>
                <p className="font-semibold text-gray-900">
                  Click the link in the email to verify your account and complete your sign-up.
                </p>
                <p>
                  Once confirmed, you&apos;ll be guided to set up your profile and choose whether you&apos;re here to find services or offer them.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-4">
                  Didn&apos;t receive the email? Check your spam folder or try signing up again.
                </p>
                <Link href="/auth/sign-up" className="block">
                  <Button variant="outline" className="w-full">
                    Sign Up Again
                  </Button>
                </Link>
              </div>

              <Link href="/auth/login" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Already Confirmed? Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
