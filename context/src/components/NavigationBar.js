import React, { Component } from 'react';

import styled from 'styled-components';

import {
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

import ThemeContext from '../contexts/ThemeContext';



class NavigationBar extends Component {
    static contextType = ThemeContext;
    
    render() {
        console.log(this.context);
        const { isLightTheme, light, dark } = this.context;
        const theme =  isLightTheme ? light : dark;
    
        // const Styles = styled.div`
        //     #nav{
        //         background: ${theme.ui},
        //         color: ${theme.syntax}
        //     }
        // `;
        return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href = "#home" > React - Bootstrap </Navbar.Brand> 
            <Navbar.Toggle aria-controls = "basic-navbar-nav" />
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "mr-auto" >
                    <Nav.Link href = "/" > Home </Nav.Link>
                    <Nav.Link href = "/about" > About </Nav.Link>
                    <Nav.Link href = "/contact" > Contact </Nav.Link>  
                    <NavDropdown title = "Dropdown" id = "basic-nav-dropdown" >
                    <NavDropdown.Item href = "#action/3.1" > Action </NavDropdown.Item> 
                    <NavDropdown.Item href = "#action/3.2" > Another action </NavDropdown.Item> 
                    <NavDropdown.Item href = "#action/3.3" > Something </NavDropdown.Item> 
                    <NavDropdown.Divider />
                    <NavDropdown.Item href = "#action/3.4" > Separated link </NavDropdown.Item> 
                    </NavDropdown> 
                </Nav> 
                <Form inline >
                <FormControl type = "text" placeholder = "Search" className = "mr-sm-2" />
                <Button variant = "outline-success" > Search </Button> 
                </Form> 
            </Navbar.Collapse> 
        </Navbar>
        );
    }
}

export default NavigationBar;