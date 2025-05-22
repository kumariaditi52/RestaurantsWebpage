import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import './styles/theme.css';

const { Content } = Layout;

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function AppContent() {
  const { isAuthenticated } = useAuth();
  
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header />
        <Content className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />} />
            
            {/* Protected routes */}
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            } />
            <Route path="/blog" element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            } />
            <Route path="/services" element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            } />
            
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
