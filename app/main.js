import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './style.css';

import SideBar from './components/sidebar/SideBar.react';
import NavBar from './components/navbar/NavBar.react'
main();

function main() {
    //ReactDOM.render(<Row className="main-height">
    //    <Col span={2} className="main-height">
    //        <SideBar></SideBar>
    //    </Col>
    //    <Col span={22} style={{heigth:'100%'}}>
    //        <NavBar></NavBar>
    //    </Col>
    //</Row>, document.getElementById('app'));

    ReactDOM.render(<Row className="main-height">
        <Col span={1} className="main-height main-left">
            <SideBar></SideBar>
        </Col>
        <Col span={23} className="main-right">
            <NavBar></NavBar>
            <div id="app-main"></div>
        </Col>
    </Row>, document.getElementById('app'));
}