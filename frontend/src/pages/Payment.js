import React, { useState, useEffect } from 'react';
import { Typography, Card, Form, Input, Button, Radio, Steps, Divider, Row, Col, message, Result } from 'antd';
import { CreditCardOutlined, BankOutlined, DollarOutlined, CheckCircleOutlined, LockOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Payment.css';

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

const Payment = () => {
  const { darkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [loading, setLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Load cart data from localStorage or from location state
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCart(parsedCart);
      
      // Calculate total amount
      const total = parsedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setTotalAmount(total);
    } else if (location.state && location.state.cart) {
      setCart(location.state.cart);
      setTotalAmount(location.state.totalAmount);
    }
  }, [location.state]);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePaymentSubmit = (values) => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setOrderComplete(true);
      setCurrentStep(currentStep + 1);
      
      // Clear the cart in localStorage
      localStorage.removeItem('cart');
    }, 2000);
  };

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  const renderOrderSummary = () => {
    return (
      <Card className="order-summary-card">
        <Title level={4}>Order Summary</Title>
        <div className="order-items">
          {cart.map(item => (
            <div key={item.id} className="order-item">
              <div className="order-item-name">
                {item.name} <span className="order-item-quantity">x{item.quantity}</span>
              </div>
              <div className="order-item-price">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <Divider />
        <div className="order-subtotal">
          <span>Subtotal:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="order-tax">
          <span>Tax (10%):</span>
          <span>${(totalAmount * 0.1).toFixed(2)}</span>
        </div>
        <div className="order-delivery">
          <span>Delivery Fee:</span>
          <span>$5.00</span>
        </div>
        <Divider />
        <div className="order-total">
          <span>Total:</span>
          <span>${(totalAmount + (totalAmount * 0.1) + 5).toFixed(2)}</span>
        </div>
      </Card>
    );
  };

  const renderPaymentMethod = () => {
    return (
      <div className="payment-method-container">
        <Title level={4}>Select Payment Method</Title>
        <Radio.Group 
          onChange={handlePaymentMethodChange} 
          value={paymentMethod}
          className="payment-method-group"
        >
          <Radio.Button value="credit-card" className="payment-method-option">
            <CreditCardOutlined /> Credit/Debit Card
          </Radio.Button>
          <Radio.Button value="bank-transfer" className="payment-method-option">
            <BankOutlined /> Bank Transfer
          </Radio.Button>
          <Radio.Button value="cash" className="payment-method-option">
            <DollarOutlined /> Cash on Delivery
          </Radio.Button>
        </Radio.Group>
        
        {paymentMethod === 'credit-card' && (
          <Form
            layout="vertical"
            className="payment-form"
            onFinish={handlePaymentSubmit}
          >
            <Form.Item
              label="Card Number"
              name="cardNumber"
              rules={[
                { required: true, message: 'Please enter your card number' },
                { pattern: /^\d{16}$/, message: 'Please enter a valid 16-digit card number' }
              ]}
            >
              <Input 
                prefix={<CreditCardOutlined />} 
                placeholder="1234 5678 9012 3456" 
                maxLength={16}
              />
            </Form.Item>
            
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Expiry Date"
                  name="expiryDate"
                  rules={[{ required: true, message: 'Please enter expiry date' }]}
                >
                  <Input placeholder="MM/YY" maxLength={5} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="CVV"
                  name="cvv"
                  rules={[
                    { required: true, message: 'Please enter CVV' },
                    { pattern: /^\d{3,4}$/, message: 'Please enter a valid CVV' }
                  ]}
                >
                  <Input 
                    prefix={<LockOutlined />} 
                    placeholder="123" 
                    maxLength={4} 
                  />
                </Form.Item>
              </Col>
            </Row>
            
            <Form.Item
              label="Cardholder Name"
              name="cardholderName"
              rules={[{ required: true, message: 'Please enter cardholder name' }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>
            
            <div className="payment-actions">
              <Button onClick={handlePrevious}>Back</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Pay ${(totalAmount + (totalAmount * 0.1) + 5).toFixed(2)}
              </Button>
            </div>
          </Form>
        )}
        
        {paymentMethod === 'bank-transfer' && (
          <div className="payment-info">
            <Paragraph>
              Please transfer the total amount to the following bank account:
            </Paragraph>
            <div className="bank-details">
              <p><strong>Bank Name:</strong> Example Bank</p>
              <p><strong>Account Number:</strong> 1234567890</p>
              <p><strong>Routing Number:</strong> 987654321</p>
              <p><strong>Account Name:</strong> Restaurant Name</p>
              <p><strong>Reference:</strong> Your order number will be provided after confirmation</p>
            </div>
            <div className="payment-actions">
              <Button onClick={handlePrevious}>Back</Button>
              <Button type="primary" onClick={handlePaymentSubmit} loading={loading}>
                Confirm Order
              </Button>
            </div>
          </div>
        )}
        
        {paymentMethod === 'cash' && (
          <div className="payment-info">
            <Paragraph>
              You will pay the total amount to the delivery person when your order arrives.
            </Paragraph>
            <div className="payment-actions">
              <Button onClick={handlePrevious}>Back</Button>
              <Button type="primary" onClick={handlePaymentSubmit} loading={loading}>
                Place Order
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderDeliveryInfo = () => {
    return (
      <div className="delivery-info-container">
        <Title level={4}>Delivery Information</Title>
        <Form
          layout="vertical"
          className="delivery-form"
          onFinish={handleNext}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder="John Doe" />
          </Form.Item>
          
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input placeholder="+1 (123) 456-7890" />
          </Form.Item>
          
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter your address' }]}
          >
            <Input.TextArea placeholder="123 Main St, Apt 4B" rows={3} />
          </Form.Item>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please enter your city' }]}
              >
                <Input placeholder="New York" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Zip Code"
                name="zipCode"
                rules={[{ required: true, message: 'Please enter your zip code' }]}
              >
                <Input placeholder="10001" />
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item
            label="Delivery Instructions (Optional)"
            name="instructions"
          >
            <Input.TextArea 
              placeholder="E.g., Ring the doorbell, leave at the door, etc." 
              rows={3} 
            />
          </Form.Item>
          
          <div className="delivery-actions">
            <Button onClick={handleBackToMenu}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Continue to Payment
            </Button>
          </div>
        </Form>
      </div>
    );
  };

  const renderOrderComplete = () => {
    return (
      <Result
        status="success"
        title="Order Placed Successfully!"
        subTitle="Your order has been placed and will be delivered soon. Thank you for your purchase!"
        extra={[
          <Button type="primary" key="menu" onClick={handleBackToMenu}>
            Back to Menu
          </Button>,
        ]}
      />
    );
  };

  const steps = [
    {
      title: 'Delivery',
      content: renderDeliveryInfo(),
      icon: <DollarOutlined />,
    },
    {
      title: 'Payment',
      content: renderPaymentMethod(),
      icon: <CreditCardOutlined />,
    },
    {
      title: 'Complete',
      content: renderOrderComplete(),
      icon: <CheckCircleOutlined />,
    },
  ];

  return (
    <div className={`payment-page ${darkMode ? 'dark' : ''}`}>
      <div className="payment-container">
        <div className="payment-header">
          <Title level={2}>Checkout</Title>
          <Steps current={currentStep} className="payment-steps">
            {steps.map(item => (
              <Step key={item.title} title={item.title} icon={item.icon} />
            ))}
          </Steps>
        </div>
        
        <div className="payment-content">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={16}>
              <div className="payment-step-content">
                {steps[currentStep].content}
              </div>
            </Col>
            <Col xs={24} lg={8}>
              {renderOrderSummary()}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Payment;