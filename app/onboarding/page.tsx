'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Upload, MapPin, FileCheck, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

const steps = [
  { id: 1, title: 'Account Type', description: 'Choose how you want to use WorkerHub' },
  { id: 2, title: 'Personal Info', description: 'Tell us about yourself' },
  { id: 3, title: 'Location', description: 'Where are you located?' },
  { id: 4, title: 'Profile Details', description: 'Complete your profile' },
  { id: 5, title: 'Verification', description: 'Verify your identity' },
  { id: 6, title: 'All Set!', description: 'You\'re ready to go!' },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [accountType, setAccountType] = useState<'customer' | 'professional' | null>(null)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    } else {
      router.push('/')
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0504AA', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 100 20 L 160 50 L 160 110 C 160 150 100 180 100 180 C 100 180 40 150 40 110 L 40 50 Z"
                  fill="url(#gradient)"
                  stroke="none"
                />
                <circle cx="100" cy="85" r="15" fill="white" stroke="none" />
                <path d="M 85 110 Q 85 120 100 120 Q 115 120 115 110 L 115 130 Q 115 135 110 135 L 90 135 Q 85 135 85 130 Z" fill="white" stroke="none" />
              </svg>
              <div>
                <h2 className="font-bold text-lg text-[#0504AA]">WorkerHub</h2>
                <p className="text-xs text-gray-600">Welcome</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/')}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
            >
              Skip
            </button>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round((currentStep / steps.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[#4F46E5] to-[#0504AA] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Step 1: Account Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">{steps[0].title}</h1>
                <p className="text-gray-600">{steps[0].description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Customer Card */}
                <button
                  onClick={() => setAccountType('customer')}
                  className={`p-6 rounded-xl border-2 transition ${
                    accountType === 'customer'
                      ? 'border-[#0504AA] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-3">👤</div>
                  <h3 className="font-bold text-lg text-gray-900">I Need Services</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Find and book verified professionals for your home and business needs
                  </p>
                </button>

                {/* Professional Card */}
                <button
                  onClick={() => setAccountType('professional')}
                  className={`p-6 rounded-xl border-2 transition ${
                    accountType === 'professional'
                      ? 'border-[#0504AA] bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-3">🔧</div>
                  <h3 className="font-bold text-lg text-gray-900">I'm a Professional</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Get hired by customers and grow your professional business
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">{steps[1].title}</h1>
                <p className="text-gray-600">{steps[1].description}</p>
              </div>

              <div className="space-y-4">
                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Profile Photo
                  </label>
                  <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-[#0504AA] transition cursor-pointer">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                    />
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="johndoe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-8 h-8 text-[#0504AA]" />
                  {steps[2].title}
                </h1>
                <p className="text-gray-600">{steps[2].description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]">
                    <option>Lagos</option>
                    <option>Ogun</option>
                    <option>Oyo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">LGA</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]">
                    <option>Select LGA</option>
                    <option>Lagos Island</option>
                    <option>Ikoyi</option>
                    <option>Lekki</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="123 Main Street"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Profile Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">{steps[3].title}</h1>
                <p className="text-gray-600">
                  {accountType === 'professional'
                    ? 'Tell customers about your expertise'
                    : 'Help us personalize your experience'}
                </p>
              </div>

              <div className="space-y-4">
                {accountType === 'professional' && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Profession
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]">
                        <option>Select profession</option>
                        <option>Plumber</option>
                        <option>Electrician</option>
                        <option>Carpenter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Years of Experience
                      </label>
                      <input
                        type="number"
                        placeholder="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Hourly Rate (₦)
                      </label>
                      <input
                        type="number"
                        placeholder="5000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                  <textarea
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Verification */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <FileCheck className="w-8 h-8 text-[#0504AA]" />
                  {steps[4].title}
                </h1>
                <p className="text-gray-600">{steps[4].description}</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    ✓ We verify all professionals to ensure quality and safety
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Government ID
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0504AA] transition cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Verification Status
                  </label>
                  <div className="flex items-center gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-sm text-yellow-900">Pending verification</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Success */}
          {currentStep === 6 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#0504AA] flex items-center justify-center mx-auto">
                <BadgeCheck className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">🎉 Welcome to WorkerHub!</h1>
                <p className="text-gray-600">Your profile is all set up</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left space-y-2">
                <p className="font-semibold text-gray-900">Next Steps:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {accountType === 'professional' ? (
                    <>
                      <li>✓ Complete your verification (24-48 hours)</li>
                      <li>✓ Add your portfolio to showcase your work</li>
                      <li>✓ Set your availability</li>
                      <li>✓ Start receiving jobs</li>
                    </>
                  ) : (
                    <>
                      <li>✓ Browse available professionals</li>
                      <li>✓ Book your first service</li>
                      <li>✓ Track your bookings in real-time</li>
                      <li>✓ Leave reviews and ratings</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-4 h-4 inline mr-2" />
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!accountType && currentStep === 1}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#0504AA] text-white rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {currentStep === steps.length ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
