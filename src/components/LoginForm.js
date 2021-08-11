import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice";
import { Card, Form, Input, Button } from 'antd';

const LoginForm = () => {
    const adminUser = {
        email : "admin@admin.com",
        password : "123456"
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const onFinish = (values) => {
        if(values.email === adminUser.email && values.password === adminUser.password) {
            dispatch(login({
                name:values.name,
                email:values.email,
                password:values.password,
                loggedIn: true
            }));
        }
    };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

    return (
            <Card
                className="card-login"
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
            >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input your email address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>   
        </Card>       
    );
};

export default LoginForm
