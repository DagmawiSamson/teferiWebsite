import React from 'react'
import { motion } from 'framer-motion'

const FloatingKey = ({ delay, x, y }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0.3, 0.7, 0.3],
        y: [0, -30, 0],
        x: [0, x, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      className="absolute text-4xl md:text-6xl"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      🔑
    </motion.div>
  )
}

const Hero = () => {
  const keys = [
    { delay: 0, x: 10, y: 20 },
    { delay: 0.5, x: 80, y: 30 },
    { delay: 1, x: 20, y: 60 },
    { delay: 1.5, x: 70, y: 70 },
    { delay: 2, x: 50, y: 40 },
    { delay: 2.5, x: 15, y: 80 },
    { delay: 3, x: 85, y: 50 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-locksmith-blue-900 via-locksmith-blue-800 to-locksmith-blue-900">
      {/* Floating Keys Background */}
      <div className="absolute inset-0 overflow-hidden">
        {keys.map((key, index) => (
          <FloatingKey key={index} {...key} />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow"
          >
            Your Trusted Locksmith
            <br />
            <span className="text-locksmith-gold-400">24/7 Emergency Service in Atlanta, GA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Fast, reliable locksmith services in Atlanta, GA. 24/7 emergency locksmith services including 
            lockout service, key replacement, and lock installation. Licensed, insured, and available now. 
            Call for immediate locksmith assistance!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="tel:+16786504802"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 201, 26, 0.7)',
                  '0 0 0 10px rgba(255, 201, 26, 0)',
                  '0 0 0 0 rgba(255, 201, 26, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="bg-locksmith-gold-500 text-locksmith-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-locksmith-gold-400 transition-all relative overflow-hidden group min-h-[48px] flex items-center justify-center"
              aria-label="Call Locksmith TA emergency line at 678-650-4802"
            >
              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  📞
                </motion.span>
                Call Now: (678) 650-4802
              </span>
              <motion.div
                className="absolute inset-0 bg-locksmith-gold-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('services')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - offset
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-locksmith-gold-500 text-locksmith-gold-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-locksmith-gold-500 hover:text-locksmith-blue-900 transition-all inline-block cursor-pointer"
            >
              Our Services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white"
          >
            <div className="flex items-center gap-2">
              <span className="text-locksmith-gold-400">✓</span>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-locksmith-gold-400">✓</span>
              <span>15-Minute Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-locksmith-gold-400">✓</span>
              <span>Licensed & Insured</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-4xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

