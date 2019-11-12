/* eslint-disable */
import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import "./Layout.css";

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.indexs = [
      "medical_institution_management",
      "project_agreement_management",
      "cooperation_project_agreement",
      "monthly_report",
      "statistical_analysis",
      "system_management",
      "organization",
      "role_permissions",
      "user_management",
      "data_dictionary",
      "operation_log",
      "change_Password"
    ];
    this.rootSubmenuKeys = ["0", "1", "5"];
    this.nodes = [];
    this.state = {
      openKeys: ["0"],
      cIndex: null,
      liStyle: {}
    };
  }

  onSelect = (k, item) => {
    let cSelectedKey = "0";
    if (k == "submenu") {
      const latestOpenKey = item.find(
        key => this.state.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys: item });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : []
        });
      }
      cSelectedKey = this.state.openKeys[0];
    } else if (k == "menuitem") {
      cSelectedKey = item.key;
    }
    cSelectedKey = cSelectedKey ? cSelectedKey : 0;
    console.log(cSelectedKey);
  };

  render() {
    const uls = [
      "医疗机构管理",
      "项目协议管理",
      "合作项目协议",
      "月报",
      "统计分析",
      "系统管理",
      "角色权限",
      "组织机构",
      "用户管理",
      "数据字典",
      "操作日志",
      "修改密码"
    ];
    this.nodes = uls.map((content, i) => {
      let classNames = "menu-item";
      if (![0, 1, 5].includes(i)) {
        classNames = "menu-item menu-item-sub";
      }
      return (
        <li
          className={
            this.state.cIndex === i ? classNames : classNames + " active"
          }
          key={i}
          onClick={() => {
            console.log(i);
            this.setState({
              cIndex: i
            });
          }}
        >
          {content}
        </li>
      );
    });
    return (
      <Layout style={{ height: "100%" }}>
        <Header style={{ backgroundColor: "#0099db", height: 80 }}>
          <div className="title">京津冀医疗卫生协同发展信息动态分析系统</div>
        </Header>
        <Content style={{ height: "100%" }}>
          <Layout style={{ height: "100%" }}>
            <Sider width={200}>
              <ul className="menu">{this.nodes}</ul>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}
