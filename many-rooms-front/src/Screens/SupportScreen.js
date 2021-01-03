import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, textAreaStyle, buttonStyle, selectStyle } from './ScreenStyles';

export default class SupportScreen extends Component {
    state = {
        aStyle: {
            textDecoration: 'none',
            color: 'black'
        },
        supportValue: '',
        messageType: 'Other'
    }

    handleSend = () => {
        this.setState({supportValue: ''});
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
                    <p style = {infoText}>Contact our support team to inform us on bugs or make suggestions. 
                    Or, you can email us directly at&nbsp;
                        <a 
                            href = {"mailto:support@manyrooms.com"}
                            style = {this.state.aStyle}
                            onMouseEnter = {this.handleMouseEnter}
                            onMouseLeave = {this.handleMouseLeave}
                        >
                            support@manyrooms.com
                        </a>.
                    </p>
                    <p style = {infoText}>
                        If filing a report on a user, please include their ID and reason for the report.
                    </p>
                    <p style = {infoText}>
                        Select an issue:
                        <select 
                            style = {selectStyle}                            
                            onChange = {e => this.setState({messageType: e.target.value})}
                            value = {this.state.messageType}
                        >
                            <option>Bug</option>
                            <option>Suggestion</option>
                            <option>Report</option>
                            <option>Other</option>
                        </select>
                    </p>
                    <textarea 
                        style = {textAreaStyle}
                        value = ''
                        onChange = {e => this.setState({chatBoxValue: e.target.value})}
                    />
                    <button 
                        style = {{marginTop: '15px', ...buttonStyle}}
                        onClick = {this.handleSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        );
    }
}