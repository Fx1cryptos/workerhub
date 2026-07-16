'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChevronLeft, CheckCircle } from 'lucide-react'

export default function WorkerOnboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    profession: '',
    category: '',
    years_of_experience: '',
    business_name: '',
    bio: '',
    hourly_rate: '',
    state: '',
    lga: '',
    address: '',
    skills: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const totalSteps = 4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    // Validate current step
    if (step === 1 && (!formData.profession || !formData.category)) {
      setError('Please fill in all fields')
      return
    }
    if (step === 2 && (!formData.years_of_experience || !formData.hourly_rate)) {
      setError('Please fill in all fields')
      return
    }
    if (step === 3 && (!formData.bio || !formData.business_name)) {
      setError('Please fill in all fields')
      return
    }
    setError(null)
    setStep(step + 1)
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate last step
    if (!formData.state || !formData.lga || !formData.address) {
      setError('Please fill in all fields')
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

      // Update worker profile
      const { error: updateError } = await supabase
        .from('worker_profiles')
        .update({
          profession: formData.profession,
          years_of_experience: parseInt(formData.years_of_experience),
          business_name: formData.business_name,
          bio: formData.bio,
          hourly_rate: parseFloat(formData.hourly_rate),
          is_available: true,
        })
        .eq('user_id', user.id)

      if (updateError) throw updateError

      // Add location
      const { data: location } = await supabase
        .from('locations')
        .select('id')
        .eq('state', formData.state)
        .eq('lga', formData.lga)
        .single()

      if (location) {
        await supabase.from('worker_locations').insert({
          worker_id: (await supabase.from('worker_profiles').select('id').eq('user_id', user.id).single()).data?.id,
          location_id: location.id,
          street_address: formData.address,
          is_primary: true,
        })
      }

      router.push('/onboarding/worker/completion')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  const categories = [
    'Plumbing',
    'Electrical',
    'Carpentry',
    'Cleaning',
    'Painting',
    'AC Repair',
    'Generator Repair',
    'Phone Repair',
    'Welding',
    'Barber',
    'Tailor',
    'Mechanic',
  ]

  const states = ['Lagos', 'Ogun', 'Oyo', 'Osun', 'Ondo', 'Ekiti', 'Abuja']
  const lgas: { [key: string]: string[] } = {
    Lagos: ['Lekki', 'Victoria Island', 'Ikoyi', 'Ikeja', 'Shomolu', 'Bariga'],
    Ogun: ['Abeokuta', 'Ijebu-Ode', 'Sagamu', 'Ifo'],
    Oyo: ['Ibadan', 'Oyo', 'Ogbomoso', 'Oshogbo'],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-[#0504AA] to-[#0504AA] text-white rounded-t-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-2xl text-white">Complete Your Professional Profile</CardTitle>
                <CardDescription className="text-blue-100">Step {step} of {totalSteps}</CardDescription>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i + 1}
                    className={`h-2 rounded-full transition-all ${
                      i + 1 <= step
                        ? 'bg-white w-8'
                        : 'bg-blue-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-8">
            <form onSubmit={step === totalSteps ? handleSubmit : (e) => { e.preventDefault(); handleNext() }} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Step 1: Professional Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Professional Information</h3>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        name="profession"
                        placeholder="e.g., Plumber, Electrician"
                        value={formData.profession}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

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
                  </div>
                </div>
              )}

              {/* Step 2: Pricing & Availability */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Pricing & Availability</h3>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="hourly_rate">Hourly Rate (₦)</Label>
                      <Input
                        id="hourly_rate"
                        name="hourly_rate"
                        type="number"
                        placeholder="e.g., 5000"
                        value={formData.hourly_rate}
                        onChange={handleInputChange}
                        required
                      />
                      <p className="text-xs text-gray-500">Set your competitive hourly rate</p>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="business_name">Business Name (optional)</Label>
                      <Input
                        id="business_name"
                        name="business_name"
                        placeholder="Your business or company name"
                        value={formData.business_name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Bio & Skills */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">About You</h3>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <textarea
                        id="bio"
                        name="bio"
                        placeholder="Tell customers about yourself, your experience, and what makes you unique..."
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA] h-32 resize-none"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="skills">Key Skills</Label>
                      <Input
                        id="skills"
                        name="skills"
                        placeholder="e.g., Repair, Installation, Maintenance (comma separated)"
                        value={formData.skills}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Location */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900">Service Location</h3>
                  
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="state">State</Label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                        required
                      >
                        <option value="">Select state</option>
                        {states.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="lga">LGA</Label>
                      <select
                        id="lga"
                        name="lga"
                        value={formData.lga}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                        required
                        disabled={!formData.state}
                      >
                        <option value="">Select LGA</option>
                        {formData.state && lgas[formData.state]?.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Your service location or office address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                )}
                
                <Button
                  type="submit"
                  className="flex-1 bg-[#0504AA] hover:bg-[#040399]"
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Processing...'
                    : step === totalSteps
                    ? 'Complete Setup'
                    : 'Next Step'}
                </Button>
              </div>

              {/* Progress Indicator Text */}
              <p className="text-xs text-gray-500 text-center">
                {step === 1 && 'Tell us about your profession'}
                {step === 2 && 'Set your pricing and availability'}
                {step === 3 && 'Share your experience and skills'}
                {step === 4 && 'Where do you provide services?'}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
