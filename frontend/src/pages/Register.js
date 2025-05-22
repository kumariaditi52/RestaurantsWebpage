// // import React, { useState } from 'react';
// // import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
// // import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import { useTheme } from '../context/ThemeContext';
// // import './Register.css';

// // const { Title, Paragraph } = Typography;

// // const Register = () => {
// //   const { register, isAuthenticated } = useAuth();
// //   const { darkMode } = useTheme();
// //   const navigate = useNavigate();
// //   const [loading, setLoading] = useState(false);

// //   // If user is already authenticated, redirect to home
// //   React.useEffect(() => {
// //     if (isAuthenticated) {
// //       navigate('/home');
// //     }
// //   }, [isAuthenticated, navigate]);

// //   const onFinish = (values) => {
// //     setLoading(true);
    
// //     // Simulate API call with a timeout
// //     setTimeout(() => {
// //       // In a real app, you would send this data to your backend
// //       register({
// //         name: values.name,
// //         email: values.email,
// //         password: values.password,
// //       });
      
// //       message.success('Registration successful! Please log in.');
// //       setLoading(false);
// //       // Explicitly navigate to login page after registration
// //       navigate('/login');
// //     }, 1500);
// //   };

// //   return (
// //     <div className={`register-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
// //       <div className="register-header">
// //         <Title level={2} className="register-title">Create an Account</Title>
// //         <Paragraph className="register-subtitle">
// //           Join us to get access to all features
// //         </Paragraph>
// //       </div>
      
// //       <Form
// //         name="register"
// //         onFinish={onFinish}
// //         layout="vertical"
// //         size="large"
// //         scrollToFirstError
// //         className="register-form"
// //       >
// //         <Form.Item
// //           name="name"
// //           rules={[{ required: true, message: 'Please input your name!' }]}
// //         >
// //           <Input 
// //             prefix={<UserOutlined />} 
// //             placeholder="Full Name" 
// //             className="register-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item
// //           name="email"
// //           rules={[
// //             { required: true, message: 'Please input your email!' },
// //             { type: 'email', message: 'Please enter a valid email!' }
// //           ]}
// //         >
// //           <Input 
// //             prefix={<MailOutlined />} 
// //             placeholder="Email" 
// //             className="register-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item
// //           name="password"
// //           rules={[
// //             { required: true, message: 'Please input your password!' },
// //             { min: 6, message: 'Password must be at least 6 characters!' }
// //           ]}
// //           hasFeedback
// //         >
// //           <Input.Password 
// //             prefix={<LockOutlined />} 
// //             placeholder="Password" 
// //             className="register-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item
// //           name="confirm"
// //           dependencies={['password']}
// //           hasFeedback
// //           rules={[
// //             { required: true, message: 'Please confirm your password!' },
// //             ({ getFieldValue }) => ({
// //               validator(_, value) {
// //                 if (!value || getFieldValue('password') === value) {
// //                   return Promise.resolve();
// //                 }
// //                 return Promise.reject(new Error('The two passwords do not match!'));
// //               },
// //             }),
// //           ]}
// //         >
// //           <Input.Password 
// //             prefix={<LockOutlined />} 
// //             placeholder="Confirm Password" 
// //             className="register-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item
// //           name="agreement"
// //           valuePropName="checked"
// //           rules={[
// //             {
// //               validator: (_, value) =>
// //                 value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
// //             },
// //           ]}
// //         >
// //           <Checkbox className="register-checkbox">
// //             I agree to the <Link to="/terms" className="register-link">Terms of Service</Link> and <Link to="/privacy" className="register-link">Privacy Policy</Link>
// //           </Checkbox>
// //         </Form.Item>
        
// //         <Form.Item>
// //           <Button 
// //             type="primary" 
// //             htmlType="submit" 
// //             className="register-button"
// //             loading={loading}
// //           >
// //             Register
// //           </Button>
// //         </Form.Item>
        
// //         <div className="text-center mb-4">
// //           <span className="register-subtitle">Already have an account?</span>{' '}
// //           <Link to="/login" className="register-link">
// //             Log in
// //           </Link>
// //         </div>
        
// //         <Divider plain className="register-divider">Or register with</Divider>
        
// //         <div className="social-buttons">
// //           <Button 
// //             icon={<GoogleOutlined />} 
// //             className="social-button google-button"
// //           >
// //             Google
// //           </Button>
// //           <Button 
// //             icon={<FacebookOutlined />} 
// //             className="social-button facebook-button"
// //           >
// //             Facebook
// //           </Button>
// //         </div>
// //       </Form>
      
// //       <div className="register-footer">
// //         <p>By registering, you agree to our terms and that you have read our data policy.</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;


// import React, { useState } from 'react';
// import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
// import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import './Register.css';

// const { Title, Paragraph } = Typography;

// const Register = () => {
//   const { register, isAuthenticated } = useAuth();
//   const { darkMode } = useTheme();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // If user is already authenticated, redirect to home
//   React.useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/home');
//     }
//   }, [isAuthenticated, navigate]);

//   const onFinish = (values) => {
//     setLoading(true);
    
//     // Simulate API call with a timeout
//     setTimeout(() => {
//       // In a real app, you would send this data to your backend
//       register({
//         name: values.name,
//         email: values.email,
//         password: values.password,
//       });
      
//       message.success('Registration successful! Please log in.');
//       setLoading(false);
//       // Explicitly navigate to login page after registration
//       navigate('/login');
//     }, 1500);
//   };

//   return (
//     <div className={`register-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
//       <div className="register-header">
//         <Title level={2} className="register-title">Create an Account</Title>
//         <Paragraph className="register-subtitle">
//           Join us to get access to all features
//         </Paragraph>
//       </div>
      
//       <Form
//         name="register"
//         onFinish={onFinish}
//         layout="vertical"
//         size="large"
//         scrollToFirstError
//         className="register-form"
//       >
//         <Form.Item
//           name="name"
//           rules={[{ required: true, message: 'Please input your name!' }]}
//         >
//           <Input 
//             prefix={<UserOutlined />} 
//             placeholder="Full Name" 
//             className="register-input"
//           />
//         </Form.Item>
        
//         <Form.Item
//           name="email"
//           rules={[
//             { required: true, message: 'Please input your email!' },
//             { type: 'email', message: 'Please enter a valid email!' }
//           ]}
//         >
//           <Input 
//             prefix={<MailOutlined />} 
//             placeholder="Email" 
//             className="register-input"
//           />
//         </Form.Item>
        
//         <Form.Item
//           name="password"
//           rules={[
//             { required: true, message: 'Please input your password!' },
//             { min: 6, message: 'Password must be at least 6 characters!' }
//           ]}
//           hasFeedback
//         >
//           <Input.Password 
//             prefix={<LockOutlined />} 
//             placeholder="Password" 
//             className="register-input"
//           />
//         </Form.Item>
        
//         <Form.Item
//           name="confirm"
//           dependencies={['password']}
//           hasFeedback
//           rules={[
//             { required: true, message: 'Please confirm your password!' },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error('The two passwords do not match!'));
//               },
//             }),
//           ]}
//         >
//           <Input.Password 
//             prefix={<LockOutlined />} 
//             placeholder="Confirm Password" 
//             className="register-input"
//           />
//         </Form.Item>
        
//         <Form.Item
//           name="agreement"
//           valuePropName="checked"
//           rules={[
//             {
//               validator: (_, value) =>
//                 value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
//             },
//           ]}
//         >
//           <Checkbox className="register-checkbox">
//             I agree to the <Link to="/terms" className="register-link">Terms of Service</Link> and <Link to="/privacy" className="register-link">Privacy Policy</Link>
//           </Checkbox>
//         </Form.Item>
        
//         <Form.Item>
//           <Button 
//             type="primary" 
//             htmlType="submit" 
//             className="register-button"
//             loading={loading}
//           >
//             Register
//           </Button>
//         </Form.Item>
        
//         <div className="text-center mb-4">
//           <span className="register-subtitle">Already have an account?</span>{' '}
//           <Link to="/login" className="register-link">
//             Log in
//           </Link>
//         </div>
        
//         <Divider plain className="register-divider">Or register with</Divider>
        
//         <div className="social-buttons">
//           <Button 
//             icon={<GoogleOutlined />} 
//             className="social-button google-button"
//           >
//             Google
//           </Button>
//           <Button 
//             icon={<FacebookOutlined />} 
//             className="social-button facebook-button"
//           >
//             Facebook
//           </Button>
//         </div>
//       </Form>
      
//       <div className="register-footer">
//         <p>By registering, you agree to our terms and that you have read our data policy.</p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import './Register.css'; // Import the custom CSS

const { Title, Paragraph } = Typography;

const Register = () => {
  const { register, isAuthenticated } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // If user is already authenticated, redirect to home
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const onFinish = (values) => {
    setLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // In a real app, you would send this data to your backend
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      
      message.success('Registration successful! Please log in.');
      setLoading(false);
      // Explicitly navigate to login page after registration
      navigate('/login');
    }, 1500);
  };

  return (
    <div className={`register-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
      <div className="register-header">
        <Title level={2} className="register-title">Create an Account</Title>
        <Paragraph className="register-subtitle">
          Join us to get access to all features
        </Paragraph>
      </div>
      
      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        scrollToFirstError
        className="register-form"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Full Name" 
            className="register-input"
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
            prefix={<MailOutlined />} 
            placeholder="Email" 
            className="register-input"
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' }
          ]}
          hasFeedback
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Password" 
            className="register-input"
          />
        </Form.Item>
        
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Confirm Password" 
            className="register-input"
          />
        </Form.Item>
        
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
            },
          ]}
        >
          <Checkbox className="register-checkbox">
            I agree to the <Link to="/terms" className="register-link">Terms of Service</Link> and <Link to="/privacy" className="register-link">Privacy Policy</Link>
          </Checkbox>
        </Form.Item>
        
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="register-button"
            loading={loading}
          >
            Register
          </Button>
        </Form.Item>
        
        <div className="text-center mb-4">
          <span className="register-subtitle">Already have an account?</span>{' '}
          <Link to="/login" className="register-link">
            Log in
          </Link>
        </div>
        
        <Divider plain className="register-divider">Or register with</Divider>
        
        <div className="social-buttons">
          <Button 
            icon={<GoogleOutlined />} 
            className="social-button google-button"
          >
            Google
          </Button>
          <Button 
            icon={<FacebookOutlined />} 
            className="social-button facebook-button"
          >
            Facebook
          </Button>
        </div>
      </Form>
      
      <div className="register-footer">
        <p>By registering, you agree to our terms and that you have read our data policy.</p>
      </div>
    </div>
  );
};

export default Register;


