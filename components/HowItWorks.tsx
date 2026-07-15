'use client'

import { Search, CheckCircle2, MessageSquare, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Search & Browse',
      description: 'Enter your service need and location to find verified professionals nearby',
      icon: Search,
      color: 'bg-blue-100 text-[#0504AA]',
    },
    {
      number: 2,
      title: 'Check Ratings',
      description: 'Review customer ratings, verified credentials, and real-time availability',
      icon: CheckCircle2,
      color: 'bg-green-100 text-green-600',
    },
    {
      number: 3,
      title: 'Connect & Chat',
      description: 'Message directly, discuss project details, and get instant quotes',
      icon: MessageSquare,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      number: 4,
      title: 'Hire & Pay',
      description: 'Secure payment processing with buyer protection and work guarantees',
      icon: TrendingUp,
      color: 'bg-amber-100 text-amber-600',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How WorkerHub Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Four simple steps to connect with trusted professionals and get your work done
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition h-full">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-white mb-4 ${
                    step.color.split(' ')[0] === 'bg-blue-100' ? 'bg-[#0504AA]' :
                    step.color.split(' ')[0] === 'bg-green-100' ? 'bg-green-600' :
                    step.color.split(' ')[0] === 'bg-purple-100' ? 'bg-purple-600' :
                    'bg-amber-600'
                  }`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connector Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0504AA] to-blue-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Find Your Perfect Professional?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who&apos;ve found trusted professionals on WorkerHub
          </p>
          <button className="px-8 py-3 bg-white text-[#0504AA] font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
            Start Searching Now
          </button>
        </div>
      </div>
    </section>
  )
}
