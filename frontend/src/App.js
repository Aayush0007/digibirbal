import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Website from './pages/Website';
import ServiceDetail from './components/ServiceDetail';
import Login from './components/Login';
import ContactForm from './components/ContactForm';
import BlogDetail from './components/BlogDetail';
import TermsAndConditions from './components/TermsAndConditions'; // Import the TermsAndConditions component
import AdminDashboard from './components/AdminDashboard';  // Import the Admin Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* Add route for Terms and Conditions */}
        <Route path="/admin" element={<AdminDashboard />} />  {/* Add route for Admin Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
