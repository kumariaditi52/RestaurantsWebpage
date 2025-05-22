import React from 'react';
import { Typography, Card, Row, Col, Button, Divider } from 'antd';
import { useTheme } from '../context/ThemeContext';
import { 
  ShopOutlined, 
  CarOutlined, 
  TeamOutlined, 
  GiftOutlined,
  CalendarOutlined,
  CoffeeOutlined,
  StarOutlined,
  BulbOutlined,
  HeartOutlined,
  GlobalOutlined,
  SafetyOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const Services = () => {
  const { darkMode, theme } = useTheme();
  
  const primaryServices = [
    {
      title: 'Dine-In Experience',
      description: 'Enjoy our cozy atmosphere and exceptional service in our beautifully designed dining space.',
      icon: <ShopOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />,
      details: 'Our restaurant offers comfortable seating, ambient lighting, and attentive service to ensure a memorable dining experience.'
    },
    {
      title: 'Delivery Service',
      description: 'Get your favorite meals delivered fresh and hot to your doorstep within our delivery area.',
      icon: <CarOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />,
      details: 'We deliver within a 5-mile radius, with free delivery on orders over $30. Our special packaging ensures your food arrives at the perfect temperature.'
    },
    {
      title: 'Private Events',
      description: 'Host your special occasions with customized menus and dedicated service in our private dining room.',
      icon: <TeamOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />,
      details: 'Our private dining space can accommodate up to 40 guests and includes options for custom decorations, audio-visual equipment, and personalized menus.'
    },
    {
      title: 'Gift Cards',
      description: 'Perfect presents for food lovers in your life, available in physical cards or digital options.',
      icon: <GiftOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />,
      details: 'Gift cards are available in any denomination and can be purchased online, by phone, or in person at our restaurant.'
    }
  ];
  
  const additionalServices = [
    {
      title: 'Catering Services',
      description: 'Full-service catering for corporate events, weddings, and special celebrations.',
      icon: <CoffeeOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Cooking Classes',
      description: 'Learn culinary techniques from our expert chefs in hands-on cooking workshops.',
      icon: <BulbOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Loyalty Program',
      description: 'Earn points with every purchase and redeem them for discounts and special offers.',
      icon: <StarOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Special Dietary Options',
      description: 'Extensive menu options for vegetarian, vegan, gluten-free, and other dietary needs.',
      icon: <HeartOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Online Ordering',
      description: 'Convenient ordering through our website or mobile app with customization options.',
      icon: <GlobalOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Contactless Pickup',
      description: 'Safe and convenient curbside pickup option for takeout orders.',
      icon: <SafetyOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Outdoor Dining',
      description: 'Beautiful patio seating available during pleasant weather conditions.',
      icon: <EnvironmentOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    },
    {
      title: 'Reservation System',
      description: 'Easy online table reservations to ensure your spot at preferred times.',
      icon: <CalendarOutlined style={{ fontSize: '36px', color: darkMode ? '#60a5fa' : '#3B82F6' }} />
    }
  ];
  
  return (
    <div 
      className={`services-container ${darkMode ? 'dark' : ''}`}
      style={{ 
        backgroundColor: theme?.colors?.background,
        color: theme?.colors?.text,
        padding: '2rem 0'
      }}
    >
      <div className="text-center mb-8">
        <Title level={1} className={darkMode ? 'text-white' : ''}>Our Services</Title>
        <Paragraph className={`mx-auto ${darkMode ? 'text-gray-300' : ''}`} style={{ maxWidth: '800px' }}>
          We offer a variety of services to enhance your dining experience and make every visit special.
        </Paragraph>
      </div>
      
      {/* Primary Services Section */}
      <Row gutter={[24, 24]} className="mb-12">
        {primaryServices.map((service, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              className={darkMode ? 'bg-gray-700 text-white' : ''}
              headStyle={darkMode ? { color: 'white' } : {}}
              bodyStyle={darkMode ? { color: 'white' } : {}}
              style={{ textAlign: 'center', height: '100%' }}
              hoverable
              cover={
                <div style={{ padding: '24px 0 0' }}>
                  {service.icon}
                </div>
              }
            >
              <Meta
                title={
                  <span className={darkMode ? 'text-white text-xl' : 'text-xl'}>
                    {service.title}
                  </span>
                }
                description={
                  <div>
                    <p className={darkMode ? 'text-gray-300 mb-4' : 'mb-4'}>
                      {service.description}
                    </p>
                    <Divider className={darkMode ? 'bg-gray-600' : ''} />
                    <p className={darkMode ? 'text-gray-300 text-sm' : 'text-sm'}>
                      {service.details}
                    </p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Service Highlight Section */}
      <div className={`service-highlight ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8 rounded-lg mb-12`}>
        <Row gutter={24} align="middle">
          <Col xs={24} md={12}>
            <div className="p-4">
              <Title level={2} className={darkMode ? 'text-white' : ''}>
                Exceptional Dining Experience
              </Title>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                At our restaurant, we believe dining is more than just food—it's an experience. Our team is dedicated to providing exceptional service from the moment you walk through our doors.
              </Paragraph>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                Whether you're celebrating a special occasion, hosting a business meeting, or simply enjoying a meal with loved ones, we strive to make every visit memorable.
              </Paragraph>
              <Button type="primary" size="large" className="mt-4">
                Make a Reservation
              </Button>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Restaurant interior" 
              style={{ width: '100%', borderRadius: '8px' }}
              className="shadow-lg"
            />
          </Col>
        </Row>
      </div>
      
      {/* Additional Services Section */}
      <div className="mb-12">
        <Title level={2} className={`text-center mb-8 ${darkMode ? 'text-white' : ''}`}>
          Additional Services & Amenities
        </Title>
        <Row gutter={[24, 24]}>
          {additionalServices.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                className={`${darkMode ? 'bg-gray-700 text-white' : ''} h-full`}
                bodyStyle={{ height: '100%' }}
                hoverable
              >
                <div className="text-center">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <Title level={4} className={darkMode ? 'text-white' : ''}>
                    {service.title}
                  </Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    {service.description}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      
      {/* Call to Action Section */}
      <div className={`cta-section text-center p-8 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-blue-50'}`}>
        <Title level={2} className={darkMode ? 'text-white' : ''}>
          Ready to Experience Our Services?
        </Title>
        <Paragraph className={`mx-auto ${darkMode ? 'text-gray-300' : ''}`} style={{ maxWidth: '700px' }}>
          Contact us today to learn more about our services or to make special arrangements for your next visit.
        </Paragraph>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button type="primary" size="large">
            Make a Reservation
          </Button>
          <Button type={darkMode ? 'default' : 'ghost'} size="large" className={darkMode ? 'border-gray-600 text-white' : ''}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;