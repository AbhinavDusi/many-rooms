import React, { Component } from 'react';
import { buttonStyle, chatTextAreaStyle, innerDivStyle, outerDivStyle, tertiaryHeader, 
    innerDivChatbox, wrapper, buttonStyleSmall, topChatboxButtons} from './ScreenStyles';
import Message from './Message';
import {getUserID, getUserInfo} from '../UserInfo'; 
const io = require('socket.io-client'); 

export default class ChatBoxScreen extends Component {
    socket;

    state = {
        title: '',
        hostName: '',
        hostID: 1,
        archived: false,
        chatBoxValue: '',
        allMessages: [],
        partyID: 1,
        userID: 1,
        username: '',
        saved: false,
        linkWrapper: {
            textDecoration: 'none',
            color: 'black'
        }
    }

    handleMouseEnter = () => {
        const linkWrapper = {...this.state.linkWrapper};
        linkWrapper.textDecoration = 'underline'; 
        this.setState({linkWrapper}); 
    }

    handleMouseLeave = () => {
        const linkWrapper = {...this.state.linkWrapper};
        linkWrapper.textDecoration = 'none'; 
        this.setState({linkWrapper}); 
    }

    handleReceiveMessage = msg => {
        this.setState({allMessages: [msg, ...this.state.allMessages]}); 
    }

    handleSendMessage = () => {
        this.socket.emit('sendMessage', this.state.chatBoxValue);
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
                    archived: !(result.status === 1),
                    partyID: result.party_id
                }); 
            }).then(() => {
                getUserInfo('/profile/' + getUserID()).then(result => {
                    const { userID, username } = result; 
                    this.setState({userID, username}); 
                    this.socket = io('http://localhost:5002');
                    this.socket.emit('joinRoom', {
                        username: this.state.username,
                        userID: this.state.userID,
                        room: this.state.partyID
                    });
                    this.socket.on('getAllMessages', messages => this.setState({allMessages: [...messages]})); 
                    this.socket.on('receiveMessage', this.handleReceiveMessage); 
                }); 
            });
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{...innerDivChatbox, ...innerDivStyle}}>
                    <p style = {tertiaryHeader}>
                        <a 
                            style = {this.state.linkWrapper}
                            href = {`/profile/${this.state.hostID}`}
                            onMouseEnter = {this.handleMouseEnter}
                            onMouseLeave = {this.handleMouseLeave}
                        >
                            {this.state.hostName}#{this.state.hostID}
                        </a>: {this.state.title}
                    </p>
                    <div style = {wrapper}>
                        {
                            this.state.allMessages.map(message => 
                                <Message 
                                    key = {message.key}
                                    username = {message.username}
                                    userID = {message.userID}
                                    content = {message.msg}
                                    time = {message.time}
                                />
                            )
                        }
                    </div>
                    <textarea 
                        style = {chatTextAreaStyle} 
                        disabled = {this.state.archived}
                        onChange = {e => this.setState({chatBoxValue: e.target.value})}
                        value = {
                            this.state.archived ? 'This party is archived.' : this.state.chatBoxValue
                        }
                    />
                    <button style = {{...buttonStyleSmall, ...topChatboxButtons}}>
                        {this.state.saved ? 'Unsave' : 'Save'}
                    </button>
                    <button style = {{...buttonStyleSmall, ...topChatboxButtons}}>Top</button>
                    <button style = {{...buttonStyleSmall, ...topChatboxButtons}}>Bottom</button>
                    <button 
                        style = {{...buttonStyle, float: 'right', ...topChatboxButtons}}
                        onClick = {this.handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        );
    }
}