import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SecurityUpgrades = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Security Upgrades Near Me | Smart Lock Installation Atlanta, GA"
        description="Modern security upgrades in Atlanta, GA. Smart locks, keyless entry, access control systems. Professional installation. Call (678) 650-4802 for security upgrades."
        keywords="security upgrades, smart locks, keyless entry, access control, security upgrades near me, smart lock installation, keyless entry systems Atlanta"
        canonical="https://locksmithta.com/security-upgrades"
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
              🛡️ Security Upgrades
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Modern security upgrades for your home or business. Smart locks, keyless entry, 
              and advanced access systems for enhanced protection.
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
              Modern Security Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Upgrade your security with the latest technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                title: 'Smart Locks',
                description: 'Keyless entry with smartphone control, remote access, and activity monitoring. Perfect for modern homes and businesses.',
              },
              {
                icon: '🔐',
                title: 'Keyless Entry Systems',
                description: 'Keypad and biometric entry systems that eliminate the need for keys while providing enhanced security.',
              },
              {
                icon: '🎫',
                title: 'Access Control Systems',
                description: 'Advanced access control with keycards, biometric scanners, and time-based access restrictions.',
              },
              {
                icon: '📹',
                title: 'Security Camera Integration',
                description: 'Integrate your locks with security cameras for comprehensive home or business monitoring.',
              },
              {
                icon: '🔔',
                title: 'Smart Alarms',
                description: 'Connect your locks to smart alarm systems for complete security coverage and instant alerts.',
              },
              {
                icon: '🌐',
                title: 'Remote Monitoring',
                description: 'Monitor and control your locks from anywhere in the world using your smartphone or computer.',
              },
            ].map((service, index) => (
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
              Benefits of Security Upgrades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🔒', title: 'Enhanced Protection', text: 'Advanced security features provide better protection than traditional locks' },
                { icon: '📱', title: 'Convenience', text: 'Control your locks remotely and never worry about lost keys again' },
                { icon: '👁️', title: 'Monitoring', text: 'Track who enters and when with activity logs and notifications' },
                { icon: '💰', title: 'Value', text: 'Increase your property value with modern security upgrades' },
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
              Upgrade Your Security Today
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact Locksmith TA to discuss your security upgrade options. 
              We'll help you choose the best modern security solutions for your needs.
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

export default SecurityUpgrades

