import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Card, 
  Button, 
  InputNumber, 
  Row, 
  Col, 
  Divider, 
  notification, 
  Space,
  Modal,
  Form,
  Input
} from 'antd';
import { 
  PlusOutlined, 
  MinusOutlined, 
  ShoppingCartOutlined, 
  EditOutlined, 
  DeleteOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import './FoodDetail.css';

import { useTheme } from '../context/ThemeContext';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const FoodDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [form] = Form.useForm();
  
  // Get food data from location state
  const { food, quantity: initialQuantity } = location.state || { 
    food: null, 
    quantity: 1 
  };
  
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedFood, setEditedFood] = useState(food);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  
  // If no food data is available, redirect to menu
  if (!food) {
    navigate('/menu');
    return null;
  }
  
  const handleQuantityChange = (value) => {
    setQuantity(value);
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    // Here you would typically add the item to a cart state or context
    notification.success({
      message: 'Added to Cart',
      description: `${quantity} x ${food.name} added to your cart.`,
      placement: 'topRight',
    });
  };
  
  const showEditModal = () => {
    form.setFieldsValue({
      name: editedFood.name,
      description: editedFood.description,
      price: editedFood.price,
    });
    setIsEditModalVisible(true);
  };
  
  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };
  
  const handleEditSubmit = (values) => {
    const updatedFood = {
      ...editedFood,
      ...values,
    };
    setEditedFood(updatedFood);
    setIsEditModalVisible(false);
    
    notification.success({
      message: 'Food Updated',
      description: `${updatedFood.name} has been updated successfully.`,
      placement: 'topRight',
    });
  };
  
  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
  };
  
  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false);
  };
  
  const handleDeleteConfirm = () => {
    setIsDeleteModalVisible(false);
    
    notification.success({
      message: 'Food Deleted',
      description: `${food.name} has been removed from the menu.`,
      placement: 'topRight',
    });
    
    // Navigate back to menu after deletion
    setTimeout(() => {
      navigate('/menu');
    }, 1500);
  };
  
  const totalPrice = (editedFood.price * quantity).toFixed(2);
  
  return (
    <div className={`food-detail-container ${darkMode ? 'dark' : ''}`} style={{ padding: '2rem' }}>
      <Button 
        type="default" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(-1)}
        style={{ marginBottom: '1rem' }}
      >
        Back to Menu
      </Button>
      
      <Card className={`food-detail-card ${darkMode ? 'dark' : ''}`}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <img 
              src={editedFood.image} 
              alt={editedFood.name} 
              style={{ 
                width: '100%', 
                height: '400px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }} 
            />
          </Col>
          
          <Col xs={24} md={12}>
            <Title level={2}>{editedFood.name}</Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '1.5rem' }}>
              {editedFood.description}
            </Paragraph>
            
            <Title level={3} style={{ color: '#f56a00' }}>${editedFood.price.toFixed(2)}</Title>
            
            <Divider />
            
            <div style={{ marginBottom: '1.5rem' }}>
              <Title level={4}>Quantity</Title>
              <Space>
                <Button 
                  icon={<MinusOutlined />} 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                />
                <InputNumber 
                  min={1} 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  style={{ width: '60px' }}
                />
                <Button 
                  icon={<PlusOutlined />} 
                  onClick={incrementQuantity}
                />
              </Space>
            </div>
            
            <Title level={4}>Total: ${totalPrice}</Title>
            
            <div style={{ marginTop: '2rem' }}>
              <Space size="middle">
                <Button 
                  type="primary" 
                  size="large" 
                  icon={<ShoppingCartOutlined />}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button 
                  type="default" 
                  icon={<EditOutlined />}
                  onClick={showEditModal}
                >
                  Edit
                </Button>
                <Button 
                  danger 
                  icon={<DeleteOutlined />}
                  onClick={showDeleteModal}
                >
                  Delete
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>
      
      {/* Edit Modal */}
      <Modal
        title="Edit Food Item"
        open={isEditModalVisible}
        onCancel={handleEditCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleEditSubmit}
          initialValues={{
            name: editedFood.name,
            description: editedFood.description,
            price: editedFood.price,
          }}
        >
          <Form.Item
            name="name"
            label="Food Name"
            rules={[{ required: true, message: 'Please enter the food name' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <InputNumber
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              style={{ width: '100%' }}
              min={0}
              step={0.01}
            />
          </Form.Item>
          
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
              <Button onClick={handleEditCancel}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
      
      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Food Item"
        open={isDeleteModalVisible}
        onCancel={handleDeleteCancel}
        footer={[
          <Button key="cancel" onClick={handleDeleteCancel}>
            Cancel
          </Button>,
          <Button key="delete" danger type="primary" onClick={handleDeleteConfirm}>
            Delete
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete {editedFood.name}? This action cannot be undone.</p>
      </Modal>
    </div>
  );
};

export default FoodDetail;