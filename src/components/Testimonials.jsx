import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shahid Ahmed",
      score: "Band 8.5",
      course: "Academic IELTS",
      text: "The speaking practice sessions were incredible! I improved from Band 6.5 to 8.0 in just 2 months. The personalized feedback made all the difference.",
      rating: 5
    },
    {
      name: "Wasim Raj", 
      score: "Band 7.5",
      course: "General Training",
      text: "The mock tests and AI analysis helped me identify my weak areas. I never thought I could achieve Band 7.5 in writing!",
      rating: 5
    },
    {
      name: "Sajid Raza",
      score: "Band 8.0", 
      course: "Academic IELTS",
      text: "Amazing institute! The study materials are comprehensive and the instructors are very supportive. Highly recommended!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  // Avatar colors for fallback
  const getAvatarColor = (index) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500']
    return colors[index % colors.length]
  }

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who achieved their dream scores and transformed their futures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 card-hover"
            >
              <div className="flex items-center mb-4">
                {/* Fallback Avatar */}
                <div className={`w-12 h-12 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-bold mr-4`}>
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{testimonial.score}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonial.course}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-yellow-400 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Average Student Rating: 4.9/5
            </h3>
            <p className="text-gray-600">
              Based on 1,200+ verified reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials