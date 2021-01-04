import React, { Component } from 'react';
import logo from './Logo.png'; 
import NavbarOption from './NavbarOption'
import { getUserID } from './UserInfo'; 

export default class Navbar extends Component {
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
                <NavbarOption value = 'PROFILE' id = {getUserID()} />
                <NavbarOption value = 'SETTINGS' id = ''/>
                <NavbarOption value = 'SUPPORT' id = ''/>
            </div>
        );
    }
}