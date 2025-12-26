import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CommercialServices = () => {
  const services = [
    {
      title: 'Master Key Systems',
      description: 'Custom master key systems that give you control over access to different areas of your business.',
      icon: '🗝️'
    },
    {
      title: 'Access Control Systems',
      description: 'Modern access control solutions including keycard systems, biometric access, and electronic locks.',
      icon: '🔐'
    },
    {
      title: 'Commercial Lock Installation',
      description: 'Professional installation of high-security commercial locks for offices, warehouses, and retail spaces.',
      icon: '🏢'
    },
    {
      title: 'Safe Installation & Repair',
      description: 'Expert safe installation, repair, and maintenance services for your business valuables.',
      icon: '💰'
    },
    {
      title: 'Emergency Commercial Service',
      description: '24/7 emergency locksmith services for businesses. Fast response to minimize downtime.',
      icon: '🚨'
    },
    {
      title: 'Key Management Systems',
      description: 'Comprehensive key management solutions including key tracking, duplication, and organization.',
      icon: '📋'
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="bg-gradient-to-br from-locksmith-blue-900 via-locksmith-blue-800 to-locksmith-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🏢 Commercial Locksmith Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Protect your business with professional commercial locksmith services in Atlanta, GA. 
              Comprehensive security solutions for businesses of all sizes.
            </p>
            <motion.a
              href="tel:+16786504802"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-locksmith-gold-500 text-locksmith-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-locksmith-gold-400 transition-all"
            >
              Call Now: (678) 650-4802
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-locksmith-blue-900 mb-4">
              Our Commercial Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete security solutions for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-locksmith-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-locksmith-blue-900 mb-8 text-center">
              Why Businesses Choose Locksmith TA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Minimal Downtime', text: 'Fast service to get your business back to normal operations quickly' },
                { icon: '🔒', title: 'Enhanced Security', text: 'Advanced security systems to protect your business assets' },
                { icon: '👥', title: 'Scalable Solutions', text: 'Security systems that grow with your business' },
                { icon: '💼', title: 'Business Experience', text: 'Years of experience serving businesses throughout Atlanta' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-locksmith-blue-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-locksmith-blue-900 to-locksmith-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact Locksmith TA for professional commercial locksmith services. 
              We work with businesses of all sizes throughout Atlanta, GA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+16786504802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-locksmith-gold-500 text-locksmith-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-locksmith-gold-400 transition-all"
              >
                Call Now: (678) 650-4802
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="border-2 border-locksmith-gold-500 text-locksmith-gold-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-locksmith-gold-500 hover:text-locksmith-blue-900 transition-all inline-block"
                >
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CommercialServices

