'use client'

import { Search, MapPin, CheckCircle2, Clock, Award } from 'lucide-react'
import { useState } from 'react'

export default function HeroSearch() {
  const [service, setService] = useState('all')
  const [location, setLocation] = useState('')
  const [searchSubmitted, setSearchSubmitted] = useState(false)

  const services = [
    { id: 'all', label: 'All Services', icon: '🔧' },
    { id: 'plumbing', label: 'Plumbing', icon: '🚰' },
    { id: 'electrical', label: 'Electrical', icon: '⚡' },
    { id: 'carpentry', label: 'Carpentry', icon: '🪵' },
    { id: 'cleaning', label: 'Cleaning', icon: '🧹' },
    { id: 'painting', label: 'Painting', icon: '🎨' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchSubmitted(true)
    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results')
      resultsSection?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Find Trusted Professionals
            <span className="block text-[#0504AA]">Near You, Instantly</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search verified local workers, see live availability, and connect with experts in your area. Fast, reliable, and transparent.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            {/* Service Category Tabs */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setService(svc.id)}
                  type="button"
                  className={`py-2 px-3 rounded-lg font-medium transition text-sm ${
                    service === svc.id
                      ? 'bg-[#0504AA] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1">{svc.icon}</span>
                  <span className="hidden sm:inline">{svc.label}</span>
                </button>
              ))}
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
                  className="w-full sm:w-auto px-8 py-3 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition shadow-md flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span className="hidden sm:inline">Search</span>
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
