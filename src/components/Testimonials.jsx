import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    location: 'Buckhead, Atlanta, GA',
    rating: 5,
    text: 'I was locked out of my apartment at 11 PM on a Friday night. Called Locksmith TA and they had someone at my door in less than 20 minutes! The technician was professional, friendly, and got me back inside quickly without damaging my lock. The price was very reasonable too. I\'ve recommended them to all my neighbors!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    location: 'Midtown, Atlanta, GA',
    rating: 5,
    text: 'We needed to upgrade the security system for our small business. Locksmith TA came out, assessed our needs, and installed a complete master key system. The technician was knowledgeable, explained everything clearly, and the installation was done perfectly. Our employees love the new system and we feel much more secure. Excellent service!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Maria Thompson',
    location: 'Decatur, Atlanta, GA',
    rating: 5,
    text: 'My car keys broke off in the ignition and I was stranded at the grocery store. Called Locksmith TA and they arrived quickly. The technician was able to extract the broken key and make me a new one on the spot! He was patient, explained what he was doing, and had me back on the road in no time. Great experience from start to finish.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Robert Chen',
    location: 'Sandy Springs, Atlanta, GA',
    rating: 5,
    text: 'After a break-in attempt, I needed to replace all my locks immediately. Locksmith TA responded to my emergency call and had a technician out within 30 minutes. They installed high-security deadbolts on all my doors and even upgraded my front door lock to a smart lock. The work was done professionally and they cleaned up after themselves. I sleep much better now knowing my home is secure.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    location: 'Virginia Highlands, Atlanta, GA',
    rating: 5,
    text: 'I locked my keys in my car while picking up groceries. Locksmith TA was recommended by a friend and they did not disappoint! Fast response time, professional service, and they got my car unlocked without any damage. The technician was courteous and even helped me load my groceries. I\'ll definitely use them again and recommend them to others.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-locksmith-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="mb-6 relative"
                  >
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-locksmith-gold-400 shadow-lg"
                      loading="lazy"
                    />
                  </motion.div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-2xl text-locksmith-gold-500"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-700 mb-6 italic max-w-2xl"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="font-bold text-xl text-locksmith-blue-900">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-500">
                      {testimonials[currentIndex].location}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-locksmith-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-locksmith-blue-800 transition-colors z-10"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-locksmith-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-locksmith-blue-800 transition-colors z-10"
          >
            →
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-locksmith-gold-500 w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

