import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us | Locksmith TA | 24/7 Emergency Locksmith Atlanta, GA"
        description="Contact Locksmith TA for 24/7 emergency locksmith services in Atlanta, GA. Call (678) 650-4802 for fast, reliable locksmith services. Serving residential, commercial & automotive needs."
        keywords="contact locksmith, locksmith contact, emergency locksmith contact, locksmith Atlanta contact, call locksmith"
        canonical="https://locksmithta.com/contact"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-locksmith-blue-900 to-locksmith-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Locksmith TA
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Available 24/7 for all your locksmith needs in Atlanta, GA and surrounding areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-locksmith-blue-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="text-xl font-bold text-locksmith-blue-900 mb-2">Phone</h3>
                    <a 
                      href="tel:+16786504802" 
                      className="text-locksmith-blue-700 hover:text-locksmith-gold-500 text-lg font-semibold transition-colors"
                    >
                      (678) 650-4802
                    </a>
                    <p className="text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-xl font-bold text-locksmith-blue-900 mb-2">Service Area</h3>
                    <p className="text-gray-700 text-lg">
                      Atlanta, GA & Surrounding Areas
                    </p>
                    <p className="text-gray-600 mt-1">
                      Including Sandy Springs, Roswell, Marietta, Alpharetta, and more
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-4xl">🕐</div>
                  <div>
                    <h3 className="text-xl font-bold text-locksmith-blue-900 mb-2">Hours</h3>
                    <p className="text-gray-700 text-lg">
                      24/7 Emergency Service
                    </p>
                    <p className="text-gray-600 mt-1">
                      We're always available when you need us most
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-locksmith-blue-900 to-locksmith-blue-800 rounded-2xl p-8 text-white shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
              <p className="text-gray-200 mb-8 text-lg">
                Locked out? Lost your keys? Need emergency locksmith service? 
                We're here to help 24/7 with fast, professional service.
              </p>
              
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
                className="block w-full bg-locksmith-gold-500 text-locksmith-blue-900 px-8 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-locksmith-gold-400 transition-all text-center mb-6"
                aria-label="Call Locksmith TA at 678-650-4802"
              >
                📞 Call Now: (678) 650-4802
              </motion.a>

              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-bold mb-4">Our Services Include:</h3>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <span>✓</span> Emergency Lockout Service
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Residential Locksmith Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Commercial Locksmith Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Automotive Locksmith Services
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Lock Installation & Repair
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Key Replacement & Duplication
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
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
              Areas We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Locksmith TA provides professional locksmith services throughout the greater Atlanta area
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Atlanta', 'Sandy Springs', 'Roswell', 'Marietta', 'Alpharetta', 'Dunwoody', 'Johns Creek', 'Peachtree Corners'].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-locksmith-blue-900">{city}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-locksmith-blue-900 to-locksmith-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait until you're locked out. Contact Locksmith TA today for all your locksmith needs.
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

export default Contact

