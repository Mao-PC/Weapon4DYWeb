/*
 * @Author: maopch
 * @PageInfo:  工具页面
 * @Date: 2019-10-27 11:34:00
 * @Last Modified by: maopch
 * @Last Modified time: 2019-10-27 14:31:27
 */

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { menuItemSelected } from './Tools_func';
import { onOpenChange } from '../comm';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class Tools extends Component {
    constructor(props) {
        super(props);

        this.defaultItemSelected = 1;
        this.allItemKeys = ['sub1', 'sub2', 'sub3'];

        this.state = {
            // 默认选中的 menu
            itemSelected: this.defaultItemSelected,
            // 打开的 menu
            openKeys: ['sub1']
        };
    }

    render() {
        const { itemSelected, openKeys } = this.state;

        let content = null;

        if (itemSelected === 1) {
            content = <div style={{ height: '90%', backgroundColor: 'red' }}></div>;
        } else if (itemSelected === 2) {
            content = <div style={{ height: '90%', backgroundColor: 'blue' }}></div>;
        } else if (itemSelected === 3) {
            content = <div style={{ height: '90%', backgroundColor: 'white' }}></div>;
        } else if (itemSelected === 4) {
            content = <div style={{ height: '90%', backgroundColor: 'green' }}></div>;
        }

        return (
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            openKeys={openKeys}
                            onOpenChange={key => onOpenChange.call(this, key)}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        数据录入
                                    </span>
                                }
                            >
                                <Menu.Item key="1" onClick={menuItemSelected.bind(this, 1)}>
                                    教师数据录入
                                </Menu.Item>
                                <Menu.Item key="2" onClick={menuItemSelected.bind(this, 2)}>
                                    学生数据录入
                                </Menu.Item>
                                <Menu.Item key="3" onClick={menuItemSelected.bind(this, 3)}>
                                    成绩数据录入
                                </Menu.Item>
                                <Menu.Item key="4" onClick={menuItemSelected.bind(this, 4)}>
                                    考试数据录入
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop" />
                                        subnav 2
                                    </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="notification" />
                                        subnav 3
                                    </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px' }}>{content}</Content>
                </Layout>
            </Content>
        );
    }
}
