import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [domain, setDomain] = useState('')

  useEffect(() => {
    setDomain(window.location.host.split('.')[0])
  }, [])

  return (
    <Router>
      <Routes>
        {domain == 'admin' ? (
          <Route path='/' element={<div>admin</div>} />
        ) : (
          <Route path='/' element={<Landing />} />
        )}
      </Routes>
    </Router>
  )
}

export default App
