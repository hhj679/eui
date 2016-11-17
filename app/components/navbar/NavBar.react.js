/**
 * Created by Administrator on 2016/11/15.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Icon } from 'antd'

import './style.css';

const NavBar = React.createClass({
    render() {
        return (
            <Navbar inverse collapseOnSelect className="nav-bar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Icon type="bars" />
                        <a href="#">全新ROAD体验平台</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#"><Icon type="search" /></NavItem>
                        <NavDropdown eventKey={3} title={<div><Icon type="plus-circle-o" />创建</div>} id="nav-bar-create">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2} href="#"><Icon type="android" />人工智能</NavItem>
                        <NavDropdown eventKey={3} title={<div><img src="./images/avatar.jpg" className="nav-bar-avatar"/><div>zhangsan<Icon type="ellipsis" /></div></div>} id="nav-bar-avatar">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default NavBar;