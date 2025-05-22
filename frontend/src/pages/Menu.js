import React, { useState, useEffect } from 'react';
import { Typography, Card, Row, Col, Button, Tabs, Input, Select, Divider, Badge, notification, message } from 'antd';
import { ShoppingCartOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import './Menu.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = Select;

const menuItems = {
  appetizers: [
    {
      id: 101,
      name: 'Bruschetta',
      description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and herbs.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    },
    {
      id: 102,
      name: 'Calamari',
      description: 'Crispy fried squid served with marinara sauce and lemon wedges.',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80'
    },
    {
      id: 103,
      name: 'Spinach Artichoke Dip',
      description: 'Creamy blend of spinach, artichokes, and cheeses, served with tortilla chips.',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1576506295286-5cda18df9ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ],
  mainCourses: [
    {
      id: 201,
      name: 'Signature Steak',
      description: 'Prime cut beef steak grilled to perfection, served with roasted vegetables and red wine sauce.',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 202,
      name: 'Seafood Pasta',
      description: 'Fresh seafood medley with linguine pasta in a creamy white wine sauce.',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 203,
      name: 'Chicken Marsala',
      description: 'Chicken breast sautéed with mushrooms and marsala wine sauce, served with mashed potatoes.',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80'
    },
    {
      id: 204,
      name: 'Vegetable Risotto',
      description: 'Creamy arborio rice with seasonal vegetables, white wine, and parmesan cheese.',
      price: 17.99,
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ],
  desserts: [
    {
      id: 301,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 302,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80'
    },
    {
      id: 303,
      name: 'New York Cheesecake',
      description: 'Rich and creamy cheesecake with a graham cracker crust, topped with berry compote.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ],
  beverages: [
    {
      id: 401,
      name: 'Signature Cocktail',
      description: 'House special blend of premium spirits with fresh fruit juices and herbs.',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 402,
      name: 'Wine Selection',
      description: 'Curated selection of fine wines from around the world.',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      id: 403,
      name: 'Craft Beer',
      description: 'Selection of local and imported craft beers.',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ]
};

const Menu = () => {
  const { darkMode } = useTheme();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleOrderNow = (item) => {
    navigate(`/food-detail/${item.id}`, { 
      state: { 
        food: item,
        quantity: 1
      } 
    });
  };

  const handleAddToCart = (item) => {
    // Check if item is already in cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // If item exists, increase quantity
      const updatedCart = cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      );
      setCart(updatedCart);
      message.success(`Added another ${item.name} to cart!`);
    } else {
      // If item doesn't exist, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
      message.success(`${item.name} added to cart!`);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    message.success('Item removed from cart!');
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(itemId);
      return;
    }
    
    const updatedCart = cart.map(item => 
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      notification.info({
        message: 'Please log in',
        description: 'You need to be logged in to checkout.',
        placement: 'topRight',
      });
      navigate('/payment', { state: { from: '/menu' } });
      return;
    }
    
    // Calculate total amount
    const totalAmount = getTotalPrice();
    
    // Navigate to payment page with cart data
    navigate('/payment', { 
      state: { 
        cart: cart,
        totalAmount: totalAmount
      } 
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handlePriceFilterChange = (value) => {
    setPriceFilter(value);
  };

  const filterMenuItems = (items) => {
    return items.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Price filter
      let matchesPrice = true;
      if (priceFilter === 'under10') {
        matchesPrice = item.price < 10;
      } else if (priceFilter === '10to20') {
        matchesPrice = item.price >= 10 && item.price <= 20;
      } else if (priceFilter === 'over20') {
        matchesPrice = item.price > 20;
      }
      
      return matchesSearch && matchesPrice;
    });
  };

  const renderMenuItems = (items) => {
    const filteredItems = filterMenuItems(items);
    
    if (filteredItems.length === 0) {
      return (
        <div className="no-results">
          <Paragraph>No menu items match your search criteria.</Paragraph>
        </div>
      );
    }
    
    return (
      <Row gutter={[24, 24]}>
        {filteredItems.map(item => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Card 
              className="menu-item-card" 
              hoverable
              cover={
                <div className="menu-item-image-container">
                  <img 
                    alt={item.name} 
                    src={item.image} 
                    className="menu-item-image"
                  />
                  <div className="menu-item-price">${item.price.toFixed(2)}</div>
                </div>
              }
            >
              <Title level={4}>{item.name}</Title>
              <Paragraph ellipsis={{ rows: 2 }}>{item.description}</Paragraph>
              <div className="menu-item-actions">
                <Button 
                  type="primary" 
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleOrderNow(item)}
                >
                  Order Now
                </Button>
                <Button 
                  type="default"
                  icon={<PlusOutlined />}
                  onClick={() => handleAddToCart(item)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const renderCart = () => {
    if (cart.length === 0) {
      return (
        <div className="empty-cart">
          <ShoppingCartOutlined style={{ fontSize: '48px', color: '#bfbfbf' }} />
          <Paragraph>Your cart is empty</Paragraph>
        </div>
      );
    }

    return (
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price.toFixed(2)}</div>
            </div>
            <div className="cart-item-quantity">
              <Button 
                size="small" 
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <span>{item.quantity}</span>
              <Button 
                size="small" 
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <Button 
              type="text" 
              danger 
              onClick={() => handleRemoveFromCart(item.id)}
            >
              ×
            </Button>
          </div>
        ))}
        <Divider />
        <div className="cart-total">
          <span>Total:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <Button 
          type="primary" 
          block 
          size="large" 
          className="checkout-button"
          onClick={handleCheckout}
        >
          Proceed to Checkout
        </Button>
      </div>
    );
  };

  return (
    <div className={`menu-page ${darkMode ? 'dark' : ''}`}>
      <div className="menu-header">
        <div className="menu-header-overlay">
          <Title level={1} className="menu-title">Our Menu</Title>
          <Paragraph className="menu-subtitle">
            Explore our carefully crafted dishes made with the finest ingredients
          </Paragraph>
        </div>
      </div>
      
      <div className="menu-content">
        <div className="cart-icon-container">
          <Badge count={getTotalItems()} showZero>
            <Button 
              type="primary" 
              shape="circle" 
              icon={<ShoppingCartOutlined />} 
              size="large"
              className="cart-icon-button"
              onClick={() => setCartVisible(!cartVisible)}
            />
          </Badge>
          {cartVisible && (
            <div className="cart-dropdown">
              <div className="cart-header">
                <Title level={4}>Your Cart</Title>
                <Button type="text" onClick={() => setCartVisible(false)}>×</Button>
              </div>
              {renderCart()}
            </div>
          )}
        </div>
        
        <div className="menu-filters">
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder="Search menu items..."
                allowClear
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={handleSearch}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Col>
            <Col xs={24} md={12}>
              <Select
                defaultValue="all"
                style={{ width: '100%' }}
                size="large"
                onChange={handlePriceFilterChange}
              >
                <Option value="all">All Prices</Option>
                <Option value="under10">Under $10</Option>
                <Option value="10to20">$10 - $20</Option>
                <Option value="over20">Over $20</Option>
              </Select>
            </Col>
          </Row>
        </div>
        
        <Divider />
        
        <Tabs defaultActiveKey="mainCourses" size="large" centered>
          <TabPane tab="Appetizers" key="appetizers">
            {renderMenuItems(menuItems.appetizers)}
          </TabPane>
          <TabPane tab="Main Courses" key="mainCourses">
            {renderMenuItems(menuItems.mainCourses)}
          </TabPane>
          <TabPane tab="Desserts" key="desserts">
            {renderMenuItems(menuItems.desserts)}
          </TabPane>
          <TabPane tab="Beverages" key="beverages">
            {renderMenuItems(menuItems.beverages)}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;