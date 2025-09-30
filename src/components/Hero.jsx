import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Achieve Your <span className="text-yellow-300">Dream</span> IELTS Score
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of successful students who achieved Band 7+ with our proven teaching methods, 
              expert instructors, and cutting-edge learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                Book Consultation
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-blue-100">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-blue-100">Student Rating</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-2 shadow-2xl transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="IELTS Students" 
                className="rounded-xl w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-4 rounded-xl shadow-lg">
              <div className="text-sm font-semibold">Next Batch Starting</div>
              <div className="text-lg font-bold">15th December</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero