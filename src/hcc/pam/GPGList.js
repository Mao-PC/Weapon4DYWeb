/* eslint-disable */
import React, { Component } from "react";
import {
  Form,
  DatePicker,
  Select,
  Input,
  Button,
  Table,
  Divider,
  Row,
  Col,
  Icon
} from "antd";

const { Option } = Select;
const { Item } = Form;
const { RangePicker } = DatePicker;

import "./index.css";

/**
 * 合作项目协议
 */
class CPGList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }

  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? "block" : "none" }}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </Form.Item>
        </Col>
      );
    }
    return children;
  }
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>
          <Col span={8}>
            <Item label="上报时间段">
              <RangePicker placeholder={["开始时间", "结束时间"]} />
            </Item>
          </Col>
          <Col span={8}>
            <Item label="合作机构所属地区">
              <Select className="seletItem">
                <Option value={0}>北京</Option>
                <Option value={1}>天津</Option>
              </Select>
            </Item>
          </Col>
          <Col span={8}>
            <Item label="所属行政部门">
              <Select className="seletItem">
                <Option value={0}>北京</Option>
                <Option value={1}>天津</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Item label="协议合作方式">
              <Select className="seletItem">
                <Option value={0}>北京</Option>
                <Option value={1}>天津</Option>
              </Select>
            </Item>
          </Col>
          <Col span={8}>
            <Item label="审核状态">
              <Select className="seletItem">
                <Option value={0}>北京</Option>
                <Option value={1}>天津</Option>
              </Select>
            </Item>
          </Col>
          <Col span={8}>
            <Item label="查询条件">
              <Select
                showSearch
                filterOption={(input, option) =>
                  option.props.children.indexOf(input) >= 0
                }
                onChange={() => console.log(`selected ${value}`)}
                optionFilterProp="children"
                className="seletItem"
              >
                <Option value={0}>北京</Option>
                <Option value={1}>天津</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right", paddingRight: 50 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedCPGList = Form.create({ name: "CPGList" })(CPGList);

export default WrappedCPGList;
