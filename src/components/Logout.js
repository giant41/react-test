import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { Menu } from 'antd';

function Logout() {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(logout());
    }
    
    return (
      <>
        <Menu>
            <Menu.Item key="logout"  className="" onClick={(e) => handleLogout(e)}>
              Logout
            </Menu.Item>
        </Menu>
      </>
    );
}

export default Logout