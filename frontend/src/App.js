// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Layout } from 'antd';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Blog from './pages/Blog';
// import FoodDetail from './pages/FoodDetail';
// import Login from './pages/Login';
// import { ThemeProvider } from './context/ThemeContext';
// import { AuthProvider } from './context/AuthContext';
// import './App.css';
// import Payment from './pages/Payment'; // Import the Payment component

// const { Content } = Layout;

// function App() {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <Router>
//           <Layout className="layout">
//             <Header />
//             <Content>
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/menu" element={<Menu />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/food-detail/:id" element={<FoodDetail />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/payment" element={<Payment />} /> {/* Add the Payment route */}

//               </Routes>
//             </Content>
//             <Footer />
//           </Layout>
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
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
import './styles/3DEffects.css'; // Import the new 3D effects CSS
import Payment from './pages/Payment';

const { Content } = Layout;

function App() {
  useEffect(() => {
    // Initialize global 3D effects
    const initGlobal3DEffects = () => {
      // Parallax effect for elements with .parallax-3d class
      document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('.parallax-3d');
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        
        parallaxElements.forEach(el => {
          const depth = parseFloat(el.getAttribute('data-depth')) || 0.1;
          const moveX = mouseX * depth * 30;
          const moveY = mouseY * depth * 30;
          const rotateY = mouseX * depth * 10;
          const rotateX = -mouseY * depth * 10;
          
          el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
      });
      
      // Tilt effect for elements with .tilt-effect class
      const tiltElements = document.querySelectorAll('.tilt-effect');
      
      tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const angleX = (y - centerY) / 10;
          const angleY = (centerX - x) / 10;
          
          el.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
      });
      
      // Scroll animation for 3D elements
      const handleScroll = () => {
        const scrollElements = document.querySelectorAll('.scroll-3d-element');
        
        scrollElements.forEach(el => {
          const elementTop = el.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            el.classList.add('active-3d');
          } else {
            el.classList.remove('active-3d');
          }
        });
      };
      
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial load
    };
    
    // Initialize after a short delay to ensure DOM is fully loaded
    setTimeout(initGlobal3DEffects, 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout className="layout with-3d-effects">
            <div className="page-transition-wrapper">
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
                  <Route path="/payment" element={<Payment />} />
                </Routes>
              </Content>
              <Footer />
            </div>
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

