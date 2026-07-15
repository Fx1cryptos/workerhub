'use client'

import { Users, Award, TrendingUp, Shield } from 'lucide-react'

export default function TrustSection() {
  const stats = [
    {
      icon: Users,
      number: '50K+',
      label: 'Active Professionals',
      color: 'text-blue-600',
    },
    {
      icon: Award,
      number: '98%',
      label: 'Customer Satisfaction',
      color: 'text-green-600',
    },
    {
      icon: TrendingUp,
      number: '2M+',
      label: 'Jobs Completed',
      color: 'text-amber-600',
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Verified & Secured',
      color: 'text-purple-600',
    },
  ]

  const testimonials = [
    {
      name: 'Folake Adeyemi',
      role: 'Homeowner, Lekki',
      image: '👩‍💼',
      text: 'I found an excellent plumber through WorkerHub. Professional, on-time, and excellent work. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Tunde Okonkwo',
      role: 'Business Owner, Victoria Island',
      image: '👨‍💼',
      text: 'WorkerHub made finding a reliable electrician so easy. The verification process gives me confidence in hiring.',
      rating: 5,
    },
    {
      name: 'Chioma Uche',
      role: 'Property Manager, Ikoyi',
      image: '👩‍🔬',
      text: 'The platform is intuitive and the quality of professionals is outstanding. Great customer support too!',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands Across Nigeria
            </h2>
            <p className="text-lg text-gray-600">
              Real people, real professionals, real results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-600">
              Join our growing community of satisfied users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0504AA] to-blue-600 flex items-center justify-center text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Why Trust WorkerHub?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Verified Professionals</h4>
                <p className="text-sm text-gray-600">All professionals undergo thorough background checks and verification</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Secure Payments</h4>
                <p className="text-sm text-gray-600">Protected transactions with secure escrow and buyer protection</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Real Reviews</h4>
                <p className="text-sm text-gray-600">Authentic customer ratings and feedback from completed jobs</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Customer support team available round the clock to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
