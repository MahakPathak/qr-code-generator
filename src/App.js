import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import QRCodePage from './pages/QRCodePage';
import ProfilePage from './pages/ProfilePage';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import Support from './components/Support';
import Settings from './components/Setting';
import ImageQRCodeGenerator from './components/ImageQRCodeGenerator';
import  SocialMedia from './components/SocialMedia';
import BulkQRCode from './components/BulkQRCode';
import QRScanner from './components/QRScanner';
import PdfQRCodeGenerator from './components/PDFToQR';
import { ThemeProvider } from './context/ThemeContext';
import NewDashboard from './pages/NewDashboard';
import NewNavbar from './components/NewNavbar';
export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
      <Router>
        <NewNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/qr-code" element={<QRCodePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/image-qr-code" element={<ImageQRCodeGenerator />} />
          <Route path="/social-media-qr" element={<SocialMedia />} />
          <Route path="/bulk-qr-code" element={<BulkQRCode />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
          <Route path="/pdf-qr-code" element={<PdfQRCodeGenerator />} />
          <Route path="/new-dashboard" element={<NewDashboard />} />
          
        </Routes>
      </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
