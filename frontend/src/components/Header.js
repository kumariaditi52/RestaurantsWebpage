  import React, { useState } from 'react';
  import { Layout, Menu, Button, Drawer, Avatar, Dropdown, Switch } from 'antd';
  import { 
    MenuOutlined, 
    HomeOutlined, 
    ShopOutlined, 
    InfoCircleOutlined, 
    PhoneOutlined, 
    ReadOutlined,
    UserOutlined,
    LogoutOutlined,
    LoginOutlined,
    BulbOutlined
  } from '@ant-design/icons';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { useTheme } from '../context/ThemeContext';
  import { useAuth } from '../context/AuthContext';
  import './Header.css';

  const { Header: AntHeader } = Layout;

  const Header = () => {
    const [visible, setVisible] = useState(false);
    const { darkMode, toggleTheme } = useTheme();
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    const handleLogout = () => {
      logout();
      navigate('/');
    };

    const userMenu = (
      <Menu>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="orders" icon={<ShopOutlined />}>
          My Orders
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu>
    );

    const menuItems = [
      {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
      },
      {
        key: '/menu',
        icon: <ShopOutlined />,
        label: <Link to="/menu">Menu</Link>,
      },
      {
        key: '/about',
        icon: <InfoCircleOutlined />,
        label: <Link to="/about">About</Link>,
      },
      {
        key: '/contact',
        icon: <PhoneOutlined />,
        label: <Link to="/contact">Contact</Link>,
      },
      {
        key: '/blog',
        icon: <ReadOutlined />,
        label: <Link to="/blog">Blog</Link>,
      },
    ];

    return (
      <AntHeader className={`header ${darkMode ? 'dark' : ''}`}>
        <div className="logo">
          <Link to="/">
            <h1 className="logo-text">Gourmet</h1>
          </Link>
        </div>
        
        <div className="menu-section">
          <Menu
            theme={darkMode ? 'dark' : 'light'}
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className="desktop-menu"
            items={menuItems}
          />
          
          <div className="header-actions">
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbOutlined />}
              className="theme-switch"
            />
            
            {isAuthenticated ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <div className="user-profile">
                  <Avatar src={user?.avatar} icon={<UserOutlined />} />
                  <span className="user-name">{user?.name}</span>
                </div>
              </Dropdown>
            ) : (
              <Button type="primary" icon={<LoginOutlined />}>
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
          
          <Button 
            className="menu-button" 
            type="text" 
            icon={<MenuOutlined />} 
            onClick={showDrawer}
          />
        </div>
        
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
          className={darkMode ? 'dark-drawer' : ''}
        >
          <Menu
            theme={darkMode ? 'dark' : 'light'}
            mode="vertical"
            selectedKeys={[location.pathname]}
            onClick={onClose}
            items={menuItems}
          />
          
          <div className="drawer-actions">
            <div className="drawer-theme-switch">
              <span>Dark Mode</span>
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                checkedChildren={<BulbOutlined />}
                unCheckedChildren={<BulbOutlined />}
              />
            </div>
            
            {isAuthenticated ? (
              <div className="drawer-user-section">
                <div className="drawer-user-info">
                  <Avatar src={user?.avatar} icon={<UserOutlined />} />
                  <span className="drawer-user-name">{user?.name}</span>
                </div>
                <Button 
                  type="primary" 
                  danger 
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                type="primary" 
                icon={<LoginOutlined />}
                block
                onClick={() => {
                  navigate('/login');
                  onClose();
                }}
              >
                Login
              </Button>
            )}
          </div>
        </Drawer>
      </AntHeader>
    );
  };

  export default Header;
