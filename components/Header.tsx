'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleGetStarted = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        // Check user role
        const { data: workerProfile } = await supabase
          .from('worker_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single()

        const { data: customerProfile } = await supabase
          .from('customer_profiles')
          .select('id')
          .eq('user_id', user.id)
          .single()

        if (workerProfile) {
          router.push('/dashboard/worker')
        } else if (customerProfile) {
          router.push('/dashboard/customer')
        } else {
          router.push('/auth/role-select')
        }
      } else {
        router.push('/auth/sign-up')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Click to home */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0504AA] to-[#0504AA] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">WH</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-[#0504AA] text-lg leading-none">WorkerHub</span>
              <span className="text-xs text-gray-600">Find Trusted Professionals</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              For Users
            </Link>
            <Link href="#workers" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              For Workers
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="px-4 py-2 text-[#0504AA] font-semibold hover:bg-blue-50 rounded-lg transition">
              Sign In
            </Link>
            <button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="px-4 py-2 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : 'Get Started'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 pt-4">
              <Link href="#features" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                For Users
              </Link>
              <Link href="#workers" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                For Workers
              </Link>
              <Link href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                About
              </Link>
              <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                Contact
              </Link>
              <div className="flex gap-2 pt-2 border-t border-gray-100 mt-2">
                <Link href="/auth/login" className="flex-1 px-3 py-2 text-[#0504AA] font-semibold hover:bg-blue-50 rounded-lg transition text-center">
                  Sign In
                </Link>
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    handleGetStarted()
                  }}
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Loading...' : 'Get Started'}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
