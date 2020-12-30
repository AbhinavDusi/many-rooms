import React, { Component } from 'react';
import logo from './Logo.png'; 
import NavbarOption from './NavbarOption'

export default class Navbar extends Component {
    getCurrentUserCookie = () => {
        return 1; 
    }

    render() { 
        const divStyle = {
            backgroundColor: 'black',
            height: '60px',
            width: '100%',
            color: 'white',
            paddingLeft: '15px',
            position: 'fixed',
            display: 'inline-block'
        };

        const imgStyle = {
            maxWidth: '100%',
            maxHeight: '100%',
            float: 'left'
        };

        return (
            <div style = {divStyle}>
                <img src = {logo} alt = 'Logo' style = {imgStyle} />
                <NavbarOption value = 'HOME' id = ''/> 
                <NavbarOption value = 'PROFILE' id = {this.getCurrentUserCookie()} />
                <NavbarOption value = 'SETTINGS' id = ''/>
                <NavbarOption value = 'SUPPORT' id = ''/>
            </div>
        );
    }
}