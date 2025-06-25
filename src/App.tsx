import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Apprentices from './pages/Apprentices'
import Mentors from './pages/Mentors'
import Programs from './pages/Programs'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/apprentices" element={<Apprentices />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App