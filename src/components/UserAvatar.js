import React from 'react';
import { Avatar } from 'antd';
import { 
    UserOutlined,
} from '@ant-design/icons';

function getColor(username) {
    const colors = [
        '#ffa38a',
        '#a9a7e0',
        '#D686D4',
        '#96CE56',
        '#4A90E2',
        '#62b3d0',
        '#ef7676',
    ];
    const firstChar = username.charCodeAt(0);
    const secondChar = username.charCodeAt(1);
    const thirdChar = username.charCodeAt(2);
    return colors[(firstChar + secondChar + thirdChar) % 7];
}

export const getUsernameAvatar = (username, size = 'large') => {
  return (
      <span>
        <Avatar style={{ backgroundColor: getColor(username) }} icon={<UserOutlined />} /> {username}
      </span>
  );
};