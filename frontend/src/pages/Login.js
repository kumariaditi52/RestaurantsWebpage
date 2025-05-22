import React, { useState } from 'react';
import { Typography, Form, Input, Button, Card, Divider, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import './Login.css';

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const { darkMode } = useTheme();
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const onFinish = async (values) => {
    setLoading(true);
    
    try {
      if (isLogin) {
        // For demo purposes, we'll simulate a successful login
        // In a real app, you would use the actual login function from your auth context
        // await login(values.email, values.password);
        
        // Simulate successful login
        setTimeout(() => {
          message.success('Login successful!');
          // Store some user info in localStorage to simulate authentication
          localStorage.setItem('user', JSON.stringify({
            email: values.email,
            name: values.email.split('@')[0], // Just using part of email as name for demo
            isAuthenticated: true
          }));
          
          // Navigate to home page after successful login
          navigate('/');
          setLoading(false);
        }, 1000);
      } else {
        // For registration
        if (values.password !== values.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        
        // Simulate successful registration
        setTimeout(() => {
          message.success('Registration successful! Please login.');
          setIsLogin(true);
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      message.error(error.message || 'An error occurred');
      setLoading(false);
    }
  };
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  // For demo login - bypasses the form validation
  const handleDemoLogin = () => {
    setLoading(true);
    
    // Simulate successful login with demo credentials
    setTimeout(() => {
      message.success('Demo login successful!');
      // Store demo user info in localStorage
      localStorage.setItem('user', JSON.stringify({
        email: 'user@example.com',
        name: 'Demo User',
        isAuthenticated: true
      }));
      
      // Navigate to home page
      navigate('/');
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className={`login-page ${darkMode ? 'dark' : ''}`}>
      <div className="login-container">
        <Card className="login-card">
          <Title level={2} className="login-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </Title>
          <Paragraph className="login-subtitle">
            {isLogin 
              ? 'Sign in to access your account and place orders' 
              : 'Join us to start ordering delicious meals'}
          </Paragraph>
          
          <Form
            name="auth_form"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            {!isLogin && (
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input 
                  prefix={<UserOutlined />} 
                  placeholder="Full Name" 
                  size="large" 
                />
              </Form.Item>
            )}
            
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Email" 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' },
                { min: 6, message: 'Password must be at least 6 characters' }
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />} 
                placeholder="Password" 
                size="large" 
              />
            </Form.Item>
            
            {!isLogin && (
              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match'));
                    },
                  }),
                ]}
              >
                <Input.Password 
                  prefix={<LockOutlined />} 
                  placeholder="Confirm Password" 
                  size="large" 
                />
              </Form.Item>
            )}
            
            {isLogin && (
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            )}
            
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large" 
                block
                loading={loading}
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </Button>
            </Form.Item>
          </Form>
          
          <Divider>
            <Text type="secondary">OR</Text>
          </Divider>
          
          <div className="auth-toggle">
            <Text>
              {isLogin 
                ? "Don't have an account?" 
                : "Already have an account?"}
            </Text>
            <Button type="link" onClick={toggleForm}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </Button>
          </div>
          
          <div className="demo-credentials">
            <Text type="secondary">
              Use demo credentials:
            </Text>
            <Button 
              type="link" 
              onClick={handleDemoLogin}
              loading={loading}
            >
              Login as Demo User
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
