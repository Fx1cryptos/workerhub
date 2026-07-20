'use client'

import { Search, MapPin, CheckCircle2, Clock, Award } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HeroSearch() {
  const [service, setService] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const services = [
    { id: 'all', label: 'All Services', icon: '🔧' },
    { id: 'plumbing', label: 'Plumber', icon: '🚰' },
    { id: 'electrical', label: 'Electrician', icon: '⚡' },
    { id: 'carpentry', label: 'Carpenter', icon: '🪵' },
    { id: 'painting', label: 'Painter', icon: '🎨' },
    { id: 'cleaning', label: 'Cleaner', icon: '🧹' },
    { id: 'mechanic', label: 'Mechanic', icon: '🔧' },
    { id: 'barber', label: 'Barber', icon: '✂️' },
    { id: 'tailor', label: 'Tailor', icon: '🪡' },
    { id: 'ac-repair', label: 'AC Repair', icon: '❄️' },
    { id: 'generator', label: 'Generator Repair', icon: '⚙️' },
    { id: 'phone-repair', label: 'Phone Repair', icon: '📱' },
  ]

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery && !location) return

    setIsLoading(true)
    try {
      // Build search query string
      const params = new URLSearchParams()
      if (searchQuery) params.append('q', searchQuery)
      if (location) params.append('location', location)
      if (service !== 'all') params.append('service', service)

      router.push(`/search?${params.toString()}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-[#0504AA] via-[#0504AA] to-blue-900 pt-20 pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <p className="text-white text-sm font-semibold">✓ Trusted. Verified. Right Near You.</p>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Trusted
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Professionals Near You</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Connect with verified experts for all your home and business needs. Quality service, every time.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-300" />
              <span className="text-xs text-blue-100">Verified Professionals</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-blue-300" />
              <span className="text-xs text-blue-100">Easy Booking</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-6 h-6 text-amber-300" />
              <span className="text-xs text-blue-100">Secure Payments</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-300" />
              <span className="text-xs text-blue-100">Rated & Reviewed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-6 h-6 text-blue-300" />
              <span className="text-xs text-blue-100">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
            {/* Service Category Tabs */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-gray-700">Popular Services</p>
                <a href="#" className="text-sm text-[#0504AA] hover:underline font-medium">View all</a>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                {services.slice(0, 8).map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => setService(svc.id)}
                    type="button"
                    className={`py-2 px-2 rounded-lg font-medium transition text-xs whitespace-nowrap ${
                      service === svc.id
                        ? 'bg-[#0504AA] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-1">{svc.icon}</span>
                    <span className="hidden md:inline">{svc.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you need?
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Plumber, Electrician, Carpenter..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your area..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0504AA] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto px-8 py-3 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">{isLoading ? 'Searching...' : 'Search'}</span>
                </button>
              </div>
            </div>

            {/* Search Tips */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-600 mb-2">
                <strong>Pro tip:</strong> Try searching for specific services like &quot;plumbing&quot;, &quot;electrical work&quot;, or &quot;home cleaning&quot;
              </p>
            </div>
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Verified Professionals</h3>
              <p className="text-sm text-gray-600">All workers are verified and background checked</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Quick Response</h3>
              <p className="text-sm text-gray-600">Get quotes and availability in minutes</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Award className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Customer Ratings</h3>
              <p className="text-sm text-gray-600">Real reviews from verified customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
