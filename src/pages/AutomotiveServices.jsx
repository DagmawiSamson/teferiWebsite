import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AutomotiveServices = () => {
  const services = [
    {
      title: 'Car Lockout Service',
      description: 'Fast 24/7 car lockout assistance. We can unlock any vehicle make and model without damaging your car.',
      icon: '🚗'
    },
    {
      title: 'Key Replacement',
      description: 'Lost your car keys? We can create new keys for all vehicle makes and models, including transponder keys.',
      icon: '🔑'
    },
    {
      title: 'Ignition Repair',
      description: 'Expert ignition repair and replacement services. We can fix stuck or broken ignitions quickly and professionally.',
      icon: '🔧'
    },
    {
      title: 'Key Fob Programming',
      description: 'Professional programming of key fobs and remote entry systems for all modern vehicles.',
      icon: '📱'
    },
    {
      title: 'Trunk Unlocking',
      description: 'Emergency trunk unlocking service. We can safely open locked trunks without causing damage.',
      icon: '📦'
    },
    {
      title: 'Broken Key Extraction',
      description: 'Expert removal of broken keys from ignitions, doors, or trunks. We\'ll extract it safely and make you a new key.',
      icon: '🔓'
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
              🚗 Automotive Locksmith Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional auto locksmith services in Atlanta, GA. Fast, reliable, and available 24/7 
              for all your automotive lock and key needs.
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
              Our Automotive Services
            </h2>
            <p className="text-xl text-gray-600">
              Complete auto locksmith solutions for all vehicle types
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-locksmith-blue-900 mb-8">
              We Service All Vehicle Makes & Models
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you drive a domestic or import vehicle, we have the tools and expertise 
              to handle any automotive locksmith job. From classic cars to the latest models, 
              we can help with all your lock and key needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi', 'Nissan'].map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-gray-50 p-4 rounded-lg font-semibold text-locksmith-blue-900"
                >
                  {brand}
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
              Locked Out? We Can Help!
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait in the heat or cold. Call Locksmith TA for fast, professional 
              automotive locksmith services available 24/7 throughout Atlanta, GA.
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

export default AutomotiveServices

