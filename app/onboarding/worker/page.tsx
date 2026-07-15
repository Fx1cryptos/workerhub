'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function WorkerOnboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    profession: '',
    business_name: '',
    bio: '',
    hourly_rate: '',
    years_of_experience: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('User not found')
      }

      const { error: updateError } = await supabase
        .from('worker_profiles')
        .update({
          profession: formData.profession,
          business_name: formData.business_name,
          bio: formData.bio,
          hourly_rate: parseFloat(formData.hourly_rate),
          years_of_experience: parseInt(formData.years_of_experience),
        })
        .eq('user_id', user.id)

      if (updateError) throw updateError

      router.push('/dashboard/worker')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-2xl">Complete Your Professional Profile</CardTitle>
                <CardDescription>Step {step} of 3</CardDescription>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i <= step ? 'bg-[#0504AA]' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">Professional Information</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="profession">Your Profession</Label>
                        <Input
                          id="profession"
                          name="profession"
                          placeholder="e.g., Plumber, Electrician, Cleaner"
                          value={formData.profession}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="business_name">Business Name (Optional)</Label>
                        <Input
                          id="business_name"
                          name="business_name"
                          placeholder="e.g., John's Plumbing Services"
                          value={formData.business_name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">Experience & Rates</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="years_of_experience">Years of Experience</Label>
                        <Input
                          id="years_of_experience"
                          name="years_of_experience"
                          type="number"
                          placeholder="e.g., 5"
                          value={formData.years_of_experience}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="hourly_rate">Hourly Rate (NGN)</Label>
                        <Input
                          id="hourly_rate"
                          name="hourly_rate"
                          type="number"
                          placeholder="e.g., 5000"
                          value={formData.hourly_rate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900">About You</h3>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <textarea
                          id="bio"
                          name="bio"
                          placeholder="Tell customers about your experience, skills, and what makes you special"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  className="flex-1 bg-[#0504AA] hover:bg-[#0504AA]/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : step === 3 ? 'Complete' : 'Next'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>You can update your profile anytime from your dashboard</p>
        </div>
      </div>
    </div>
  )
}
