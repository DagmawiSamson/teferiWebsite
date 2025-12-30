import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LockInstallationRepair = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Lock Installation & Repair Near Me | Professional Lock Services Atlanta, GA"
        description="Professional lock installation and repair services in Atlanta, GA. Expert lock installation, lock repair, broken key extraction. 24/7 service. Call (678) 650-4802."
        keywords="lock installation, lock repair, lock installation near me, lock repair near me, broken key extraction, lock installation Atlanta, lock repair Atlanta"
        canonical="https://locksmithta.com/lock-installation-repair"
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
              🔐 Lock Installation & Repair
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional lock installation and repair services in Atlanta, GA. 
              Expert technicians ensuring your security is never compromised.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-locksmith-blue-900 mb-6">
                🔧 Lock Installation
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>High-security deadbolt installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Smart lock installation and setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Traditional lock installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Window lock installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Commercial lock installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Master key system installation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-locksmith-blue-900 mb-6">
                🔨 Lock Repair
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Stuck or jammed lock repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Broken key extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Lock mechanism repair</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Door lock alignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Lock lubrication and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-locksmith-gold-500 mt-1">✓</span>
                  <span>Emergency lock repair</span>
                </li>
              </ul>
            </motion.div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-locksmith-blue-900 mb-8">
              Why Choose Professional Lock Installation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Proper lock installation is crucial for your security. Our expert technicians ensure 
              that your locks are installed correctly, providing maximum protection for your home or business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🛡️', title: 'Maximum Security', text: 'Properly installed locks provide optimal protection' },
                { icon: '⚡', title: 'Quick Service', text: 'Fast, efficient installation and repair' },
                { icon: '✅', title: 'Warranty', text: 'We stand behind our work with a satisfaction guarantee' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-locksmith-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
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
              Need Lock Installation or Repair?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact Locksmith TA for professional lock installation and repair services 
              throughout Atlanta, GA. Available 24/7 for your convenience.
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

export default LockInstallationRepair

