'use client'

import { useState } from 'react'
import { MapPin, Star, Phone, MessageSquare, Check } from 'lucide-react'

export default function MapSection() {
  const [selectedWorker, setSelectedWorker] = useState<number | null>(null)

  // Mock worker data
  const workers = [
    {
      id: 1,
      name: 'Chinedu Okafor',
      service: 'Master Plumber',
      rating: 4.9,
      reviews: 234,
      location: 'Lekki, Lagos',
      verified: true,
      image: '👨‍🔧',
      available: true,
      responseTime: '15 mins',
      price: '₦15,000 - ₦50,000',
      description: 'Expert in residential and commercial plumbing with 12 years experience',
    },
    {
      id: 2,
      name: 'Blessing Ejiro',
      service: 'Certified Electrician',
      rating: 4.8,
      reviews: 189,
      location: 'VI, Lagos',
      verified: true,
      image: '⚡',
      available: true,
      responseTime: '20 mins',
      price: '₦12,000 - ₦40,000',
      description: 'Licensed electrician specializing in installations and repairs',
    },
    {
      id: 3,
      name: 'Ikechukwu Nnamdi',
      service: 'Professional Carpenter',
      rating: 4.7,
      reviews: 156,
      location: 'Yaba, Lagos',
      verified: true,
      image: '🪵',
      available: false,
      responseTime: '2 hours',
      price: '₦20,000 - ₦80,000',
      description: 'Custom furniture and general carpentry work',
    },
    {
      id: 4,
      name: 'Ama Mensah',
      service: 'House Cleaner',
      rating: 4.9,
      reviews: 312,
      location: 'Ikoyi, Lagos',
      verified: true,
      image: '🧹',
      available: true,
      responseTime: '30 mins',
      price: '₦8,000 - ₦25,000',
      description: 'Professional residential and office cleaning services',
    },
  ]

  return (
    <section id="results" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted Professionals Near You
          </h2>
          <p className="text-lg text-gray-600">
            View verified workers in your area with real-time availability and customer ratings
          </p>
        </div>

        {/* Map and Workers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map Placeholder */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-96">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#0504AA] mx-auto mb-4 opacity-70" />
                  <p className="text-gray-700 font-semibold">Interactive Map View</p>
                  <p className="text-sm text-gray-600 mt-2">Workers marked in your area</p>
                  <div className="mt-6 text-xs text-gray-600 space-y-2">
                    <div className="inline-block px-3 py-1 bg-green-100 rounded-full">
                      <span className="text-green-800 font-medium">● Available</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full ml-2">
                      <span className="text-gray-800 font-medium">● Busy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workers List */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-4">
            {workers.map((worker) => (
              <div
                key={worker.id}
                onClick={() => setSelectedWorker(worker.id)}
                className={`bg-white rounded-xl p-5 shadow transition cursor-pointer border-2 ${
                  selectedWorker === worker.id
                    ? 'border-[#0504AA] shadow-lg'
                    : 'border-transparent hover:shadow-md'
                }`}
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0504AA] to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                      {worker.image}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 text-lg">{worker.name}</h3>
                          {worker.verified && (
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm font-semibold text-[#0504AA]">{worker.service}</p>
                      </div>

                      {/* Status Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${
                        worker.available
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {worker.available ? '● Available' : '● Busy'}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 my-2">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span>
                        <span className="font-bold text-gray-900">{worker.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">({worker.reviews} reviews)</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600">{worker.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3">{worker.description}</p>

                    {/* Details Row */}
                    <div className="flex flex-wrap gap-4 text-sm mb-3">
                      <div>
                        <span className="text-gray-600">Response: </span>
                        <span className="font-semibold text-gray-900">{worker.responseTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Price: </span>
                        <span className="font-semibold text-gray-900">{worker.price}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Contact</span>
                      </button>
                      <button className="flex-1 px-4 py-2 border-2 border-[#0504AA] text-[#0504AA] font-semibold rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">Message</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More */}
            <button className="w-full py-3 text-[#0504AA] font-semibold border-2 border-[#0504AA] rounded-lg hover:bg-blue-50 transition">
              Load More Professionals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
