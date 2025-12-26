import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential-services" element={<ResidentialServices />} />
        <Route path="/automotive-services" element={<AutomotiveServices />} />
        <Route path="/commercial-services" element={<CommercialServices />} />
        <Route path="/emergency-lockout" element={<EmergencyLockout />} />
        <Route path="/lock-installation-repair" element={<LockInstallationRepair />} />
        <Route path="/security-upgrades" element={<SecurityUpgrades />} />
      </Routes>
    </Router>
  )
}

export default App

