

import React from 'react';
import { Typography, Row, Col, Card, Avatar, Divider, Button } from 'antd';
import { 
  EnvironmentOutlined, 
  PhoneOutlined, 
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined
} from '@ant-design/icons';
import { useTheme } from '../context/ThemeContext';

const { Title, Paragraph, Text } = Typography;

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Executive Chef',
    bio: 'With over 15 years of experience in fine dining, Chef John brings creativity and passion to every dish.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Pastry Chef',
    bio: 'Specializing in French pastries, Maria creates desserts that are both visually stunning and delicious.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Restaurant Manager',
    bio: 'David ensures that every guest has an exceptional dining experience from the moment they walk in.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    social: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    }
  }
];

const About = () => {
  const { darkMode, theme } = useTheme();
  
  const renderTeamMember = (member) => {
    return (
      <Col xs={24} sm={12} md={8} key={member.id}>
        <Card 
          className={`team-card ${darkMode ? 'bg-gray-700 text-white' : ''}`}
          bodyStyle={darkMode ? { color: 'white' } : {}}
          hoverable
        >
          <div className="text-center mb-4">
            <Avatar 
              src={member.image} 
              size={120} 
              className="mb-4"
            />
            <Title level={4} className={darkMode ? 'text-white m-0' : 'm-0'}>
              {member.name}
            </Title>
            <Text className={darkMode ? 'text-blue-400' : 'text-blue-600'} strong>
              {member.role}
            </Text>
          </div>
          
          <Paragraph className={darkMode ? 'text-gray-300 text-center' : 'text-center'}>
            {member.bio}
          </Paragraph>
          
          <div className="social-links text-center mt-4">
            <Button 
              type="link" 
              icon={<FacebookOutlined />} 
              href={member.social.facebook}
              className={darkMode ? 'text-gray-300 hover:text-blue-400' : ''}
            />
            <Button 
              type="link" 
              icon={<InstagramOutlined />} 
              href={member.social.instagram}
              className={darkMode ? 'text-gray-300 hover:text-blue-400' : ''}
            />
            <Button 
              type="link" 
              icon={<TwitterOutlined />} 
              href={member.social.twitter}
              className={darkMode ? 'text-gray-300 hover:text-blue-400' : ''}
            />
          </div>
        </Card>
      </Col>
    );
  };
  
  return (
    <div 
      className={`about-container ${darkMode ? 'dark' : ''}`}
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.text
      }}
    >
      <div className="text-center mb-8">
        <Title level={1} className={darkMode ? 'text-white' : ''}>About Us</Title>
        <Paragraph className={`mx-auto ${darkMode ? 'text-gray-300' : ''}`} style={{ maxWidth: '800px' }}>
          Welcome to our restaurant, where culinary excellence meets warm hospitality.
        </Paragraph>
      </div>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className="about-image" style={{ height: '400px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
              alt="Restaurant interior" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </Col>
        
        <Col xs={24} md={12}>
          <Card 
            className={`h-full ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            bodyStyle={darkMode ? { color: 'white' } : {}}
          >
            <Title level={2} className={darkMode ? 'text-white' : ''}>Our Story</Title>
            <Paragraph className={darkMode ? 'text-gray-300' : ''}>
              Founded in 2010, our restaurant began with a simple vision: to create a place where people could enjoy exceptional food in a welcoming atmosphere.
            </Paragraph>
            <Paragraph className={darkMode ? 'text-gray-300' : ''}>
              Over the years, we've grown and evolved, but our commitment to quality ingredients, expert preparation, and friendly service has never wavered.
            </Paragraph>
            <Paragraph className={darkMode ? 'text-gray-300' : ''}>
              Today, we're proud to be a beloved part of the community, serving both locals and visitors with dishes that combine traditional techniques and innovative flavors.
            </Paragraph>
          </Card>
        </Col>
      </Row>
      
      <Divider orientation="center" className={darkMode ? 'text-white border-gray-700 my-12' : 'my-12'}>
        <Title level={2} className={darkMode ? 'text-white m-0' : 'm-0'}>Our Philosophy</Title>
      </Divider>
      
      <Row gutter={[24, 24]} className="mb-12">
        <Col xs={24} md={8}>
          <Card 
            className={`h-full ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            bodyStyle={darkMode ? { color: 'white' } : {}}
          >
            <div className="text-center">
              <Title level={3} className={darkMode ? 'text-white' : ''}>Quality Ingredients</Title>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                We source the freshest, highest-quality ingredients from local farmers and suppliers whenever possible.
              </Paragraph>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} md={8}>
          <Card 
            className={`h-full ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            bodyStyle={darkMode ? { color: 'white' } : {}}
          >
            <div className="text-center">
              <Title level={3} className={darkMode ? 'text-white' : ''}>Culinary Expertise</Title>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                Our team of skilled chefs combines traditional techniques with innovative approaches to create memorable dishes.
              </Paragraph>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} md={8}>
          <Card 
            className={`h-full ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            bodyStyle={darkMode ? { color: 'white' } : {}}
          >
            <div className="text-center">
              <Title level={3} className={darkMode ? 'text-white' : ''}>Warm Hospitality</Title>
              <Paragraph className={darkMode ? 'text-gray-300' : ''}>
                We believe that great food should be accompanied by genuine, attentive service in a welcoming environment.
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Divider orientation="center" className={darkMode ? 'text-white border-gray-700 my-12' : 'my-12'}>
        <Title level={2} className={darkMode ? 'text-white m-0' : 'm-0'}>Meet Our Team</Title>
      </Divider>
      
      <Row gutter={[24, 24]} className="mb-12">
        {teamMembers.map(member => renderTeamMember(member))}
      </Row>
      
      <Card 
        className={`contact-section ${darkMode ? 'bg-gray-700 text-white' : ''}`}
        bodyStyle={darkMode ? { color: 'white' } : {}}
      >
        <Row gutter={24} align="middle">
          <Col xs={24} md={16}>
            <Title level={3} className={darkMode ? 'text-white' : ''}>Visit Us Today</Title>
            <Paragraph className={darkMode ? 'text-gray-300 mb-4' : 'mb-4'}>
              We'd love to welcome you to our restaurant. Come experience our delicious food and warm hospitality.
            </Paragraph>
            
            <div className="contact-info">
              <div className="mb-2 flex items-center">
                <EnvironmentOutlined className="mr-2" style={{ color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                <Text className={darkMode ? 'text-gray-300' : ''}>
                  123 Gourmet Street, Foodville, CA 90210
                </Text>
              </div>
              
              <div className="mb-2 flex items-center">
                <PhoneOutlined className="mr-2" style={{ color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                <Text className={darkMode ? 'text-gray-300' : ''}>
                  +1 (555) 123-4567
                </Text>
              </div>
              
              <div className="flex items-center">
                <MailOutlined className="mr-2" style={{ color: darkMode ? '#60A5FA' : '#3B82F6' }} />
                <Text className={darkMode ? 'text-gray-300' : ''}>
                  info@restaurant.com
                </Text>
              </div>
            </div>
          </Col>
          
          <Col xs={24} md={8} className="text-center mt-4 md:mt-0">
            <Button type="primary" size="large">
              Make a Reservation
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default About;
