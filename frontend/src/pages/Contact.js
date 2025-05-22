      import React from 'react';
      import { Typography, Form, Input, Button, Row, Col, Card, Divider } from 'antd';
      import { 
        MailOutlined, 
        PhoneOutlined, 
        EnvironmentOutlined, 
        ClockCircleOutlined,
        SendOutlined
      } from '@ant-design/icons';
      import { useTheme } from '../context/ThemeContext';

      const { Title, Paragraph, Text } = Typography;
      const { TextArea } = Input;

      const Contact = () => {
        const { darkMode, theme } = useTheme();
  
        const onFinish = (values) => {
          console.log('Received values:', values);
        };
  
        return (
          <div 
            className={`contact-container ${darkMode ? 'dark' : ''}`}
            style={{ 
              backgroundColor: theme.colors.background,
              color: theme.colors.text
            }}
          >
            <div className="text-center mb-6">
              <Title level={1} className={darkMode ? 'text-white' : ''}>Contact Us</Title>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                We'd love to hear from you! Reach out with any questions, feedback, or to make a reservation.
              </Paragraph>
            </div>
      
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card 
                  className={darkMode ? 'bg-gray-700 text-white' : ''}
                  bodyStyle={darkMode ? { color: 'white' } : {}}
                >
                  <Title level={3} className={darkMode ? 'text-white' : ''}>Send Us a Message</Title>
                  <Form
                    name="contact"
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                  >
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                      <Input 
                        placeholder="Your Name" 
                        size="large" 
                        className={darkMode ? 'bg-gray-600 text-white border-gray-600' : ''}
                      />
                    </Form.Item>
              
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                      ]}
                    >
                      <Input 
                        placeholder="Your Email" 
                        size="large" 
                        className={darkMode ? 'bg-gray-600 text-white border-gray-600' : ''}
                      />
                    </Form.Item>
              
                    <Form.Item
                      name="subject"
                      rules={[{ required: true, message: 'Please input a subject!' }]}
                    >
                      <Input 
                        placeholder="Subject" 
                        size="large" 
                        className={darkMode ? 'bg-gray-600 text-white border-gray-600' : ''}
                      />
                    </Form.Item>
              
                    <Form.Item
                      name="message"
                      rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                      <TextArea 
                        placeholder="Your Message" 
                        rows={4} 
                        className={darkMode ? 'bg-gray-600 text-white border-gray-600' : ''}
                      />
                    </Form.Item>
              
                    <Form.Item>
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        size="large"
                        icon={<SendOutlined />}
                        className="w-full"
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
        
              <Col xs={24} md={12}>
                <Card 
                  className={darkMode ? 'bg-gray-700 text-white' : ''}
                  bodyStyle={darkMode ? { color: 'white' } : {}}
                >
                  <Title level={3} className={darkMode ? 'text-white' : ''}>Contact Information</Title>
                  <div className="contact-info">
                    <div className="mb-4 flex items-start">
                      <PhoneOutlined className="mr-3 mt-1" style={{ fontSize: '18px', color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                      <div>
                        <Text strong className={darkMode ? 'text-white block' : 'block'}>Phone</Text>
                        <Text className={darkMode ? 'text-gray-300' : ''}>+1 (555) 123-4567</Text>
                      </div>
                    </div>
              
                    <div className="mb-4 flex items-start">
                      <MailOutlined className="mr-3 mt-1" style={{ fontSize: '18px', color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                      <div>
                        <Text strong className={darkMode ? 'text-white block' : 'block'}>Email</Text>
                        <Text className={darkMode ? 'text-gray-300' : ''}>info@restaurant.com</Text>
                      </div>
                    </div>
              
                    <div className="mb-4 flex items-start">
                      <EnvironmentOutlined className="mr-3 mt-1" style={{ fontSize: '18px', color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                      <div>
                        <Text strong className={darkMode ? 'text-white block' : 'block'}>Address</Text>
                        <Text className={darkMode ? 'text-gray-300' : ''}>
                          123 Gourmet Street<br />
                          Foodville, CA 90210<br />
                          United States
                        </Text>
                      </div>
                    </div>
              
                    <div className="mb-4 flex items-start">
                      <ClockCircleOutlined className="mr-3 mt-1" style={{ fontSize: '18px', color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                      <div>
                        <Text strong className={darkMode ? 'text-white block' : 'block'}>Opening Hours</Text>
                        <Text className={darkMode ? 'text-gray-300' : ''}>
                          Monday - Friday: 11:00 AM - 10:00 PM<br />
                          Saturday - Sunday: 10:00 AM - 11:00 PM
                        </Text>
                      </div>
                    </div>
                  </div>
            
                  <Divider className={darkMode ? 'bg-gray-600' : ''} />
            
                  <div className="map-container">
                    <Title level={4} className={darkMode ? 'text-white' : ''}>Find Us</Title>
                    <div className="map-placeholder" style={{ height: '200px', background: darkMode ? '#4B5563' : '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Text className={darkMode ? 'text-gray-300' : 'text-gray-500'}>
                        Map will be displayed here
                      </Text>
                    </div>
                    <Text className={`mt-2 block text-center ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                      In a real app, an interactive map would be displayed here
                    </Text>
                  </div>
                </Card>
              </Col>
            </Row>
      
            <div className="reservation-section mt-8">
              <Card 
                className={darkMode ? 'bg-gray-700 text-white' : ''}
                bodyStyle={darkMode ? { color: 'white' } : {}}
              >
                <div className="text-center">
                  <Title level={3} className={darkMode ? 'text-white' : ''}>Make a Reservation</Title>
                  <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                    For reservations, please call us directly or fill out the contact form above.
                  </Paragraph>
                  <Button 
                    type="primary" 
                    size="large"
                    icon={<PhoneOutlined />}
                    className="mt-4"
                  >
                    Call for Reservation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        );
      };

      export default Contact;
