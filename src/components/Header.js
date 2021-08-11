import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Logout  from "./Logout";
import { Menu, Layout } from 'antd';
import { 
  DashboardOutlined,
  InfoCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons';

import { getUsernameAvatar } from './UserAvatar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import pageRoutes from "../config/router";
import Home from "../pages/Home"
import Articles from "../pages/Articles"
import Comments from "../pages/Comments"

const { SubMenu } = Menu;
const { Footer } = Layout;

function Header() {
  const user = useSelector(selectUser);

  console.log(pageRoutes);

  return (
    <>
      <Menu selectedKeys={1} mode="horizontal">
        <Menu.Item key="home" icon={<DashboardOutlined />}>
          <Link to="./">Home</Link>
        </Menu.Item>
        <Menu.Item key="articles" icon={<InfoCircleOutlined />}>
          <Link to="./articles">Articles</Link>
        </Menu.Item>
        <Menu.Item key="comments" icon={<CommentOutlined />}>
          <Link to="./comments">Comments</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={getUsernameAvatar(user.name)}>
          <Logout></Logout>
        </SubMenu>
      </Menu>
      
      <Content>
        <Switch>
        {/* {pageRoutes.map((data, i) => {
          return(
            <Route path="{data.path}" exact>{data.component}</Route>
          );
        })} */}
          
          <Route path="/articles" component={ () => <Articles /> }></Route>
          <Route path="/comments" component={ () => <Comments /> }></Route>
          <Route path="/" component={ () => <Home /> } exact></Route>
        </Switch>
      </Content> 
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2021</Footer>
    </>
  );
}

export default Header