import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, inputTextStyle, tertiaryHeader, buttonStyle } from './ScreenStyles';

export default class SettingsScreen extends Component {
    state = {
        nameText: '',
        firstPasswordText: '',
        secondPasswordText: ''
    }

    handleChangeDisplayName = () => {
        this.setState({nameText: ''}); 
    }

    handleChangePassword = () => {
        this.setState({firstPasswordText: '', secondPasswordText: ''});
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Adjust your Settings</p>
                    <p style = {tertiaryHeader}>Change Display Name</p>
                    <p style = {infoText}>Enter a new name that others will see. Your unique four digit 
                    ID will remain the same.</p>
                    <input 
                        type = 'text' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({nameText: e.target.value})}
                    /><p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.handleChangeDisplayName}
                    >
                        Change Display Name
                    </button>
                    <p style = {tertiaryHeader}>Change Password</p>
                    <p style = {infoText}>Enter your old password.</p>
                    <input type = 'password' style = {inputTextStyle}/>
                    <p style = {infoText}>Enter a valid new password. Make sure they match.</p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({firstPasswordText: e.target.value})}
                    /><p></p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({secondPasswordText: e.target.value})}
                    /><p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.handleChangePassword}
                        disabled = {this.state.secondPasswordText !== this.state.firstPasswordText}
                    >
                        Change Password
                    </button>
                    <span style = {{marginLeft: '15px'}}>
                        {
                            this.state.firstPasswordText !== this.state.secondPasswordText 
                            && this.state.firstPasswordText.length > 0
                            && this.state.secondPasswordText.length > 0
                            ? 'Passwords do not match!'
                            : ''
                        }
                    </span>
                </div>
            </div>
        );
    }
}