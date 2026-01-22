import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ResidentialServices = () => {
  const services = [
    {
      title: 'Lock Installation',
      description: 'Professional installation of high-security deadbolts, smart locks, and traditional locks for all your doors and windows.',
      icon: '🔐'
    },
    {
      title: 'Lock Repair & Replacement',
      description: 'Expert repair services for damaged or malfunctioning locks. We can fix or replace any type of residential lock.',
      icon: '🔧'
    },
    {
      title: 'Emergency Lockout Service',
      description: '24/7 emergency lockout assistance. We\'ll get you back inside your home quickly and safely without damaging your locks.',
      icon: '🚨'
    },
    {
      title: 'Key Duplication',
      description: 'Fast and accurate key duplication for all types of residential keys. We can make keys for any lock brand or type.',
      icon: '🔑'
    },
    {
      title: 'Re-keying Services',
      description: 'Change your locks without replacing them. We can re-key all your locks to work with a single new key for convenience.',
      icon: '🔄'
    },
    {
      title: 'Smart Lock Installation',
      description: 'Upgrade to modern smart locks with keyless entry, remote access, and advanced security features.',
      icon: '📱'
    },
  ]

  return (
    <div className="min-h-screen">
      <SEO 
        title="Residential Locksmith Services Near Me | Home Locksmith Atlanta, GA"
        description="Professional residential locksmith services in Atlanta, GA. Lock installation, repair, key replacement, and smart lock installation. 24/7 service. Call (678) 650-4802."
        keywords="residential locksmith, home locksmith, residential locksmith near me, home locksmith Atlanta, lock installation, lock repair, key replacement, smart lock installation"
        canonical="https://locksmithta.com/residential-services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-locksmith-blue-900 via-locksmith-blue-800 to-locksmith-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🏠 Residential Locksmith Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Secure your home with professional locksmith services in Atlanta, GA. 
              Available 24/7 for all your residential security needs.
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

      {/* Services List */}
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
              Our Residential Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive locksmith solutions for your home
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

      {/* Why Choose Us */}
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
              Why Choose Locksmith TA for Residential Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '⚡', title: 'Fast Response', text: '15-minute average response time for emergency calls' },
                { icon: '🛡️', title: 'Licensed & Insured', text: 'Fully licensed, bonded, and insured for your protection' },
                { icon: '💰', title: 'Fair Pricing', text: 'Transparent, competitive pricing with no hidden fees' },
                { icon: '⭐', title: 'Expert Technicians', text: 'Experienced professionals with 10+ years in the business' },
                { icon: '🔧', title: 'Quality Work', text: 'We stand behind our work with a satisfaction guarantee' },
                { icon: '📞', title: '24/7 Availability', text: 'Round-the-clock service for all your emergency needs' },
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
              Ready to Secure Your Home?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact Locksmith TA today for professional residential locksmith services. 
              We're available 24/7 to help with all your home security needs.
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

export default ResidentialServices

