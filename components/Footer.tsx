'use client'

import { Mail, Phone, MapPin, Share2, Send, Link, ExternalLink, ArrowUpRight } from 'lucide-react'

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
            <div className="mb-6 pb-6 border-b border-gray-800 md:border-0">
              <a href="https://workershub.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#0504AA] hover:text-[#0504AA] transition group">
                Visit Our Other Platform
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition transform" />
              </a>
            </div>
            <div className="flex gap-3">
              <a href="https://twitter.com/Worker_Hub" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition" title="X (Twitter)">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.674-5.865 6.674h-3.31l7.732-8.835L.424 2.25h6.679l4.632 6.122 5.509-6.122zM17.534 20.766h1.829L6.322 3.904H4.340z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@worker_hubs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition" title="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.498 3.75V15.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v9.75M6.5 4h2.008v10.75c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5c.4 0 .784.067 1.146.188"/></svg>
              </a>
              <a href="https://www.instagram.com/workerhub247" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition" title="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="mailto:Workerhub247@gmail.com" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0504AA] transition" title="Email">
                <Mail className="w-4 h-4" />
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
                <a href="mailto:Workerhub247@gmail.com" className="hover:text-white transition">Workerhub247@gmail.com</a>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-sm text-gray-400">
            <p>&copy; 2026 WorkerHub. All rights reserved.</p>
          </div>
          <div className="text-sm text-gray-400 text-center">
            <p>Building trust in the gig economy</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400 md:justify-end flex-wrap justify-center md:justify-end">
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
