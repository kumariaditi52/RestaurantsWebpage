import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  HeartOutlined
} from '@ant-design/icons';
import './Footer.css';

const { Footer: AntFooter } = Layout;
const { Title, Text, Paragraph } = Typography;

const Footer = () => {
  const { isAuthenticated } = useAuth();
  const { darkMode, theme } = useTheme();
  
  // Simple footer for unauthenticated users
  const SimpleFooter = () => (
    <AntFooter
      className={`simple-footer ${darkMode ? 'dark' : ''}`}
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
        color: theme.colors.text,
        borderTop: `1px solid ${theme.colors.border}`,
        textAlign: 'center',
        padding: '12px 24px'
      }}
    >
      <Text className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
        © {new Date().getFullYear()} Restaurant App. All rights reserved.
      </Text>
    </AntFooter>
  );
  
  // Full footer for authenticated users
  const FullFooter = () => (
    <AntFooter
      className={`full-footer ${darkMode ? 'dark' : ''}`}
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
        color: theme.colors.text,
        borderTop: `1px solid ${theme.colors.border}`,
        padding: '40px 24px 24px'
      }}
    >
      <div className="container mx-auto">
        <Row gutter={[24, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className={darkMode ? 'text-white' : ''}>
                Restaurant App
              </Title>
              <Paragraph className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Enjoy the finest dining experience with our exceptional cuisine and warm hospitality.
              </Paragraph>
              <Space className="social-icons">
                <Link to="#" className={`social-icon ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <FacebookOutlined />
                </Link>
                <Link to="#" className={`social-icon ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <TwitterOutlined />
                </Link>
                <Link to="#" className={`social-icon ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <InstagramOutlined />
                </Link>
                <Link to="#" className={`social-icon ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
                  <LinkedinOutlined />
                </Link>
              </Space>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className={darkMode ? 'text-white' : ''}>
                Quick Links
              </Title>
              <ul className="footer-links">
                <li>
                  <Link to="/home" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}>
                    About Us
                  </Link>
                </li>
               
                <li>
                  <Link to="/blog" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className={darkMode ? 'text-white' : ''}>
                Opening Hours
              </Title>
              <ul className="opening-hours">
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="day">Monday - Friday:</span>
                  <span className="hours">11:00 AM - 10:00 PM</span>
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="day">Saturday:</span>
                  <span className="hours">10:00 AM - 11:00 PM</span>
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <span className="day">Sunday:</span>
                  <span className="hours">10:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <div className="footer-section">
              <Title level={4} className={darkMode ? 'text-white' : ''}>
                Contact Us
              </Title>
              <ul className="contact-info">
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <EnvironmentOutlined className="contact-icon" />
                  <span>123 Gourmet Street, Foodville, CA 90210</span>
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <PhoneOutlined className="contact-icon" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  <MailOutlined className="contact-icon" />
                  <span>info@restaurant.com</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Divider className={darkMode ? 'bg-gray-700' : ''} />
        
        <div className="footer-bottom">
          <Row justify="space-between" align="middle">
            <Col xs={24} md={12} className="text-center md:text-left">
              <Text className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                © {new Date().getFullYear()} Restaurant App. All rights reserved.
              </Text>
            </Col>
            <Col xs={24} md={12} className="text-center md:text-right mt-2 md:mt-0">
              <Text className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Made with <HeartOutlined style={{ color: '#f56565' }} /> by Restaurant Team
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </AntFooter>
  );
  
  return isAuthenticated ? <FullFooter /> : <SimpleFooter />;
};

export default Footer;
