import React from 'react'
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">AI Chat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Behavior Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Multi-Pet Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-200">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
            <div className="flex items-center mb-4">
              <Mail className="text-gray-500 mr-2" aria-hidden="true"/>
              <p className="text-gray-400">Subscribe to our newsletter</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Facebook"><Facebook className="w-6 h-6" aria-hidden="true"/></a>
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Twitter"><Twitter className="w-6 h-6" aria-hidden="true"/></a>
              <a href="#" className="hover:text-primary transition-colors duration-200" aria-label="Instagram"><Instagram className="w-6 h-6" aria-hidden="true"/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; 2024 AI Pet Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
