import React from 'react'

const Features = () => {
  const features = [
    {
      icon: "🎤",
      title: "Speaking Practice",
      description: "One-on-one speaking sessions with certified IELTS examiners and instant feedback on fluency, vocabulary, and pronunciation.",
      color: "bg-blue-500"
    },
    {
      icon: "📝",
      title: "Mock Tests",
      description: "Full-length simulated tests with detailed performance analytics and personalized improvement recommendations.",
      color: "bg-green-500"
    },
    {
      icon: "🤖",
      title: "AI Band Score",
      description: "Advanced AI technology to predict your band score and provide targeted practice for weak areas.",
      color: "bg-purple-500"
    },
    {
      icon: "📚",
      title: "Study Materials",
      description: "Comprehensive study materials, video lessons, and practice exercises curated by Band 9 achievers.",
      color: "bg-orange-500"
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTSPro?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines expert instruction with cutting-edge technology 
            to maximize your IELTS preparation efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 card-hover border border-gray-100"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white text-xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your IELTS Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Join our next batch and get access to all features with a 7-day money-back guarantee.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features