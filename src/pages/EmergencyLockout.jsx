import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EmergencyLockout = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Emergency Lockout Service Near Me | 24/7 Lockout Service Atlanta, GA"
        description="Locked out? Emergency lockout service near me in Atlanta, GA. Fast 24/7 response for home, car, and office lockouts. Call (678) 650-4802 now! No damage guarantee."
        keywords="emergency lockout service, lockout service near me, locked out, car lockout, home lockout, office lockout, emergency locksmith near me, 24/7 lockout service Atlanta"
        canonical="https://locksmithta.com/emergency-lockout"
      />
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
              🚨 Emergency Lockout Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Locked out? We're here to help 24/7! Fast, professional emergency lockout service 
              throughout Atlanta, GA. Available day or night.
            </p>
            <motion.a
              href="tel:+16786504802"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 201, 26, 0.7)',
                  '0 0 0 15px rgba(255, 201, 26, 0)',
                  '0 0 0 0 rgba(255, 201, 26, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block bg-locksmith-gold-500 text-locksmith-blue-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-locksmith-gold-400 transition-all"
            >
              📞 Emergency: (678) 650-4802
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🏠',
                title: 'Home Lockout',
                description: 'Locked out of your house? We can get you back inside quickly and safely without damaging your locks.',
              },
              {
                icon: '🚗',
                title: 'Car Lockout',
                description: 'Keys locked in your car? Our auto locksmiths can unlock any vehicle make and model without damage.',
              },
              {
                icon: '🏢',
                title: 'Office Lockout',
                description: 'Locked out of your office or business? We provide fast commercial lockout services to minimize downtime.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-locksmith-blue-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-locksmith-blue-900 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">What to Do When Locked Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { step: '1', text: 'Stay calm and find a safe place to wait' },
                { step: '2', text: 'Call Locksmith TA immediately at (678) 650-4802' },
                { step: '3', text: 'Our technician will arrive within 15-30 minutes' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-locksmith-gold-400 mb-2">
                    {item.step}
                  </div>
                  <p className="text-gray-200">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Why Choose Locksmith TA for Emergency Lockouts?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Fast Response', text: 'Average 15-minute response time throughout Atlanta' },
                { icon: '🛡️', title: 'No Damage Guarantee', text: 'We unlock without damaging your locks or property' },
                { icon: '💰', title: 'Fair Pricing', text: 'Transparent pricing with no hidden fees or surprises' },
                { icon: '🔧', title: 'Expert Technicians', text: 'Licensed, insured, and experienced professionals' },
                { icon: '⏰', title: '24/7 Availability', text: 'Available day or night, weekends and holidays' },
                { icon: '🚗', title: 'Fully Equipped', text: 'Mobile service vehicles with all necessary tools' },
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
              Don't Wait - Call Now!
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Locked out? We're available 24/7 to help you get back inside quickly and safely. 
              Fast, professional emergency lockout service throughout Atlanta, GA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+16786504802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(255, 201, 26, 0.7)',
                    '0 0 0 15px rgba(255, 201, 26, 0)',
                    '0 0 0 0 rgba(255, 201, 26, 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="bg-locksmith-gold-500 text-locksmith-blue-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-locksmith-gold-400 transition-all"
              >
                📞 Emergency: (678) 650-4802
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

export default EmergencyLockout

