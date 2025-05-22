  import React, { useState } from 'react';
  import { Layout, Button, Dropdown, Menu, Avatar } from 'antd';
  import { Link, useNavigate, useLocation } from 'react-router-dom';
  import { useAuth } from '../context/AuthContext';
  import { useTheme } from '../context/ThemeContext';
  import {
    UserOutlined,
    LogoutOutlined,
    DownOutlined,
    HomeOutlined,
    ReadOutlined,
    PhoneOutlined,
    CustomerServiceOutlined,
    MenuOutlined,
    InfoCircleOutlined
  } from '@ant-design/icons';
  import './Header.css';

  const { Header: AntHeader } = Layout;

  const Header = () => {
    const { isAuthenticated, logout, user } = useAuth();
    const { darkMode, toggleTheme, theme } = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [visible, setVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

    const handleMenuClick = ({ key }) => {
      if (key === 'logout') {
        handleLogout();
      }
      setVisible(false);
    };

    const userMenu = (
      <Menu
        onClick={handleMenuClick}
        className={darkMode ? 'bg-gray-700 text-white' : ''}
      >
        <Menu.Item key="profile" icon={<UserOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          Profile
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" icon={<LogoutOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          Logout
        </Menu.Item>
      </Menu>
    );

    const mobileMenu = (
      <Menu
        className={darkMode ? 'bg-gray-700 text-white' : ''}
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/home" icon={<HomeOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="/about" icon={<InfoCircleOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/blog" icon={<ReadOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="/services" icon={<CustomerServiceOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="/contact" icon={<PhoneOutlined />} className={darkMode ? 'text-white hover:bg-gray-600' : ''}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    );

    // Determine if we're on a public route (login or register)
    const isPublicRoute = location.pathname === '/login' || location.pathname === '/register';

    return (
      <AntHeader 
        className={`site-header ${darkMode ? 'dark' : ''} flex justify-between items-center shadow-md`}
        style={{ 
          backgroundColor: darkMode ? '#111827' : '#ffffff',
          color: theme.colors.text,
          borderBottom: `1px solid ${theme.colors.border}`
        }}
      >
        <div className="flex items-center">
          {/* Mobile menu button - only show when authenticated */}
          {isAuthenticated && (
            <Dropdown
              overlay={mobileMenu}
              trigger={['click']}
              visible={mobileMenuVisible}
              onVisibleChange={setMobileMenuVisible}
              className="md:hidden"
            >
              <Button
                type="text"
                icon={<MenuOutlined />}
                className={`mobile-menu-button ${darkMode ? 'text-white' : ''}`}
              />
            </Dropdown>
          )}

          {/* Logo */}
          <div className="logo">
            <Link to={isAuthenticated ? "/home" : "/login"} className={`logo-text ${darkMode ? 'text-white' : 'text-blue-600'}`}>
              Restaurant App
            </Link>
          </div>
        </div>

        {/* Navigation Menu - only show when authenticated */}
        {isAuthenticated && (
          <div className="nav-menu hidden md:block">
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              className={`nav-menu ${darkMode ? 'dark' : ''}`}
            >
              <Menu.Item
                key="/home"
                icon={<HomeOutlined />}
                onClick={() => navigate('/home')}
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="/about"
                icon={<InfoCircleOutlined />}
                onClick={() => navigate('/about')}
              >
                About
              </Menu.Item>
              <Menu.Item
                key="/blog"
                icon={<ReadOutlined />}
                onClick={() => navigate('/blog')}
              >
                Blog
              </Menu.Item>
              <Menu.Item
                key="/services"
                icon={<CustomerServiceOutlined />}
                onClick={() => navigate('/services')}
              >
                Services
              </Menu.Item>
              <Menu.Item
                key="/contact"
                icon={<PhoneOutlined />}
                onClick={() => navigate('/contact')}
              >
                Contact
              </Menu.Item>
            </Menu>
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button
            type="text"
            onClick={toggleTheme}
            className={`theme-toggle ${darkMode ? 'text-white' : ''}`}
            aria-label="Toggle theme"
          >
            {darkMode ? '🌞' : '🌙'}
          </Button>

          {isAuthenticated ? (
            <Dropdown
              overlay={userMenu}
              trigger={['click']}
              visible={visible}
              onVisibleChange={setVisible}
            >
              <div className={`profile-info ${darkMode ? 'text-white' : ''} cursor-pointer flex items-center`}>
                <Avatar
                  icon={<UserOutlined />}
                  className={`${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mr-2`}
                />
                <span className="mr-1 hidden sm:inline">{user?.name || 'User'}</span>
                <DownOutlined style={{ fontSize: '12px' }} />
              </div>
            </Dropdown>
          ) : (
            !isPublicRoute && (
              <div className="auth-buttons flex gap-2">
                <Button
                  type="default"
                  onClick={() => navigate('/login')}
                  className={darkMode ? 'border-gray-600 text-white hover:border-blue-400' : ''}
                >
                  Login
                </Button>
                <Button
                  type="primary"
                  onClick={() => navigate('/register')}
                >
                  Register
                </Button>
              </div>
            )
          )}
        </div>
      </AntHeader>
    );
  };

  export default Header;
