'use client'

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0504AA] to-[#0504AA] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">WH</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-[#0504AA] text-lg leading-none">WorkerHub</span>
              <span className="text-xs text-gray-600">Find Trusted Professionals</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              For Users
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              For Workers
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-[#0504AA] font-semibold hover:bg-blue-50 rounded-lg transition">
              Sign In
            </button>
            <button className="px-4 py-2 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition">
              Get Started
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
              <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                For Users
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                For Workers
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-[#0504AA] font-medium transition px-2 py-1">
                Contact
              </a>
              <div className="flex gap-2 pt-2 border-t border-gray-100 mt-2">
                <button className="flex-1 px-3 py-2 text-[#0504AA] font-semibold hover:bg-blue-50 rounded-lg transition">
                  Sign In
                </button>
                <button className="flex-1 px-3 py-2 bg-[#0504AA] text-white font-semibold rounded-lg hover:bg-[#040399] transition">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
