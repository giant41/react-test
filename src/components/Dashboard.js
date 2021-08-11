import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import './Dashboard.css';
// import {useSelector} from 'react-redux';
// import { selectUser } from '../features/userSlice';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    InfoCircleOutlined,
    CommentOutlined,
    CoffeeOutlined,
    UserOutlined,
  } from '@ant-design/icons';

  

  const { Header, Sider, Content } = Layout;
  
    // const history = useHistory();

    const handleSiderMenuClick = action => {
      console.log('menu:', action);
      // switch (action.key) {
      //   case 'dashboard':
      //     history.push('/');
      //     break;
      //   case 'articles':
      //     history.push('/articles');
      //     break;
      //   case 'comments':
      //     history.push('/comments');
      //     break;
      //   default:
      //     history.push('/');
      // }
    };

    // const user = useSelector(selectUser);

  class SiderDemo extends React.Component {
    state = {
      collapsed: false,
    };
  
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    

    render() {
      return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <CoffeeOutlined className='logo'/>
              <h2>CopyPaste</h2>
            <Menu onClick={handleSiderMenuClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="articles" icon={<InfoCircleOutlined />}>
                Articles
              </Menu.Item>
              <Menu.Item key="comments" icon={<CommentOutlined />}>
                Comments
              </Menu.Item>
            </Menu>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>

              <Row>
                <Col span={18}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
                </Col>
                <Col justify="end" span={4}>
                  Hi 
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Col>
              </Row>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      );
    }
  }

export default SiderDemo;