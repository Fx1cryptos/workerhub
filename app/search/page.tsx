import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, MapPin, Star, Filter } from 'lucide-react'

// Mock worker data - will be replaced with real data from Supabase
const mockWorkers = [
  {
    id: '1',
    name: 'John Plumbing Pro',
    category: 'Plumbing',
    rating: 4.9,
    reviews: 127,
    image: 'https://via.placeholder.com/400x300?text=John+Plumbing+Pro',
    location: 'Lekki, Lagos',
    distance: '2 km away',
    hourlyRate: '₦5,000/hr',
    verified: true,
    available: true,
  },
  {
    id: '2',
    name: 'Mike Electrical',
    category: 'Electrical',
    rating: 4.8,
    reviews: 95,
    image: 'https://via.placeholder.com/400x300?text=Mike+Electrical',
    location: 'VI, Lagos',
    distance: '3.5 km away',
    hourlyRate: '₦6,000/hr',
    verified: true,
    available: true,
  },
  {
    id: '3',
    name: 'Bola Carpentry',
    category: 'Carpentry',
    rating: 4.7,
    reviews: 82,
    image: 'https://via.placeholder.com/400x300?text=Bola+Carpentry',
    location: 'Ikoyi, Lagos',
    distance: '4 km away',
    hourlyRate: '₦4,500/hr',
    verified: true,
    available: false,
  },
]

function SearchFilters() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-[#0504AA]" />
        <h3 className="font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Rating</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#0504AA] rounded" defaultChecked />
              <span className="ml-3 text-sm text-gray-600">4.5+ stars</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#0504AA] rounded" />
              <span className="ml-3 text-sm text-gray-600">4.0+ stars</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-[#0504AA] rounded" />
              <span className="ml-3 text-sm text-gray-600">3.5+ stars</span>
            </label>
          </div>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-[#0504AA] rounded" defaultChecked />
            <span className="ml-3 text-sm text-gray-600">Available Now</span>
          </label>
        </div>

        {/* Verification Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Status</label>
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-[#0504AA] rounded" defaultChecked />
            <span className="ml-3 text-sm text-gray-600">Verified Only</span>
          </label>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function SearchResults({ query, location, service }: { query: string; location: string; service: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {mockWorkers.length} professionals found
        </h2>
        <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0504AA]">
          <option>Relevance</option>
          <option>Highest Rated</option>
          <option>Lowest Price</option>
          <option>Closest</option>
        </select>
      </div>

      <div className="grid gap-4">
        {mockWorkers.map((worker) => (
          <div
            key={worker.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex gap-4 p-4 sm:flex-row flex-col">
              {/* Image */}
              <div className="sm:w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={worker.image}
                  alt={worker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{worker.name}</h3>
                        {worker.verified && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{worker.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{worker.hourlyRate}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(worker.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{worker.rating}</span>
                    <span className="text-sm text-gray-600">({worker.reviews} reviews)</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {worker.location} • {worker.distance}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-[#0504AA] text-white font-medium rounded-lg hover:bg-[#040399] transition">
                    View Profile
                  </button>
                  <button className="flex-1 px-4 py-2 border border-[#0504AA] text-[#0504AA] font-medium rounded-lg hover:bg-blue-50 transition">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="sm:flex items-end hidden">
                {worker.available ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Available
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    Not Available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; location?: string; service?: string }
}) {
  const query = searchParams.q || ''
  const location = searchParams.location || ''
  const service = searchParams.service || 'all'

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">
            {query && location
              ? `Showing ${query} professionals in ${location}`
              : 'Showing all professionals'}
          </p>
        </div>

        {/* Search and Filters Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Suspense fallback={<div>Loading filters...</div>}>
              <SearchFilters />
            </Suspense>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>Loading results...</div>}>
              <SearchResults query={query} location={location} service={service} />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
