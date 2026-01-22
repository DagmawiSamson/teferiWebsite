import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TrustIndicators from '../components/TrustIndicators'
import ServiceArea from '../components/ServiceArea'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  const location = useLocation()

  useEffect(() => {
    // Handle hash links when navigating to home page
    if (location.hash) {
      const hash = location.hash.substring(1) // Remove the #
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100) // Small delay to ensure page is rendered
    }
  }, [location])

  return (
    <div className="min-h-screen">
      <SEO 
        title="Locksmith Near Me | 24/7 Emergency Locksmith Services in Atlanta, GA"
        description="Need a locksmith near me? Locksmith TA provides 24/7 emergency locksmith services in Atlanta, GA. Fast response, licensed & insured. Call (678) 650-4802 now! Serving residential, commercial & automotive locksmith needs."
        keywords="locksmith near me, locksmith Atlanta, emergency locksmith, locksmith services Atlanta GA, 24/7 locksmith, car locksmith, residential locksmith, commercial locksmith, lockout service, key replacement Atlanta, locksmith near me Atlanta, emergency locksmith near me"
        canonical="https://locksmithta.com/"
      />
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

