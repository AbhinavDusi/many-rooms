import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, secondaryHeader, infoText } from './ScreenStyles';

export default class SupportScreen extends Component {
    state = {
        aStyle: {
            textDecoration: 'none',
            color: 'black'
        }
    }

    handleMouseEnter = () => {
        const aStyle = {...this.state.aStyle}; 
        aStyle.textDecoration = 'underline';
        this.setState({aStyle}); 
    }

    handleMouseLeave = () => {
        const aStyle = {...this.state.aStyle}; 
        aStyle.textDecoration = 'none';
        this.setState({aStyle}); 
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Need Help?</p>
                    <p style = {infoText}>Contact our support team to inform us on bugs, make suggestions,
                    or file reports. Or, you can email us directly at&nbsp;
                    <a 
                        href = {"mailto:support@manyrooms.com"}
                        style = {this.state.aStyle}
                        onMouseEnter = {this.handleMouseEnter}
                        onMouseLeave = {this.handleMouseLeave}
                    >
                        support@manyrooms.com
                    </a>.
                    </p>
                </div>
            </div>
        );
    }
}