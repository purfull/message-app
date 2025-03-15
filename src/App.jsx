import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Console from './pages/dashboard/Console';
import Contact from './pages/dashboard/contact/Contact';
import Dashboard from './pages/dashboard/dashboard/Dashboard';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Console />}>
          <Route path="reports" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
