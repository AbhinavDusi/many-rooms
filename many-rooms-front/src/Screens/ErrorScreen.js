import React, { Component } from 'react'; 
import { outerDivStyle, innerDivStyle, mainHeader, infoText } from './ScreenStyles';

export default class ErrorScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Error!</p>
                    <p style = {infoText}>The page you have requested is unable to be loaded
                    or does not exist!</p>
                </div>
            </div>
        );
    }
}