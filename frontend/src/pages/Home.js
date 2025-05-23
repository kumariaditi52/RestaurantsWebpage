  // import React from 'react';
  // import { Typography, Card, Row, Col, Button, Avatar, Rate, Divider } from 'antd';
  // import { Link } from 'react-router-dom';
  // import { 
  //   ShopOutlined, 
  //   ClockCircleOutlined, 
  //   StarOutlined, 
  //   ShoppingOutlined,
  //   EnvironmentOutlined,
  //   PhoneOutlined,
  //   RightOutlined
  // } from '@ant-design/icons';
  // import { useTheme } from '../context/ThemeContext';
  // import './Home.css';

  // const { Title, Paragraph, Text } = Typography;

  // // Sample menu highlights data
  // const menuHighlights = [
  //   {
  //     id: 1,
  //     name: 'Signature Steak',
  //     description: 'Prime cut beef steak grilled to perfection, served with roasted vegetables and red wine sauce.',
  //     price: 28.99,
  //     image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  //   },
  //   {
  //     id: 2,
  //     name: 'Seafood Pasta',
  //     description: 'Fresh seafood medley with linguine pasta in a creamy white wine sauce.',
  //     price: 22.99,
  //     image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  //   },
  //   {
  //     id: 3,
  //     name: 'Chocolate Lava Cake',
  //     description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
  //     price: 9.99,
  //     image: 'https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  //   }
  // ];

  // // Sample testimonials data
  // const testimonials = [
  //   {
  //     id: 1,
  //     name: 'Sarah Johnson',
  //     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  //     rating: 5,
  //     text: 'The food was absolutely amazing! The atmosphere was cozy and the staff was very attentive. Will definitely come back again.',
  //     date: '2 weeks ago'
  //   },
  //   {
  //     id: 2,
  //     name: 'Michael Chen',
  //     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  //     rating: 5,
  //     text: 'Best dining experience I\'ve had in years. The chef\'s special was out of this world, and the wine pairing was perfect.',
  //     date: '1 month ago'
  //   },
  //   {
  //     id: 3,
  //     name: 'Emily Rodriguez',
  //     avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  //     rating: 4,
  //     text: 'Great place for a romantic dinner. The ambiance is perfect and the food is delicious. Highly recommend the seafood pasta!',
  //     date: '3 weeks ago'
  //   }
  // ];

  // const Home = () => {
  //   const { darkMode } = useTheme();
  
  //   return (
  //     <div className={`home-container ${darkMode ? 'dark' : ''}`}>
  //       {/* Hero Section */}
  //       <section className="hero-section">
  //         <img 
  //           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
  //           alt="Restaurant interior" 
  //           className="hero-background"
  //         />
  //         <div className="hero-content fade-in">
  //           <Title level={1} className="hero-title">Exquisite Dining Experience</Title>
  //           <Paragraph className="hero-subtitle">
  //             Indulge in culinary delights crafted with passion and precision
  //           </Paragraph>
  //           <Button type="primary" size="large" className="hero-button">
  //             <Link to="/blog">Explore Our Blog</Link>
  //           </Button>
  //         </div>
  //       </section>
      
  //       {/* Features Section */}
  //       <section className={`features-section ${darkMode ? 'dark' : ''}`}>
  //         <div className="container mx-auto">
  //           <Title level={2} className="section-title slide-up">Why Choose Us</Title>
          
  //           <Row gutter={[24, 24]}>
  //             <Col xs={24} sm={12} lg={8}>
  //               <Card className="feature-card fade-in" bordered={false}>
  //                 <div className="text-center">
  //                   <ShopOutlined className="feature-icon" />
  //                   <Title level={3} className="feature-title">Elegant Ambiance</Title>
  //                   <Paragraph className="feature-description">
  //                     Enjoy your meal in our beautifully designed space with comfortable seating and warm lighting.
  //                   </Paragraph>
  //                 </div>
  //               </Card>
  //             </Col>
            
  //             <Col xs={24} sm={12} lg={8}>
  //               <Card className="feature-card fade-in" bordered={false} style={{ animationDelay: '0.2s' }}>
  //                 <div className="text-center">
  //                   <StarOutlined className="feature-icon" />
  //                   <Title level={3} className="feature-title">Award-Winning Chef</Title>
  //                   <Paragraph className="feature-description">
  //                     Our executive chef brings years of culinary expertise to create unforgettable dining experiences.
  //                   </Paragraph>
  //                 </div>
  //               </Card>
  //             </Col>
            
  //             <Col xs={24} sm={12} lg={8}>
  //               <Card className="feature-card fade-in" bordered={false} style={{ animationDelay: '0.4s' }}>
  //                 <div className="text-center">
  //                   <ClockCircleOutlined className="feature-icon" />
  //                   <Title level={3} className="feature-title">Prompt Service</Title>
  //                   <Paragraph className="feature-description">
  //                     We value your time and ensure prompt service without compromising on quality or attention to detail.
  //                   </Paragraph>
  //                 </div>
  //               </Card>
  //             </Col>
  //           </Row>
  //         </div>
  //       </section>
      
  //       {/* Menu Highlights Section */}
  //       <section className={`menu-highlights-section ${darkMode ? 'dark' : ''}`}>
  //         <div className="container mx-auto">
  //           <Title level={2} className="section-title slide-up">Menu Highlights</Title>
          
  //           <Row gutter={[24, 24]}>
  //             {menuHighlights.map((item, index) => (
  //               <Col xs={24} sm={12} lg={8} key={item.id}>
  //                 <Card 
  //                   className="menu-card fade-in" 
  //                   bordered={false}
  //                   style={{ animationDelay: `${index * 0.2}s` }}
  //                   cover={
  //                     <div style={{ position: 'relative' }}>
  //                       <img 
  //                         alt={item.name} 
  //                         src={item.image} 
  //                         className="menu-image"
  //                       />
  //                       <div className="menu-price">${item.price.toFixed(2)}</div>
  //                     </div>
  //                   }
  //                 >
  //                   <Title level={4} className="menu-title">{item.name}</Title>
  //                   <Paragraph className="menu-description" ellipsis={{ rows: 2 }}>
  //                     {item.description}
  //                   </Paragraph>
  //                   <Button type="primary" className="view-menu-button">
  //                     <Link to="/menu">Order Now</Link>
  //                   </Button>
  //                 </Card>
  //               </Col>
  //             ))}
  //           </Row>
          
  //           <div className="text-center mt-12">
  //             <Button type="default" size="large">
  //               <Link to="/menu">View Full Menu <RightOutlined /></Link>
  //             </Button>
  //           </div>
  //         </div>
  //       </section>
      
  //       {/* Testimonials Section */}
  //       <section className={`testimonials-section ${darkMode ? 'dark' : ''}`}>
  //         <div className="container mx-auto">
  //           <Title level={2} className="section-title slide-up">What Our Customers Say</Title>
          
  //           <Row gutter={[24, 24]}>
  //             {testimonials.map((testimonial, index) => (
  //               <Col xs={24} sm={12} lg={8} key={testimonial.id}>
  //                 <Card 
  //                   className="testimonial-card fade-in" 
  //                   bordered={false}
  //                   style={{ animationDelay: `${index * 0.2}s` }}
  //                 >
  //                   <Rate disabled defaultValue={testimonial.rating} className="mb-4" />
  //                   <Paragraph className="testimonial-quote">
  //                     {testimonial.text}
  //                   </Paragraph>
  //                   <div className="testimonial-author">
  //                     <Avatar src={testimonial.avatar} size={50} className="testimonial-avatar" />
  //                     <div>
  //                       <Text strong className="testimonial-name">{testimonial.name}</Text>
  //                       <br />
  //                       <Text className="testimonial-info">{testimonial.date}</Text>
  //                     </div>
  //                   </div>
  //                 </Card>
  //               </Col>
  //             ))}
  //           </Row>
  //         </div>
  //       </section>
      
  //       {/* Call to Action Section */}
  //       <section className={`cta-section ${darkMode ? 'dark' : ''}`}>
  //         <div className="container mx-auto">
  //           <Title level={2} className="cta-title fade-in">Ready to Dine With Us?</Title>
  //           <Paragraph className="cta-description fade-in">
  //             Make a reservation today and experience our exceptional cuisine and service.
  //           </Paragraph>
  //           <Button type="primary" size="large" className="cta-button fade-in">
  //             <Link to="/contact">Reserve a Table</Link>
  //           </Button>
  //         </div>
  //       </section>
      
  //       {/* Contact Information */}
  //       <section className={`features-section ${darkMode ? 'dark' : ''}`}>
  //         <div className="container mx-auto">
  //           <Row gutter={[24, 24]} className="py-8">
  //             <Col xs={24} md={8}>
  //               <div className="text-center">
  //                 <EnvironmentOutlined className="feature-icon" />
  //                 <Title level={4} className={darkMode ? 'text-white' : ''}>Location</Title>
  //                 <Paragraph className={darkMode ? 'text-gray-300' : ''}>
  //                   123 Gourmet Street<br />
  //                   Foodie District, FC 98765
  //                 </Paragraph>
  //               </div>
  //             </Col>
            
  //             <Col xs={24} md={8}>
  //               <div className="text-center">
  //                 <ClockCircleOutlined className="feature-icon" />
  //                 <Title level={4} className={darkMode ? 'text-white' : ''}>Hours</Title>
  //                 <Paragraph className={darkMode ? 'text-gray-300' : ''}>
  //                   Monday - Friday: 11am - 10pm<br />
  //                   Saturday - Sunday: 10am - 11pm
  //                 </Paragraph>
  //               </div>
  //             </Col>
            
  //             <Col xs={24} md={8}>
  //               <div className="text-center">
  //                 <PhoneOutlined className="feature-icon" />
  //                 <Title level={4} className={darkMode ? 'text-white' : ''}>Contact</Title>
  //                 <Paragraph className={darkMode ? 'text-gray-300' : ''}>
  //                   Phone: (555) 123-4567<br />
  //                   Email: info@restaurant.com
  //                 </Paragraph>
  //               </div>
  //             </Col>
  //           </Row>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // };

  // export default Home;




  import React, { useEffect, useRef } from 'react';
import { Typography, Card, Row, Col, Button, Avatar, Rate, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { 
  ShopOutlined, 
  ClockCircleOutlined, 
  StarOutlined, 
  ShoppingOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useTheme } from '../context/ThemeContext';
import './Home.css';

const { Title, Paragraph, Text } = Typography;

// Sample menu highlights data
const menuHighlights = [
  {
    id: 1,
    name: 'Signature Steak',
    description: 'Prime cut beef steak grilled to perfection, served with roasted vegetables and red wine sauce.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 2,
    name: 'Seafood Pasta',
    description: 'Fresh seafood medley with linguine pasta in a creamy white wine sauce.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: 3,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'The food was absolutely amazing! The atmosphere was cozy and the staff was very attentive. Will definitely come back again.',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Best dining experience I\'ve had in years. The chef\'s special was out of this world, and the wine pairing was perfect.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
    text: 'Great place for a romantic dinner. The ambiance is perfect and the food is delicious. Highly recommend the seafood pasta!',
    date: '3 weeks ago'
  }
];

// Featured dishes with 3D models
const featuredDishes = [
  {
    id: 1,
    name: 'Signature Burger',
    description: 'Our famous burger with premium beef patty, special sauce, and fresh toppings',
    price: 16.99,
    modelUrl: 'https://models.readyplayer.me/64fa0336bc168a7681a0d438.glb'
  },
  {
    id: 2,
    name: 'Gourmet Pizza',
    description: 'Handcrafted pizza with artisanal toppings and our secret sauce',
    price: 19.99,
    modelUrl: 'https://models.readyplayer.me/64fa0336bc168a7681a0d438.glb'
  }
];

const Home = () => {
  const { darkMode } = useTheme();
  const scene3DRef = useRef(null);
  
  useEffect(() => {
    // Initialize 3D animations when component mounts
    const initParallax = () => {
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
    };
    
    initParallax();
    
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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`home-container ${darkMode ? 'dark' : ''}`}>
      {/* Hero Section with 3D Effect */}
      <section className="hero-section">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Restaurant interior" 
          className="hero-background"
        />
        <div className="hero-content fade-in">
          <div className="hero-3d-elements">
            <div className="parallax-3d" data-depth="0.2">
              <img src="https://i.imgur.com/8YkBZrK.png" alt="Floating plate" className="floating-element plate-element" />
            </div>
            <div className="parallax-3d" data-depth="0.4">
              <img src="https://i.imgur.com/JRCcQTL.png" alt="Floating fork" className="floating-element fork-element" />
            </div>
            <div className="parallax-3d" data-depth="0.3">
              <img src="https://i.imgur.com/pTeXrSu.png" alt="Floating spoon" className="floating-element spoon-element" />
            </div>
          </div>
          <Title level={1} className="hero-title">Exquisite Dining Experience</Title>
          <Paragraph className="hero-subtitle">
            Indulge in culinary delights crafted with passion and precision
          </Paragraph>
          <Button type="primary" size="large" className="hero-button tilt-effect">
            <Link to="/blog">Explore Our Blog</Link>
          </Button>
        </div>
      </section>
      
      {/* 3D Featured Dishes Section */}
      <section className={`featured-3d-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Title level={2} className="section-title slide-up">Featured Dishes in 3D</Title>
          
          <div className="featured-3d-container">
            {featuredDishes.map((dish, index) => (
              <div key={dish.id} className="featured-3d-item scroll-3d-element">
                <div className="model-container">
                  <div className="spinning-plate">
                    <div className="plate-top"></div>
                    <div className="plate-side"></div>
                  </div>
                  <div className="dish-shadow"></div>
                </div>
                <div className="featured-3d-info">
                  <Title level={3} className="featured-dish-title">{dish.name}</Title>
                  <Paragraph className="featured-dish-description">{dish.description}</Paragraph>
                  <div className="featured-dish-price">${dish.price.toFixed(2)}</div>
                  <Button type="primary" className="view-3d-button tilt-effect">
                    <Link to={`/food-detail/${dish.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Features Section with 3D Cards */}
      <section className={`features-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Title level={2} className="section-title slide-up">Why Choose Us</Title>
        
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card fade-in flip-card" bordered={false}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="text-center">
                      <ShopOutlined className="feature-icon" />
                      <Title level={3} className="feature-title">Elegant Ambiance</Title>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <Paragraph className="feature-description">
                      Enjoy your meal in our beautifully designed space with comfortable seating and warm lighting.
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card fade-in flip-card" bordered={false} style={{ animationDelay: '0.2s' }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="text-center">
                      <StarOutlined className="feature-icon" />
                      <Title level={3} className="feature-title">Award-Winning Chef</Title>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <Paragraph className="feature-description">
                      Our executive chef brings years of culinary expertise to create unforgettable dining experiences.
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          
            <Col xs={24} sm={12} lg={8}>
              <Card className="feature-card fade-in flip-card" bordered={false} style={{ animationDelay: '0.4s' }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="text-center">
                      <ClockCircleOutlined className="feature-icon" />
                      <Title level={3} className="feature-title">Prompt Service</Title>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <Paragraph className="feature-description">
                      We value your time and ensure prompt service without compromising on quality or attention to detail.
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    
      {/* Menu Highlights Section with Hover 3D Effect */}
      <section className={`menu-highlights-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Title level={2} className="section-title slide-up">Menu Highlights</Title>
        
          <Row gutter={[24, 24]}>
            {menuHighlights.map((item, index) => (
              <Col xs={24} sm={12} lg={8} key={item.id}>
                <Card 
                  className="menu-card fade-in tilt-card" 
                  bordered={false}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  cover={
                    <div style={{ position: 'relative' }} className="menu-image-container">
                      <img 
                        alt={item.name} 
                        src={item.image} 
                        className="menu-image"
                      />
                      <div className="menu-price">${item.price.toFixed(2)}</div>
                    </div>
                  }
                >
                  <Title level={4} className="menu-title">{item.name}</Title>
                  <Paragraph className="menu-description" ellipsis={{ rows: 2 }}>
                    {item.description}
                  </Paragraph>
                  <Button type="primary" className="view-menu-button tilt-effect">
                    <Link to="/menu">Order Now</Link>
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        
          <div className="text-center mt-12">
            <Button type="default" size="large" className="tilt-effect">
              <Link to="/menu">View Full Menu <RightOutlined /></Link>
            </Button>
          </div>
        </div>
      </section>
    
      {/* Testimonials Section with 3D Cards */}
      <section className={`testimonials-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Title level={2} className="section-title slide-up">What Our Customers Say</Title>
        
          <Row gutter={[24, 24]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} sm={12} lg={8} key={testimonial.id}>
                                <Card 
                  className="testimonial-card fade-in floating-card" 
                  bordered={false}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Rate disabled defaultValue={testimonial.rating} className="mb-4" />
                  <Paragraph className="testimonial-quote">
                    {testimonial.text}
                  </Paragraph>
                  <div className="testimonial-author">
                    <Avatar src={testimonial.avatar} size={50} className="testimonial-avatar" />
                    <div>
                      <Text strong className="testimonial-name">{testimonial.name}</Text>
                      <br />
                      <Text className="testimonial-info">{testimonial.date}</Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    
      {/* 3D Interactive Food Showcase */}
      <section className={`food-showcase-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Title level={2} className="section-title slide-up">Interactive Food Showcase</Title>
          
          <div className="showcase-container">
            <div className="showcase-card scroll-3d-element">
              <div className="showcase-3d-scene">
                <div className="cube">
                  <div className="cube-face front">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Healthy Salad" />
                  </div>
                  <div className="cube-face back">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445" alt="Pancakes" />
                  </div>
                  <div className="cube-face right">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Pizza" />
                  </div>
                  <div className="cube-face left">
                    <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187" alt="Pasta" />
                  </div>
                  <div className="cube-face top">
                    <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543" alt="Dessert" />
                  </div>
                  <div className="cube-face bottom">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Steak" />
                  </div>
                </div>
              </div>
              <div className="showcase-content">
                <Title level={3}>Explore Our Menu in 3D</Title>
                <Paragraph>
                  Rotate the cube to discover our diverse menu offerings. Each side represents a different culinary delight waiting for you to experience.
                </Paragraph>
                <Button type="primary" className="tilt-effect">
                  <Link to="/menu">Browse Full Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Call to Action Section with 3D Parallax */}
      <section className={`cta-section ${darkMode ? 'dark' : ''}`}>
        <div className="parallax-3d-background">
          <div className="parallax-3d-layer" data-depth="0.1"></div>
          <div className="parallax-3d-layer" data-depth="0.2"></div>
          <div className="parallax-3d-layer" data-depth="0.3"></div>
        </div>
        <div className="container mx-auto">
          <Title level={2} className="cta-title fade-in">Ready to Dine With Us?</Title>
          <Paragraph className="cta-description fade-in">
            Make a reservation today and experience our exceptional cuisine and service.
          </Paragraph>
          <Button type="primary" size="large" className="cta-button fade-in tilt-effect">
            <Link to="/contact">Reserve a Table</Link>
          </Button>
        </div>
      </section>
    
      {/* Contact Information with 3D Hover Cards */}
      <section className={`features-section ${darkMode ? 'dark' : ''}`}>
        <div className="container mx-auto">
          <Row gutter={[24, 24]} className="py-8">
            <Col xs={24} md={8}>
              <div className="contact-3d-card">
                <div className="contact-3d-card-inner">
                  <EnvironmentOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Location</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    123 Gourmet Street<br />
                    Foodie District, FC 98765
                  </Paragraph>
                </div>
              </div>
            </Col>
          
            <Col xs={24} md={8}>
              <div className="contact-3d-card">
                <div className="contact-3d-card-inner">
                  <ClockCircleOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Hours</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    Monday - Friday: 11am - 10pm<br />
                    Saturday - Sunday: 10am - 11pm
                  </Paragraph>
                </div>
              </div>
            </Col>
          
            <Col xs={24} md={8}>
              <div className="contact-3d-card">
                <div className="contact-3d-card-inner">
                  <PhoneOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Contact</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    Phone: (555) 123-4567<br />
                    Email: info@restaurant.com
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home;


