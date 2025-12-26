import React from 'react'
import { motion } from 'framer-motion'

const TrustCard = ({ number, label, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-2xl transition-all duration-300"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="text-4xl mb-4"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        className="text-4xl md:text-5xl font-bold text-locksmith-gold-500 mb-2"
      >
        {number}
      </motion.div>
      <div className="text-lg text-gray-600 font-semibold">{label}</div>
    </motion.div>
  )
}

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-locksmith-blue-900 to-locksmith-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TrustCard
            number="10+"
            label="Years in Business"
            icon="🏆"
            delay={0}
          />
          <TrustCard
            number="24/7"
            label="Available Always"
            icon="⏰"
            delay={0.1}
          />
          <TrustCard
            number="100%"
            label="Satisfaction Guaranteed"
            icon="😊"
            delay={0.2}
          />
          <TrustCard
            number="Fast"
            label="Response Time"
            icon="⚡"
            delay={0.3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-locksmith-gold-500/20 backdrop-blur-sm rounded-xl p-6 border-2 border-locksmith-gold-400"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              🛡️
            </motion.div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-200">
                Fully licensed, bonded, and insured for your peace of mind
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustIndicators

