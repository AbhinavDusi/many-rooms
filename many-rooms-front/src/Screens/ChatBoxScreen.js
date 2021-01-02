import React, { Component } from 'react';
import { buttonStyle, chatTextAreaStyle, chatMessagesAreaStyle, innerDivStyle, outerDivStyle, 
    tertiaryHeader, messageStyle } from './ScreenStyles';
import Message from './Message';

export default class ChatBoxScreen extends Component {
    state = {
        title: 'This is a sample title on a topic.',
        hostName: 'Sample User',
        hostID: '1',
        archived: false
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{height: '85%', ...innerDivStyle}}>
                    <p style = {tertiaryHeader}>
                        {this.state.hostName}#{this.state.hostID}: {this.state.title}
                    </p>
                    <div style = {chatMessagesAreaStyle}>
                        <Message style = {messageStyle}/>
                    </div>
                    <textarea 
                        style = {chatTextAreaStyle} 
                        disabled = {this.state.archived}
                    >
                        {this.state.archived ? 'This party is archived.' : ''}
                    </textarea>
                    <button style = {{...buttonStyle, float: 'right'}}>Send</button>
                </div>
            </div>
        );
    }
}