import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import Hello from './layout';

import './Login.css';

class LoginPage extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#0099db' }}>
                <div class="title">
                    <div class="text ">
                        <p>
                            <span>京津冀医疗卫生协同发展信息动态分析系统</span>
                        </p>
                    </div>
                </div>
                <div className="form-div">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(<Checkbox>记住密码</Checkbox>)}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Router>
                                <Link to="./layout" type="primary" className="login-form-button">
                                    <Button>房间诶欧迪芬</Button>
                                </Link>
                                <Route to="./layout" component={Hello} type="primary" className="login-form-button">
                                    <Button>附件二端口</Button>
                                </Route>
                            </Router>
                        </Form.Item>
                    </Form>
                </div>

                <div class="copyright">
                    <p>
                        <span>
                            Copyright © 2019&nbsp; 版权所有：河北省卫生健康委员会&nbsp;&nbsp;
                            技术支持：河北慧日信息技术有限公司
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(LoginPage);

export default Login;
