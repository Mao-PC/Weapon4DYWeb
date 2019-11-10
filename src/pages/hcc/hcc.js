/*
 * @Author: maopch
 * @PageInfo:  结果展示页面
 * @Date: 2019-10-27 11:34:00
 * @Last Modified by: maopch
 * @Last Modified time: 2019-11-09 22:24:06
 */

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class hcc extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="base" class="">
                <div id="u0" class="ax_default box_2">
                    <div id="u0_div" class=""></div>
                </div>

                <div id="u1" class="ax_default box_1">
                    <img id="u1_img" class="img " src="images/卫健委局登录/u1.png" />
                </div>

                <div id="u2" class="ax_default _图片">
                    <img id="u2_img" class="img " src="images/卫健委局登录/u2.png" />
                </div>

                <div id="u3" class="ax_default _一级标题">
                    <div id="u3_div" class=""></div>
                    <div id="u3_text" class="text ">
                        <p>
                            <span>京津冀医疗卫生协同发展信息动态分析系统</span>
                        </p>
                    </div>
                </div>

                <div id="u4" class="ax_default _文本段落">
                    <div id="u4_div" class=""></div>
                    <div id="u4_text" class="text ">
                        <p>
                            <span>
                                Copyright © 2019&nbsp; 版权所有：河北省卫生健康委员会&nbsp;&nbsp;
                                技术支持：河北慧日信息技术有限公司{' '}
                            </span>
                        </p>
                    </div>
                </div>

                <div id="u5" class="ax_default box_2">
                    <div id="u5_div" class=""></div>
                </div>

                <div id="u6" class="ax_default label">
                    <div id="u6_div" class=""></div>
                    <div id="u6_text" class="text ">
                        <p>
                            <span>登&nbsp; &nbsp; 录</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
