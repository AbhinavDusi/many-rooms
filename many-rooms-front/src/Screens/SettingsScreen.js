import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, inputTextStyle, tertiaryHeader, buttonStyle } from './ScreenStyles';

export default class SettingsScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Adjust your Settings</p>
                    <p style = {tertiaryHeader}>Change Display Name</p>
                    <p style = {infoText}>Enter a new name that others will see. Your unique four digit 
                    ID will remain the same.</p>
                    <input type = 'text' style = {inputTextStyle}/><p></p>
                    <button style = {buttonStyle}>Change Display Name</button>
                    <p style = {tertiaryHeader}>Change Password</p>
                    <p style = {infoText}>Enter your old password.</p>
                    <input type = 'password' style = {inputTextStyle}/>
                    <p style = {infoText}>Enter a new password. Make sure they match.</p>
                    <input type = 'password' style = {inputTextStyle}/>
                    <p></p>
                    <input type = 'password' style = {inputTextStyle}/><p></p>
                    <button style = {buttonStyle}>Change Password</button>
                </div>
            </div>
        );
    }
}