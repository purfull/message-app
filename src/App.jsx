import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Console from './pages/dashboard/Console';
import Contact from './pages/dashboard/contact/Contact';
import Dashboard from './pages/dashboard/dashboard/Dashboard';
import Template from './pages/dashboard/template/Template';
import TemplateMainPage from './pages/dashboard/user-templates/Template';
import NewTemplate from './pages/dashboard/new-template/Template';
import Settings from './pages/dashboard/settings-page/Settings';

function App() {

  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Console />}>
          <Route path="reports" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="new-template" element={<NewTemplate />} />
          <Route path="my-template" element={<TemplateMainPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
