import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, inputTextStyle, 
    bodyTextAreaStyle, buttonStyle, selectStyle } from './ScreenStyles';

export default class ChatBoxScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Create A Party</p>
                    <p style = {infoText}>Title</p>
                    <input type = 'text' style = {inputTextStyle} />
                    <p style = {infoText}>Tags (Separated by a comma)</p>
                    <input type = 'text' style = {inputTextStyle} />
                    <p style = {infoText}>Body</p>
                    <textarea style = {bodyTextAreaStyle}></textarea>
                    <button style = {{marginTop: '25px',...buttonStyle}}>Submit</button>
                    <p style = {infoText}>
                        Time between messages:
                        <select style = {selectStyle}>
                            <option>5 seconds</option>
                            <option>10 seconds</option>
                            <option>30 seconds</option>
                        </select>
                    </p>
                </div>
            </div>
        );
    }
}