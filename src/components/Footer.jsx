import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="ml-2 text-xl font-bold">IELTSPro</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in IELTS preparation. We've helped thousands of students 
              achieve their dream scores and unlock global opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">Facebook</span>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                  alt="Facebook" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">Twitter</span>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png" 
                  alt="Twitter" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png" 
                  alt="Instagram" 
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                  alt="LinkedIn" 
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition duration-300">Courses</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📧 mdshahidnat413@gmail.com</li>
              <li>📞 +91 9905300418</li>
              <li>📍 786 Academy,Salem(Tamilnadu)</li>
              <li>🌐 www.ieltspro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 IELTSPro Institute. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer