import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FoodDetail from './pages/FoodDetail';
import Login from './pages/Login';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import Payment from './pages/Payment'; // Import the Payment component

const { Content } = Layout;

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout className="layout">
            <Header />
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/food-detail/:id" element={<FoodDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/payment" element={<Payment />} /> {/* Add the Payment route */}

              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
