import React, { Component, Fragment } from 'react';
import LogInForm from './LogInForm';
import CreateForm from './CreateForm'; 
import logo from './Logo.png'; 

export default class AuthenticationPage extends Component {
    state = { 
        showLogIn: true
     }

     handleChange = () => {
         this.setState({showLogIn: !this.state.showLogIn});
     }

    render() { 
        const divStyle = {
            backgroundColor: 'black',
            height: '60px',
            width: '100%',
            color: 'white',
            paddingLeft: '15px',
            overflow: 'hidden'
        };

        const titleTextStyle = {
            color: 'white',
            marginLeft: '25px',
            float: 'left', 
            verticalAlign: 'middle',
            lineHeight: '60px',
            fontSize: '25px',
            fontFamily: 'Quicksand',
            textDecoration: 'none'
        }
        

        const imgStyle = {
            maxWidth: '100%',
            maxHeight: '100%',
            float: 'left'
        };

        return ( 
            <Fragment>
                <div style = {divStyle}>
                    <img src = {logo} alt = 'Logo' style = {imgStyle} />
                    <span style = {titleTextStyle}>MANY ROOMS</span>
                </div>
                {this.state.showLogIn ? <LogInForm onChangeType = {this.handleChange}/>
                    : <CreateForm onChangeType = {this.handleChange}/>}
            </Fragment>
        );
    }
}