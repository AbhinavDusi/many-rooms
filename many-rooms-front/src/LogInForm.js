import React, { Component } from 'react';
import { buttonStyle, infoText, secondaryHeader } from './Screens/ScreenStyles';

export default class LogInForm extends Component {
    render() { 
        const wrapper = {
            marginTop: '10%',
            marginLeft: 'calc(50% - 225px)',
            display: 'inline-block'
        }

        const labelStyle = {
            lineHeight: '0px',
        }

        const inputTextStyle = {
            backgroundColor: '#f2f2f2',
            border: 'none',
            height:'30px',
            fontFamily:'Quicksand',
            fontSize:'25px',
            width: '450px'
        }

        return ( 
            <div style = {wrapper}>
                <div style = {{ margin: '0 auto'}}>
                    <p style = {secondaryHeader}>Log In</p>
                    <p style = {{...labelStyle, ...infoText}}>Enter Username</p>
                    <input type = 'text' style = {inputTextStyle} />
                    <p style = {{...labelStyle, ...infoText}}>Enter Password</p>
                    <input type = 'text' style = {inputTextStyle}/><p></p>
                    <button style = {buttonStyle}>Submit</button><p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.props.onChangeType}
                    >
                        Create Account Instead
                    </button>
                </div>
            </div>
        );
    }
}