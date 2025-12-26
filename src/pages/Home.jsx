import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TrustIndicators from '../components/TrustIndicators'
import ServiceArea from '../components/ServiceArea'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <Services />
      <ServiceArea />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home

