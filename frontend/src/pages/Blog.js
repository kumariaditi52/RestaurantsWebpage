      import React from 'react';
      import { Typography, Card, Row, Col, Tag, Avatar, Button, Divider, Input } from 'antd';
      import { 
        ClockCircleOutlined, 
        UserOutlined, 
        TagOutlined, 
        EyeOutlined,
        LikeOutlined,
        MessageOutlined,
        RightOutlined,
        SearchOutlined,
        CalendarOutlined
      } from '@ant-design/icons';
      import { Link } from 'react-router-dom';
      import { useTheme } from '../context/ThemeContext';
      import './Blog.css';

      const { Title, Paragraph, Text } = Typography;
      const { Meta } = Card;
      const { Search } = Input;

      // Sample blog data
      const blogPosts = [
        {
          id: 1,
          title: 'The Art of Perfect Pasta',
          excerpt: 'Learn the secrets to cooking pasta like a true Italian chef, from choosing the right shapes to creating the perfect sauce pairings.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          author: 'Chef Marco',
          authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          date: 'May 15, 2023',
          readTime: '5 min read',
          tags: ['Italian', 'Cooking Tips', 'Pasta'],
          views: 1245,
          likes: 89,
          comments: 23,
          featured: true,
          category: 'Cooking Tips'
        },
        {
          id: 2,
          title: 'Seasonal Ingredients: Summer Edition',
          excerpt: 'Discover the best summer ingredients and how to incorporate them into your cooking for fresh, vibrant dishes.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1467453678174-768ec283a940?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1444&q=80',
          author: 'Emma Wilson',
          authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          date: 'June 3, 2023',
          readTime: '7 min read',
          tags: ['Seasonal', 'Ingredients', 'Summer'],
          views: 982,
          likes: 76,
          comments: 15,
          featured: false,
          category: 'Ingredients'
        },
        {
          id: 3,
          title: 'Wine Pairing Fundamentals',
          excerpt: 'Master the basics of wine pairing to enhance your dining experience and impress your guests at your next dinner party.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          author: 'Sophia Martinez',
          authorAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          date: 'April 22, 2023',
          readTime: '6 min read',
          tags: ['Wine', 'Pairing', 'Dining'],
          views: 1567,
          likes: 124,
          comments: 31,
          featured: false,
          category: 'Beverages'
        },
        {
          id: 4,
          title: 'The Secret to Perfect Sourdough Bread',
          excerpt: 'Unlock the mysteries of sourdough bread baking with these expert tips and techniques for a perfect loaf every time.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1585478259715-1c093a7b70d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          author: 'David Johnson',
          authorAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          date: 'March 10, 2023',
          readTime: '8 min read',
          tags: ['Baking', 'Bread', 'Sourdough'],
          views: 2103,
          likes: 156,
          comments: 42,
          featured: false,
          category: 'Baking'
        },
        {
          id: 5,
          title: 'Plant-Based Protein Sources for Vegetarians',
          excerpt: 'Explore a variety of delicious and nutritious plant-based protein sources to incorporate into your vegetarian diet.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          author: 'Lisa Chen',
          authorAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
          date: 'February 18, 2023',
          readTime: '6 min read',
          tags: ['Vegetarian', 'Protein', 'Nutrition'],
          views: 1876,
          likes: 132,
          comments: 28,
          featured: false,
          category: 'Nutrition'
        },
        {
          id: 6,
          title: 'Essential Kitchen Tools Every Home Chef Needs',
          excerpt: 'Discover the must-have kitchen tools and equipment that will elevate your cooking game and make meal preparation easier.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
          image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          author: 'Michael Brown',
          authorAvatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          date: 'January 5, 2023',
          readTime: '5 min read',
          tags: ['Kitchen Tools', 'Equipment', 'Cooking'],
          views: 1543,
          likes: 98,
          comments: 19,
          featured: false,
          category: 'Equipment'
        }
      ];

      // Blog categories
      const categories = [
        'All Categories',
        'Cooking Tips',
        'Ingredients',
        'Beverages',
        'Baking',
        'Nutrition',
        'Equipment',
        'Recipes'
      ];

      // Popular tags
      const popularTags = [
        'Italian',
        'Pasta',
        'Baking',
        'Vegetarian',
        'Summer',
        'Wine',
        'Desserts',
        'Breakfast',
        'Healthy',
        'Quick Meals'
      ];

      const Blog = () => {
        const { darkMode, theme } = useTheme();
        const [activeCategory, setActiveCategory] = React.useState('All Categories');
  
        const filteredPosts = activeCategory === 'All Categories' 
          ? blogPosts 
          : blogPosts.filter(post => post.category === activeCategory);
  
        const featuredPost = blogPosts.find(post => post.featured);
  
        const handleSearch = (value) => {
          console.log('Searching for:', value);
          // In a real app, you would implement search functionality here
        };
  
        const renderFeaturedPost = () => {
          if (!featuredPost) return null;
    
          return (
            <div className="featured-post-container">
              <Card 
                className={`featured-post ${darkMode ? 'dark' : ''}`}
                cover={
                  <div className="featured-image-container">
                    <img 
                      alt={featuredPost.title} 
                      src={featuredPost.image} 
                      className="featured-image"
                    />
                    <div className="featured-overlay">
                      <span className="featured-badge">Featured</span>
                    </div>
                  </div>
                }
                bordered={false}
              >
                <div className="post-meta">
                  <Avatar src={featuredPost.authorAvatar} className="author-avatar" />
                  <Text className="author-name">
                    {featuredPost.author}
                  </Text>
                  <div className="meta-divider"></div>
                  <CalendarOutlined className="meta-icon" />
                  <Text className="meta-text">
                    {featuredPost.date}
                  </Text>
                  <div className="meta-divider"></div>
                  <ClockCircleOutlined className="meta-icon" />
                  <Text className="meta-text">
                    {featuredPost.readTime}
                  </Text>
                </div>
          
                <Title level={2} className="featured-title">
                  {featuredPost.title}
                </Title>
          
                <Paragraph className="featured-excerpt">
                  {featuredPost.excerpt}
                </Paragraph>
          
                <div className="post-tags">
                  {featuredPost.tags.map(tag => (
                    <Tag key={tag} className="post-tag">
                      {tag}
                    </Tag>
                  ))}
                </div>
          
                <div className="post-stats">
                  <div className="stat-item">
                    <EyeOutlined className="stat-icon" />
                    <Text className="stat-text">
                      {featuredPost.views}
                    </Text>
                  </div>
                  <div className="stat-item">
                    <LikeOutlined className="stat-icon" />
                    <Text className="stat-text">
                      {featuredPost.likes}
                    </Text>
                  </div>
                  <div className="stat-item">
                    <MessageOutlined className="stat-icon" />
                    <Text className="stat-text">
                      {featuredPost.comments}
                    </Text>
                  </div>
                </div>
          
                <Button type="primary" size="large" className="read-more-button">
                  Read Full Article <RightOutlined />
                </Button>
              </Card>
            </div>
          );
        };
  
        const renderBlogPost = (post) => {
          return (
            <Col xs={24} md={12} lg={8} key={post.id} className="blog-post-col">
              <Card 
                hoverable
                className={`blog-post-card ${darkMode ? 'dark' : ''}`}
                cover={
                  <div className="post-image-container">
                    <img 
                      alt={post.title} 
                      src={post.image} 
                      className="post-image"
                    />
                    <div className="category-badge">{post.category}</div>
                  </div>
                }
                bordered={false}
              >
                <div className="post-meta">
                  <Avatar src={post.authorAvatar} size="small" className="author-avatar-small" />
                  <Text className="author-name-small">
                    {post.author}
                  </Text>
                  <div className="meta-divider"></div>
                  <ClockCircleOutlined className="meta-icon-small" />
                  <Text className="meta-text-small">
                    {post.readTime}
                  </Text>
                </div>
          
                <Title level={4} className="post-title">
                  <Link to={`/blog/${post.id}`} className="post-title-link">
                    {post.title}
                  </Link>
                </Title>
          
                <Paragraph className="post-excerpt" ellipsis={{ rows: 3 }}>
                  {post.excerpt}
                </Paragraph>
          
                <div className="post-tags-small">
                  {post.tags.slice(0, 2).map(tag => (
                    <Tag key={tag} className="post-tag-small">
                      {tag}
                    </Tag>
                  ))}
                  {post.tags.length > 2 && (
                    <Tag className="post-tag-more">
                      +{post.tags.length - 2}
                    </Tag>
                  )}
                </div>
          
                <div className="post-footer">
                  <div className="post-stats-small">
                    <div className="stat-item-small">
                      <EyeOutlined className="stat-icon-small" />
                      <Text className="stat-text-small">
                        {post.views}
                      </Text>
                    </div>
                    <div className="stat-item-small">
                      <LikeOutlined className="stat-icon-small" />
                      <Text className="stat-text-small">
                        {post.likes}
                      </Text>
                    </div>
                    <div className="stat-item-small">
                      <MessageOutlined className="stat-icon-small" />
                      <Text className="stat-text-small">
                        {post.comments}
                      </Text>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more-link">
                    Read More
                  </Link>
                </div>
              </Card>
            </Col>
          );
        };
  
        const renderSidebar = () => {
          return (
            <div className={`blog-sidebar ${darkMode ? 'dark' : ''}`}>
              <div className="sidebar-section">
                <Title level={4} className="sidebar-title">Search</Title>
                <Search
                  placeholder="Search articles..."
                  onSearch={handleSearch}
                  className="sidebar-search"
                  size="large"
                />
              </div>
        
              <div className="sidebar-section">
                <Title level={4} className="sidebar-title">Categories</Title>
                <div className="category-list">
                  {categories.map(category => (
                    <div 
                      key={category} 
                      className={`category-item ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                      <span className="category-count">
                        {category === 'All Categories' 
                          ? blogPosts.length 
                          : blogPosts.filter(post => post.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
        
              <div className="sidebar-section">
                <Title level={4} className="sidebar-title">Popular Tags</Title>
                <div className="tag-cloud">
                  {popularTags.map(tag => (
                    <Tag key={tag} className="cloud-tag">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
        
              <div className="sidebar-section">
                <Title level={4} className="sidebar-title">Recent Posts</Title>
                <div className="recent-posts">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="recent-post-item">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="recent-post-image" 
                      />
                      <div className="recent-post-content">
                        <Link to={`/blog/${post.id}`} className="recent-post-title">
                          {post.title}
                        </Link>
                        <div className="recent-post-date">
                          <CalendarOutlined className="recent-post-icon" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        
              <div className="sidebar-section">
                <div className="newsletter-box">
                  <Title level={4} className="newsletter-title">Subscribe to Our Newsletter</Title>
                  <Paragraph className="newsletter-description">
                    Get the latest articles and recipes delivered straight to your inbox.
                  </Paragraph>
                  <Input 
                    placeholder="Your email address" 
                    className="newsletter-input" 
                    size="large"
                  />
                  <Button type="primary" block size="large" className="newsletter-button">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          );
        };
  
        return (
          <div className={`blog-container ${darkMode ? 'dark' : ''}`}>
            {/* Hero Section */}
            <section className="blog-hero-section">
              <div className="blog-hero-content fade-in">
                <Title level={1} className="blog-hero-title">Our Culinary Blog</Title>
                <Paragraph className="blog-hero-subtitle">
                  Discover recipes, cooking tips, and food stories from our kitchen to yours
                </Paragraph>
              </div>
            </section>
            
            {/* Main Content */}
            <section className="blog-content-section">
              <div className="container">
                {/* Featured Post */}
                {renderFeaturedPost()}
                
                {/* Category Navigation */}
                <div className="category-nav">
                  <div className="category-scroll">
                    {categories.map(category => (
                      <Button 
                        key={category}
                        type={activeCategory === category ? 'primary' : 'default'}
                        className={`category-button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Blog Posts Grid with Sidebar */}
                <Row gutter={[24, 24]} className="blog-grid">
                  <Col xs={24} lg={18}>
                    <Row gutter={[24, 24]}>
                      {filteredPosts.filter(post => !post.featured).map(post => renderBlogPost(post))}
                    </Row>
                    
                    {/* Pagination */}
                    <div className="pagination-container">
                      <Button type="default" className="load-more-button">
                        Load More Articles
                      </Button>
                    </div>
                  </Col>
                  
                  <Col xs={24} lg={6}>
                    {renderSidebar()}
                  </Col>
                </Row>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className={`blog-cta-section ${darkMode ? 'dark' : ''}`}>
              <div className="container">
                <Title level={2} className="cta-title fade-in">Share Your Culinary Journey</Title>
                <Paragraph className="cta-description fade-in">
                  Have a recipe or cooking tip to share? We'd love to feature your content on our blog.
                </Paragraph>
                <Button type="primary" size="large" className="cta-button fade-in">
                  Submit Your Story
                </Button>
              </div>
            </section>
          </div>
        );
      };

      export default Blog;
