'use client'

import { Mail, Phone, MapPin, Share2, Send, Link } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0504AA] to-[#0504AA] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WH</span>
              </div>
              <span className="font-bold text-white text-lg">WorkerHub</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Nigeria's leading platform for finding trusted local professionals. Quick, reliable, and transparent.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition">
                <Link className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-bold text-white mb-4">For Users</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Find Professionals</a></li>
              <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Safety & Trust</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h4 className="font-bold text-white mb-4">For Professionals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Become a Professional</a></li>
              <li><a href="#" className="hover:text-white transition">Earn Money</a></li>
              <li><a href="#" className="hover:text-white transition">Business Tools</a></li>
              <li><a href="#" className="hover:text-white transition">Support & Resources</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#0504AA]" />
                <span>+234 (0) 123 456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#0504AA]" />
                <a href="mailto:support@workerhub.ng" className="hover:text-white transition">support@workerhub.ng</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#0504AA]" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 WorkerHub. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400 md:justify-end">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
