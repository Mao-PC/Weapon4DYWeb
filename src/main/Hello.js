import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import { menuItemClick } from './Hello_func';
import { News, Shows, Tools } from '../pages';

import './Hello.css';

const { Header, Footer } = Layout;

// 默认选中的key
const defaultSelectedKeys = 3;

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 选中的 item
            menuItemKey: defaultSelectedKeys
        };
    }

    render() {
        const { menuItemKey } = this.state;
        let content = null;
        if (menuItemKey === 1) {
            content = <News />;
        } else if (menuItemKey === 2) {
            content = <Shows />;
        } else if (menuItemKey === 3) {
            content = <Tools />;
        }
        return (
            <Layout>
                <Header className="header">
                    <img className="logo" src="logo.png" alt="logo" />
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={[defaultSelectedKeys + '']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1" onClick={menuItemClick.bind(this, 1)}>
                            News
                        </Menu.Item>
                        <Menu.Item key="2" onClick={menuItemClick.bind(this, 2)}>
                            汇总结果
                        </Menu.Item>
                        <Menu.Item key="3" onClick={menuItemClick.bind(this, 3)}>
                            实用工具
                        </Menu.Item>
                    </Menu>
                </Header>
                {content}
                <Footer style={{ textAlign: 'center' }}>
                    GitHub 请访问
                    <a href="https://github.com/Mao-PC/Weapon4DYWeb"> https://github.com/Mao-PC/Weapon4DYWeb</a>
                </Footer>
            </Layout>
        );
    }
}
