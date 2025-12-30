import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Only show navigation links on home page
  const isHomePage = location.pathname === '/'

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
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl">🔑</span>
              <span className="text-xl font-bold text-white">Locksmith TA</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <a 
                  href="#services" 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-white hover:text-locksmith-gold-400 transition-colors cursor-pointer"
                >
                  Services
                </a>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                  className="text-white hover:text-locksmith-gold-400 transition-colors cursor-pointer"
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="text-white hover:text-locksmith-gold-400 transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link to="/#services" className="text-white hover:text-locksmith-gold-400 transition-colors">
                  Services
                </Link>
                <Link to="/#testimonials" className="text-white hover:text-locksmith-gold-400 transition-colors">
                  Testimonials
                </Link>
                <Link to="/#contact" className="text-white hover:text-locksmith-gold-400 transition-colors">
                  Contact
                </Link>
              </>
            )}
          </div>

          <motion.a
            href="tel:+16786504802"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-locksmith-gold-500 text-locksmith-blue-900 px-6 py-2 rounded-full font-bold hover:bg-locksmith-gold-400 transition-colors min-h-[44px] flex items-center justify-center"
            aria-label="Call Locksmith TA at 678-650-4802"
          >
            Call Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

