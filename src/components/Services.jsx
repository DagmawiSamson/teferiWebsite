import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, title, description, delay, effect = 'lift', path }) => {
  const cardVariants = {
    lift: {
      hover: { y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' },
    },
    glow: {
      hover: { 
        boxShadow: '0 0 30px rgba(255, 201, 26, 0.5)',
        scale: 1.05,
      },
    },
    flip: {
      hover: { rotateY: 5, scale: 1.02 },
    },
  }

  const variants = cardVariants[effect] || cardVariants.lift

  return (
    <Link to={path || '#'} className="block">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay }}
        whileHover={variants.hover}
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
      >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="text-5xl mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-locksmith-blue-900 mb-3 group-hover:text-locksmith-gold-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-locksmith-gold-500 mt-4"
      />
      </motion.div>
    </Link>
  )
}

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Services',
      description: 'Secure your home with our expert locksmith services. Lock installation, repair, and replacement for all residential needs.',
      effect: 'lift',
      path: '/residential-services',
    },
    {
      icon: '🚗',
      title: 'Automotive Services',
      description: 'Locked out of your car? We provide fast 24/7 automotive locksmith services including key replacement and ignition repair.',
      effect: 'glow',
      path: '/automotive-services',
    },
    {
      icon: '🏢',
      title: 'Commercial Services',
      description: 'Protect your business with comprehensive security solutions including master key systems and access control.',
      effect: 'flip',
      path: '/commercial-services',
    },
    {
      icon: '🔓',
      title: 'Emergency Lockout Service',
      description: 'Fast response to get you back inside your home, car, or office when you\'re locked out. Available 24/7.',
      effect: 'lift',
      path: '/emergency-lockout',
    },
    {
      icon: '🔐',
      title: 'Lock Installation & Repair',
      description: 'Professional installation and expert repair services for all types of locks, ensuring your security is never compromised.',
      effect: 'glow',
      path: '/lock-installation-repair',
    },
    {
      icon: '🛡️',
      title: 'Security Upgrades',
      description: 'Modern security upgrades including smart locks, keyless entry, and advanced access systems for enhanced protection.',
      effect: 'flip',
      path: '/security-upgrades',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-locksmith-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive locksmith solutions for all your security needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="tel:+16786504802"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-locksmith-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-locksmith-blue-800 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Get Free Quote</span>
            <motion.div
              className="absolute inset-0 bg-locksmith-gold-500"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

