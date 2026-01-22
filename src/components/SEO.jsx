import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Locksmith Near Me | 24/7 Emergency Locksmith Services in Atlanta, GA | Locksmith TA",
  description = "Need a locksmith near me? Locksmith TA provides 24/7 emergency locksmith services in Atlanta, GA. Fast response, licensed & insured. Call (678) 650-4802 now!",
  keywords = "locksmith near me, locksmith Atlanta, emergency locksmith, locksmith services Atlanta GA, 24/7 locksmith, car locksmith, residential locksmith, commercial locksmith, lockout service, key replacement Atlanta",
  canonical = "https://locksmithta.com/",
  ogImage = "https://locksmithta.com/og-image.jpg",
  type = "website"
}) => {
  const fullTitle = title.includes('Locksmith TA') ? title : `${title} | Locksmith TA`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

export default SEO

