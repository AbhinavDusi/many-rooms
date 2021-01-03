import React, { Component } from 'react';
import { buttonStyle, chatTextAreaStyle, innerDivStyle, outerDivStyle, tertiaryHeader, 
    innerDivChatbox, wrapper} from './ScreenStyles';
import Message from './Message';

export default class ChatBoxScreen extends Component {
    state = {
        title: 'This is a sample title on a topic.',
        hostName: 'Sample User',
        hostID: '1',
        archived: false,
        chatBoxValue: '',
        allMessages: []
    }

    ws = new WebSocket('ws://localhost:5001'); 

    handleSendMessage = () => {
        this.ws.send(this.state.chatBoxValue);
        this.setState({chatBoxValue: ''});
    }
    
    componentDidMount() {
        fetch(window.location.pathname)
            .then(res => res.json())
            .then(result => {
                result = result[0];
                this.setState({
                    title: result.title,
                    hostName: result.display_name,
                    hostID: result.user_id,
                    archived: result.status === 1 ? false : true
                }); 
            }); 
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{...innerDivChatbox, ...innerDivStyle}}>
                    <p style = {tertiaryHeader}>
                        {this.state.hostName}#{this.state.hostID}: {this.state.title}
                    </p>
                    <div style = {wrapper}>
                        <Message 
                            username = 'Sample User'
                            userID = '1'
                            content = 'Test Message' 
                        />
                    </div>
                    <textarea 
                        style = {chatTextAreaStyle} 
                        disabled = {this.state.archived}
                        onChange = {e => this.setState({chatBoxValue: e.target.value})}
                        value = {
                            this.state.archived ? 'This party is archived.' : this.state.chatBoxValue
                        }
                    />
                    <button 
                        style = {{...buttonStyle, float: 'right'}}
                        onClick = {this.handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        );
    }
}