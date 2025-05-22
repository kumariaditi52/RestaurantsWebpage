  import React from 'react';
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

  const Home = () => {
    const { darkMode } = useTheme();
  
    return (
      <div className={`home-container ${darkMode ? 'dark' : ''}`}>
        {/* Hero Section */}
        <section className="hero-section">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Restaurant interior" 
            className="hero-background"
          />
          <div className="hero-content fade-in">
            <Title level={1} className="hero-title">Exquisite Dining Experience</Title>
            <Paragraph className="hero-subtitle">
              Indulge in culinary delights crafted with passion and precision
            </Paragraph>
            <Button type="primary" size="large" className="hero-button">
              <Link to="/blog">Explore Our Blog</Link>
            </Button>
          </div>
        </section>
      
        {/* Features Section */}
        <section className={`features-section ${darkMode ? 'dark' : ''}`}>
          <div className="container mx-auto">
            <Title level={2} className="section-title slide-up">Why Choose Us</Title>
          
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card fade-in" bordered={false}>
                  <div className="text-center">
                    <ShopOutlined className="feature-icon" />
                    <Title level={3} className="feature-title">Elegant Ambiance</Title>
                    <Paragraph className="feature-description">
                      Enjoy your meal in our beautifully designed space with comfortable seating and warm lighting.
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card fade-in" bordered={false} style={{ animationDelay: '0.2s' }}>
                  <div className="text-center">
                    <StarOutlined className="feature-icon" />
                    <Title level={3} className="feature-title">Award-Winning Chef</Title>
                    <Paragraph className="feature-description">
                      Our executive chef brings years of culinary expertise to create unforgettable dining experiences.
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card fade-in" bordered={false} style={{ animationDelay: '0.4s' }}>
                  <div className="text-center">
                    <ClockCircleOutlined className="feature-icon" />
                    <Title level={3} className="feature-title">Prompt Service</Title>
                    <Paragraph className="feature-description">
                      We value your time and ensure prompt service without compromising on quality or attention to detail.
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      
        {/* Menu Highlights Section */}
        <section className={`menu-highlights-section ${darkMode ? 'dark' : ''}`}>
          <div className="container mx-auto">
            <Title level={2} className="section-title slide-up">Menu Highlights</Title>
          
            <Row gutter={[24, 24]}>
              {menuHighlights.map((item, index) => (
                <Col xs={24} sm={12} lg={8} key={item.id}>
                  <Card 
                    className="menu-card fade-in" 
                    bordered={false}
                    style={{ animationDelay: `${index * 0.2}s` }}
                    cover={
                      <div style={{ position: 'relative' }}>
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
                    <Button type="primary" className="view-menu-button">
                      <Link to="/menu">Order Now</Link>
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          
            <div className="text-center mt-12">
              <Button type="default" size="large">
                <Link to="/menu">View Full Menu <RightOutlined /></Link>
              </Button>
            </div>
          </div>
        </section>
      
        {/* Testimonials Section */}
        <section className={`testimonials-section ${darkMode ? 'dark' : ''}`}>
          <div className="container mx-auto">
            <Title level={2} className="section-title slide-up">What Our Customers Say</Title>
          
            <Row gutter={[24, 24]}>
              {testimonials.map((testimonial, index) => (
                <Col xs={24} sm={12} lg={8} key={testimonial.id}>
                  <Card 
                    className="testimonial-card fade-in" 
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
      
        {/* Call to Action Section */}
        <section className={`cta-section ${darkMode ? 'dark' : ''}`}>
          <div className="container mx-auto">
            <Title level={2} className="cta-title fade-in">Ready to Dine With Us?</Title>
            <Paragraph className="cta-description fade-in">
              Make a reservation today and experience our exceptional cuisine and service.
            </Paragraph>
            <Button type="primary" size="large" className="cta-button fade-in">
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </section>
      
        {/* Contact Information */}
        <section className={`features-section ${darkMode ? 'dark' : ''}`}>
          <div className="container mx-auto">
            <Row gutter={[24, 24]} className="py-8">
              <Col xs={24} md={8}>
                <div className="text-center">
                  <EnvironmentOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Location</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    123 Gourmet Street<br />
                    Foodie District, FC 98765
                  </Paragraph>
                </div>
              </Col>
            
              <Col xs={24} md={8}>
                <div className="text-center">
                  <ClockCircleOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Hours</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    Monday - Friday: 11am - 10pm<br />
                    Saturday - Sunday: 10am - 11pm
                  </Paragraph>
                </div>
              </Col>
            
              <Col xs={24} md={8}>
                <div className="text-center">
                  <PhoneOutlined className="feature-icon" />
                  <Title level={4} className={darkMode ? 'text-white' : ''}>Contact</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    Phone: (555) 123-4567<br />
                    Email: info@restaurant.com
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    );
  };

  export default Home;
