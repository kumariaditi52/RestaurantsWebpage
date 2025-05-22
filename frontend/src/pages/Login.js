// // import React, { useState } from 'react';
// // import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
// // import { LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';
// // import { useTheme } from '../context/ThemeContext';
// // import './Login.css';

// // const { Title, Paragraph } = Typography;

// // const Login = () => {
// //   const { login, isAuthenticated } = useAuth();
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
// //       const success = login({
// //         email: values.email,
// //         password: values.password,
// //       });
      
// //       if (success) {
// //         message.success('Login successful!');
// //         navigate('/home');
// //       } else {
// //         message.error('Invalid email or password');
// //       }
      
// //       setLoading(false);
// //     }, 1500);
// //   };

// //   return (
// //     <div className={`login-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
// //       <div className="login-header">
// //         <Title level={2} className="login-title">Welcome Back</Title>
// //         <Paragraph className="login-subtitle">
// //           Sign in to continue to your account
// //         </Paragraph>
// //       </div>
      
// //       <Form
// //         name="login"
// //         onFinish={onFinish}
// //         layout="vertical"
// //         size="large"
// //         className="login-form"
// //       >
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
// //             className="login-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item
// //           name="password"
// //           rules={[{ required: true, message: 'Please input your password!' }]}
// //         >
// //           <Input.Password 
// //             prefix={<LockOutlined />} 
// //             placeholder="Password" 
// //             className="login-input"
// //           />
// //         </Form.Item>
        
// //         <Form.Item>
// //           <div className="flex justify-between items-center">
// //             <Checkbox className="login-checkbox">Remember me</Checkbox>
// //             <Link to="/forgot-password" className="login-link">
// //               Forgot password?
// //             </Link>
// //           </div>
// //         </Form.Item>
        
// //         <Form.Item>
// //           <Button 
// //             type="primary" 
// //             htmlType="submit" 
// //             className="login-button"
// //             loading={loading}
// //           >
// //             Log in
// //           </Button>
// //         </Form.Item>
        
// //         <div className="text-center mb-4">
// //           <span className="login-subtitle">Don't have an account?</span>{' '}
// //           <Link to="/register" className="login-link">
// //             Register now
// //           </Link>
// //         </div>
        
// //         <Divider plain className="login-divider">Or login with</Divider>
        
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
// //     </div>
// //   );
// // };

// // export default Login;



// import React, { useState } from 'react';
// import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
// import { LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useTheme } from '../context/ThemeContext';
// import './Login.css';

// const { Title, Paragraph } = Typography;

// const Login = () => {
//   const { login, isAuthenticated } = useAuth();
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
//       const success = login({
//         email: values.email,
//         password: values.password,
//       });
      
//       if (success) {
//         message.success('Login successful!');
//         navigate('/home');
//       } else {
//         message.error('Invalid email or password');
//       }
      
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className={`login-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
//       <div className="login-header">
//         <Title level={2} className="login-title">Welcome Back</Title>
//         <Paragraph className="login-subtitle">
//           Sign in to continue to your account
//         </Paragraph>
//       </div>
      
//       <Form
//         name="login"
//         onFinish={onFinish}
//         layout="vertical"
//         size="large"
//         className="login-form"
//       >
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
//             className="login-input"
//           />
//         </Form.Item>
        
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password 
//             prefix={<LockOutlined />} 
//             placeholder="Password" 
//             className="login-input"
//           />
//         </Form.Item>
        
//         <Form.Item>
//           <div className="flex justify-between items-center">
//             <Checkbox className="login-checkbox">Remember me</Checkbox>
//             <Link to="/forgot-password" className="login-link">
//               Forgot password?
//             </Link>
//           </div>
//         </Form.Item>
        
//         <Form.Item>
//           <Button 
//             type="primary" 
//             htmlType="submit" 
//             className="login-button"
//             loading={loading}
//           >
//             Log in
//           </Button>
//         </Form.Item>
        
//         <div className="text-center mb-4">
//           <span className="login-subtitle">Don't have an account?</span>{' '}
//           <Link to="/register" className="login-link">
//             Register now
//           </Link>
//         </div>
        
//         <Divider plain className="login-divider">Or login with</Divider>
        
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
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Typography, Form, Input, Button, Checkbox, Divider, message } from 'antd';
import { LockOutlined, MailOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import './Login.css';

const { Title, Paragraph } = Typography;

const Login = () => {
  const { login, isAuthenticated } = useAuth();
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
      const success = login({
        email: values.email,
        password: values.password,
      });
      
      if (success) {
        message.success('Login successful!');
        navigate('/home');
      } else {
        message.error('Invalid email or password');
      }
      
      setLoading(false);
    }, 1500);
  };

  return (
    <div className={`login-container fade-in slide-up ${darkMode ? 'dark' : ''}`}>
      <div className="login-header">
        <Title level={2} className="login-title">Welcome Back</Title>
        <Paragraph className="login-subtitle">
          Sign in to continue to your account
        </Paragraph>
      </div>
      
      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        className="login-form"
      >
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
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Password" 
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item>
          <div className="flex justify-between items-center">
            <Checkbox className="login-checkbox">Remember me</Checkbox>
            <Link to="/forgot-password" className="login-link">
              Forgot password?
            </Link>
          </div>
        </Form.Item>
        
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            className="login-button"
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
        
        <div className="text-center mb-4">
          <span className="login-subtitle">Don't have an account?</span>{' '}
          <Link to="/register" className="login-link">
            Register now
          </Link>
        </div>
        
        <Divider plain className="login-divider">Or login with</Divider>
        
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
    </div>
  );
};

export default Login;


