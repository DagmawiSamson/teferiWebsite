import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="contact" className="bg-locksmith-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🔑</span> Locksmith TA
            </h3>
            <p className="text-gray-300">
              Your trusted locksmith in Atlanta, GA. Providing 24/7 emergency locksmith services for over 10 years.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 Phone: (678) 650-4802</p>
              <p>📍 Serving Atlanta, GA & Surrounding Areas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/#services" className="block text-gray-300 hover:text-locksmith-gold-400 transition-colors">
                Services
              </Link>
              <Link to="/#testimonials" className="block text-gray-300 hover:text-locksmith-gold-400 transition-colors">
                Testimonials
              </Link>
              <a href="tel:+16786504802" className="block text-gray-300 hover:text-locksmith-gold-400 transition-colors">
                Emergency Service
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-locksmith-blue-800 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Locksmith TA LLC. All rights reserved.</p>
        </motion.div>

        {/* Prominent CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
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
            className="inline-block bg-locksmith-gold-500 text-locksmith-blue-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-locksmith-gold-400 transition-all relative overflow-hidden group min-h-[56px] flex items-center justify-center"
            aria-label="Call Locksmith TA at 678-650-4802"
          >
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                📞
              </motion.span>
              Call Now: (678) 650-4802
            </span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

