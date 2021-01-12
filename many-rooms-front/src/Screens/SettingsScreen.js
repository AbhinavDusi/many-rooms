import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, inputTextStyle, tertiaryHeader, buttonStyle } from './ScreenStyles';

export default class SettingsScreen extends Component {
    state = {
        nameText: '',
        firstPasswordText: '',
        secondPasswordText: '',
        currPasswordText: '',
        displayNameErr: '',
        passwordErr: ''
    }

    handleChangeDisplayName = () => {
        this.setState({nameText: ''}); 
        fetch('/settings/updatedisplayname', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ newName: this.state.nameText })
        })
            .then(res => res.json())
            .then(res => {
                if (res.err === 1) {
                    document.cookie = 'username=;path=/';
                    document.cookie = 'sid=;path=/';
                    window.location.pathname = '';
                } else {
                    this.setState({displayNameErr: res.msg});
                }
            }); 
    }

    handleChangePassword = () => {
        this.setState({firstPasswordText: '', secondPasswordText: '', currPasswordText: ''});
        fetch('/settings/updatepassword', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                currPassword: this.state.currPasswordText,
                firstPassword: this.state.firstPasswordText,
                secondPassword: this.state.secondPasswordText
            })  
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.err === 1) {
                    document.cookie = 'username=;path=/';
                    document.cookie = 'sid=;path=/';
                    window.location.pathname = '';
                } else {
                    this.setState({passwordErr: res.msg});
                }
            }); 
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
                        value = {this.state.nameText}
                    /><p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.handleChangeDisplayName}
                    >
                        Change Display Name
                    </button>
                    <span style = {{marginLeft: '15px', ...infoText}}>{this.state.displayNameErr}</span>
                    <p style = {tertiaryHeader}>Change Password</p>
                    <p style = {infoText}>Enter your old password.</p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({currPasswordText: e.target.value})}
                        value = {this.state.currPasswordText}
                    />
                    <p style = {infoText}>Enter a valid new password. Make sure they match.</p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({firstPasswordText: e.target.value})}
                        value = {this.state.firstPasswordText}
                    /><p></p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({secondPasswordText: e.target.value})}
                        value = {this.state.secondPasswordText}
                    /><p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.handleChangePassword}
                        disabled = {this.state.secondPasswordText !== this.state.firstPasswordText}
                    >
                        Change Password
                    </button>
                    <span style = {{marginLeft: '15px', ...infoText}}>{this.state.passwordErr}</span>
                </div>
            </div>
        );
    }
}