import React, { useState } from 'react'
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { Redirect } from 'react-router';
import { login } from '../../store/actions'
import './index.less';

const Login = (props) => {
    const { token, login } = props;
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = (values) => {
        setLoading(true);
        const {username, password} = values;
        login(username, password)
            .then(data => {
                message.success("登录成功");
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }

    if (token) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <DocumentTitle title={"登录"}>
            <div className="login-container">
                <Form className="content" name="login" onFinish={handleSubmit}>
                    <h3 className="title">用户登录</h3>
                    <Spin spinning={ loading } tip="登录中">
                        <Form.Item name="username" 
                            rules={[
                                {
                                    required: true,
                                    message: "请输入用户名"
                                }
                            ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Spin>
                </Form>
            </div>
        </DocumentTitle>
    );
}

export default connect(state => state.user, { login })(Login)
