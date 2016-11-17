/**
 * Created by Administrator on 2016/11/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

import './style.css';

const SideBar = React.createClass({
    getInitialState() {
        return {
            collapse: true
        };
    },
    onCollapseChange() {
        this.setState({
            collapse: !this.state.collapse
        });

    },
    render() {
        const collapse = this.state.collapse;
        return (
            <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
                        <Menu.Item key="user">
                            <Icon type="home"/><span className="nav-text">Home</span>
                        </Menu.Item>
                        <Menu.Item key="setting">
                            <Icon type="appstore-o" /><span className="nav-text">Precifical</span>
                        </Menu.Item>
                    </Menu>
                    <div className="ant-aside-action" onClick={this.onCollapseChange}>
                        <Icon type="plus-circle-o" />
                    </div>
                </aside>
            </div>
        );
    }
});

export default SideBar;