import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/dashboard/Dashboard';
import './styles/theme.css';
import Automations from './pages/automations/Automations';
import Integrations from './pages/integrations/Integrations';
import Profile from './pages/profile/Profile';
import Security from './pages/security/Security';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/security" element={<Security />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
