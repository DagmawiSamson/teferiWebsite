import React from 'react'
import { motion } from 'framer-motion'

const ServiceArea = () => {
  const majorAreas = [
    'Atlanta', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Alpharetta',
    'Marietta', 'Smyrna', 'Kennesaw', 'Duluth', 'Lawrenceville',
    'Decatur', 'Norcross', 'Dunwoody', 'East Point', 'College Park',
    'Peachtree Corners', 'Tucker', 'Stone Mountain', 'Conyers', 'McDonough'
  ]

  return (
    <section id="service-area" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-locksmith-blue-900 mb-4">
            Our Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We proudly serve Atlanta, GA and surrounding areas within a{' '}
            <span className="font-bold text-locksmith-gold-500">50-mile radius</span>
          </p>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-locksmith-gold-500/20 border-2 border-locksmith-gold-400 rounded-full px-6 py-3 mb-8"
          >
            <p className="text-locksmith-blue-900 font-bold text-lg">
              🚗 Fast Response Times Throughout Metro Atlanta
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.75110720747!2d-84.5606904!3d33.7677128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title="Locksmith TA Service Area - Atlanta, GA"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                <p className="text-sm font-semibold text-locksmith-blue-900">
                  📍 Serving 50-Mile Radius
                </p>
              </div>
            </div>
          </motion.div>

          {/* Areas List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-locksmith-blue-900 mb-6 flex items-center gap-2">
              <span>📍</span> Areas We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {majorAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-locksmith-gold-500">✓</span>
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-locksmith-blue-900/5 rounded-lg p-4 border-l-4 border-locksmith-gold-500"
            >
              <p className="text-gray-700">
                <strong className="text-locksmith-blue-900">And many more!</strong> We cover all areas within a 50-mile radius of Atlanta, including surrounding counties. 
                Not sure if we serve your area? Give us a call!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6"
            >
              <motion.a
                href="tel:+16786504802"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-locksmith-blue-900 text-white px-6 py-3 rounded-full font-bold hover:bg-locksmith-blue-800 transition-all shadow-lg"
              >
                Call to Confirm Service Area
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Counties Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-locksmith-blue-900 to-locksmith-blue-800 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Counties We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-sm">
            {[
              'Fulton', 'DeKalb', 'Gwinnett', 'Cobb', 'Clayton', 'Cherokee', 'Forsyth',
              'Henry', 'Douglas', 'Carroll', 'Coweta', 'Fayette', 'Rockdale', 'Paulding',
              'Newton', 'Bartow', 'Walton', 'Spalding', 'Barrow', 'Pickens', 'Dawson',
              'Haralson', 'Heard', 'Jasper', 'Lamar', 'Meriwether', 'Morgan', 'Pike', 'Butts'
            ].map((county, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="text-center py-2 px-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {county} County
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceArea

