import React, { useState } from 'react';
import { Typography, Row, Col, Form, Input, Button, Card, Divider, message, Modal } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined,
  ClockCircleOutlined,
  SendOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { useTheme } from '../context/ThemeContext';
import './Contact.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const { darkMode } = useTheme();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  // Replace with your actual Web3Forms access key
  const ACCESS_KEY = "3f202e5a-783f-43d9-b916-34580a1741e4";

  const onFinish = async (values) => {
    setLoading(true);
    
    try {
      // Create form data object
      const formData = new FormData();
      
      // Add the access key
      formData.append("access_key", ACCESS_KEY);
      
      // Add form fields
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      
      // Add other required fields
      formData.append("from_name", "Restaurant Website Contact Form");
      formData.append("botcheck", "");
      
      // Send the form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log("Form submitted successfully", data);
        form.resetFields();
        // Show success modal instead of just a message
        setSuccessModalVisible(true);
      } else {
        console.error("Form submission failed", data);
        message.error(`Something went wrong: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`contact-page ${darkMode ? 'dark' : ''}`}>
      <div className="contact-header">
        <div className="contact-header-overlay">
          <Title level={1} className="contact-title">Contact Us</Title>
          <Paragraph className="contact-subtitle">
            We'd love to hear from you. Reach out with any questions or to make a reservation.
          </Paragraph>
        </div>
      </div>

      <div className="contact-content">
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <Title level={2}>Get In Touch</Title>
            <Paragraph className="contact-text">
              Whether you have a question about our menu, want to make a reservation, or are interested in hosting a private event, we're here to help.
            </Paragraph>
      
            <Form
              form={form}
              name="contact_form"
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              {/* Hidden access key field */}
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              
              {/* Hidden redirect field - add your thank you page URL if needed */}
              <input type="hidden" name="redirect" value="" />
              
              {/* Hidden spam capture field */}
              <input type="hidden" name="botcheck" />
              
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input size="large" placeholder="Your name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input size="large" placeholder="Your email" />
                  </Form.Item>
                </Col>
              </Row>
        
              <Form.Item
                name="subject"
                label="Subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input size="large" placeholder="Subject of your message" />
              </Form.Item>
        
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="Your message" 
                  size="large" 
                />
              </Form.Item>
        
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  size="large"
                  icon={<SendOutlined />}
                  loading={loading}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
  
          <Col xs={24} lg={12}>
            <div className="contact-info-container">
              <Card className="contact-info-card">
                <Title level={2}>Contact Information</Title>
                <Paragraph className="contact-text">
                  We're located in the heart of the city. Visit us or get in touch using the information below.
                </Paragraph>
          
                <div className="contact-info-item">
                  <EnvironmentOutlined className="contact-icon" />
                  <div>
                    <Text strong>Address</Text>
                    <Paragraph>
                      123 Gourmet Street<br />
                      Foodie District, FC 98765
                    </Paragraph>
                  </div>
                </div>
          
                <div className="contact-info-item">
                  <PhoneOutlined className="contact-icon" />
                  <div>
                    <Text strong>Phone</Text>
                    <Paragraph>(555) 123-4567</Paragraph>
                  </div>
                </div>
          
                <div className="contact-info-item">
                  <MailOutlined className="contact-icon" />
                  <div>
                    <Text strong>Email</Text>
                    <Paragraph>info@restaurant.com</Paragraph>
                  </div>
                </div>
          
                <div className="contact-info-item">
                  <ClockCircleOutlined className="contact-icon" />
                  <div>
                    <Text strong>Hours</Text>
                    <Paragraph>
                      Monday - Friday: 11am - 10pm<br />
                      Saturday - Sunday: 10am - 11pm
                    </Paragraph>
                  </div>
                </div>
              </Card>
        
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266952082!2d-73.98784532396766!3d40.757977871383596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1696356704900!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant Location"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>

        <Divider />
      </div>

      {/* Success Modal */}
      <Modal
        title={
          <div style={{ textAlign: 'center', color: '#52c41a' }}>
            <CheckCircleOutlined style={{ fontSize: 24 }} />
            <span style={{ marginLeft: 10 }}>Message Sent Successfully!</span>
          </div>
        }
        open={successModalVisible}
        onOk={() => setSuccessModalVisible(false)}
        onCancel={() => setSuccessModalVisible(false)}
        footer={[
          <Button key="ok" type="primary" onClick={() => setSuccessModalVisible(false)}>
            OK
          </Button>
        ]}
        centered
      >
        <div style={{ padding: '20px 0', textAlign: 'center' }}>
          <Paragraph>
            Thank you for contacting us! Your message has been successfully submitted.
          </Paragraph>
          <Paragraph>
            We appreciate your interest and will get back to you as soon as possible.
          </Paragraph>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
