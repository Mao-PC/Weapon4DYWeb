import React, { Component } from "react";
import { Table, Divider, Modal, Button } from "antd";
import RpSave from './RpSave'

import "./sm-index.css";

import { tableData } from './data'
const { confirm } = Modal;

export default class OrgList extends Component {
    constructor(props) {
        super(props)
        this.columns = [
            {
                title: "角色名称",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "操作",
                dataIndex: "opt",
                key: "opt",
                render: () => <span>
                    <a onClick={() => this.setState({ pageType: "edit" })}>
                        编辑
                </a>
                    <Divider type="vertical" />
                    <a onClick={
                        () => confirm({
                            title: '确定要删除该角色吗吗 ?',
                            // content: 'Some descriptions',
                            okText: '确认',
                            okType: 'danger',
                            cancelText: '取消',
                            onOk() {
                                console.log('OK');
                            },
                            onCancel() {
                                console.log('Cancel');
                            },
                        })
                    } >删除</a>
                </span>
            },
        ]
        this.state = {
            pageType: 'list',
            userData: []
        }
    }

    componentDidMount() {
        this.setState({
            tableData: this.getAllRole()
        })
    }

    getAllRole = () => {
        return tableData
    }

    backList = () => this.setState({ pageType: 'list' })


    render() {
        const { pageType } = this.state
        if (pageType === 'list') {
            const { tableData } = this.state
            return (
                <div >
                    <h1 style={{ marginTop: 10 }}>
                        <strong>角色权限管理</strong>
                    </h1>

                    <Button
                        type="primary"
                        onClick={() => this.setState({ pageType: 'add' })}
                    >添加</Button>

                    <Table style={{ paddingTop: 20, width: 600 }}
                        columns={this.columns}
                        dataSource={tableData} />
                </div>)
        } else {
            return <RpSave pageType={pageType} backList={this.backList.bind(this)} />
        }
    }
}