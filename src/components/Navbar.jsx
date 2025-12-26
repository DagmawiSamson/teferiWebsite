import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-locksmith-blue-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className="text-2xl">🔑</span>
            <span className="text-xl font-bold text-white">Locksmith TA</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/#services" className="text-white hover:text-locksmith-gold-400 transition-colors">
              Services
            </Link>
            <Link to="/#testimonials" className="text-white hover:text-locksmith-gold-400 transition-colors">
              Testimonials
            </Link>
            <Link to="/#contact" className="text-white hover:text-locksmith-gold-400 transition-colors">
              Contact
            </Link>
          </div>

          <motion.a
            href="tel:+16786504802"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-locksmith-gold-500 text-locksmith-blue-900 px-6 py-2 rounded-full font-bold hover:bg-locksmith-gold-400 transition-colors"
          >
            Call Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

