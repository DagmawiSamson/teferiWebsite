import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ResidentialServices from './pages/ResidentialServices'
import AutomotiveServices from './pages/AutomotiveServices'
import CommercialServices from './pages/CommercialServices'
import EmergencyLockout from './pages/EmergencyLockout'
import LockInstallationRepair from './pages/LockInstallationRepair'
import SecurityUpgrades from './pages/SecurityUpgrades'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential-services" element={<ResidentialServices />} />
        <Route path="/automotive-services" element={<AutomotiveServices />} />
        <Route path="/commercial-services" element={<CommercialServices />} />
        <Route path="/emergency-lockout" element={<EmergencyLockout />} />
        <Route path="/lock-installation-repair" element={<LockInstallationRepair />} />
        <Route path="/security-upgrades" element={<SecurityUpgrades />} />
        {/* Redirect routes for shorter URLs and Google-indexed URLs */}
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="/contact-us" element={<Navigate to="/" replace />} />
        <Route path="/commercial" element={<Navigate to="/commercial-services" replace />} />
        <Route path="/service" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<Navigate to="/" replace />} />
        <Route path="/service-area" element={<Navigate to="/" replace />} />
        {/* Catch-all route - redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

