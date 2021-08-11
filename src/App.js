import React from 'react';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import 'antd/dist/antd.css';
import './App.css';
import LoginForm from './components/LoginForm';
// import SiderDemo from './components/Dashboard';
import Header from './components/Header';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? (
        <Header></Header>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;
