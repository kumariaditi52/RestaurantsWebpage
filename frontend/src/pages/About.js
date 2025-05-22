    import React from 'react';
    import { Typography, Row, Col, Card, Divider, Avatar } from 'antd';
    import { useTheme } from '../context/ThemeContext';
    import './About.css';

    const { Title, Paragraph } = Typography;

    // Sample team members data
    const teamMembers = [
      {
        id: 1,
        name: 'John Smith',
        title: 'Executive Chef',
        bio: 'With over 15 years of culinary experience, Chef John brings his passion for innovative cuisine to our restaurant.',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      {
        id: 2,
        name: 'Maria Rodriguez',
        title: 'Pastry Chef',
        bio: 'Maria specializes in creating exquisite desserts that perfectly complement our menu offerings.',
        image: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        id: 3,
        name: 'David Chen',
        title: 'Sous Chef',
        bio: 'David\'s attention to detail and creativity help bring our culinary vision to life with each dish.',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 4,
        name: 'Sarah Johnson',
        title: 'Restaurant Manager',
        bio: 'Sarah ensures that every guest has an exceptional dining experience from the moment they arrive.',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
      }
    ];

    const About = () => {
      const { darkMode } = useTheme();
  
      return (
        <div className={`about-page ${darkMode ? 'dark' : ''}`}>
          <div className="about-header">
            <div className="about-header-overlay">
              <Title level={1} className="about-title">Our Story</Title>
              <Paragraph className="about-subtitle">
                Passion for food, commitment to excellence
              </Paragraph>
            </div>
          </div>
      
          <div className="about-content">
            <section className="about-story-section">
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <div className="about-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                      alt="Restaurant interior" 
                      className="about-image"
                    />
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <Title level={2}>Our Beginning</Title>
                  <Paragraph className="about-text">
                    Founded in 2010, our restaurant began with a simple vision: to create a dining experience that celebrates the art of fine cuisine while providing a warm, inviting atmosphere for our guests.
                  </Paragraph>
                  <Paragraph className="about-text">
                    What started as a small family-owned establishment has grown into a beloved culinary destination, known for our commitment to quality ingredients, innovative recipes, and exceptional service.
                  </Paragraph>
                  <Paragraph className="about-text">
                    Over the years, we've remained true to our founding principles while continuously evolving our menu to reflect seasonal offerings and culinary trends.
                  </Paragraph>
                </Col>
              </Row>
            </section>
        
            <Divider />
        
            <section className="about-philosophy-section">
              <Title level={2} className="section-title">Our Philosophy</Title>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card className="philosophy-card">
                    <Title level={3}>Quality Ingredients</Title>
                    <Paragraph>
                      We source the finest ingredients from local farmers and suppliers, ensuring freshness and supporting our community.
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className="philosophy-card">
                    <Title level={3}>Culinary Creativity</Title>
                    <Paragraph>
                      Our chefs blend traditional techniques with innovative approaches to create unique, memorable dishes.
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className="philosophy-card">
                    <Title level={3}>Exceptional Service</Title>
                    <Paragraph>
                      We believe dining is about more than just food—it's about creating an experience that delights all the senses.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </section>
        
            <Divider />
        
            <section className="about-team-section">
              <Title level={2} className="section-title">Meet Our Team</Title>
              <Paragraph className="section-description">
                Our talented team of culinary professionals is dedicated to providing you with an exceptional dining experience.
              </Paragraph>
          
              <Row gutter={[24, 24]}>
                {teamMembers.map(member => (
                  <Col xs={24} sm={12} md={6} key={member.id}>
                    <Card className="team-member-card">
                      <div className="team-member-avatar">
                        <Avatar src={member.image} size={120} />
                      </div>
                      <Title level={4} className="team-member-name">{member.name}</Title>
                      <p className="team-member-title">{member.title}</p>
                      <Paragraph className="team-member-bio">
                        {member.bio}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
        
            <Divider />
        
            <section className="about-values-section">
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <Title level={2}>Our Values</Title>
                  <Paragraph className="about-text">
                    At the heart of our restaurant is a commitment to excellence in every aspect of our operation. We believe in:
                  </Paragraph>
                  <ul className="values-list">
                    <li>Creating memorable dining experiences</li>
                    <li>Supporting sustainable and ethical food practices</li>
                    <li>Fostering a positive and inclusive environment</li>
                    <li>Continuously innovating while respecting culinary traditions</li>
                    <li>Building strong relationships with our community</li>
                  </ul>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="about-image-container">
                    <img 
                      src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                      alt="Chef preparing food" 
                      className="about-image"
                    />
                  </div>
                </Col>
              </Row>
            </section>
          </div>
        </div>
      );
    };

    export default About;
