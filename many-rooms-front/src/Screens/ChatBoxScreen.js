import React, { Component } from 'react';
import { buttonStyle, chatTextAreaStyle, innerDivStyle, outerDivStyle, tertiaryHeader, 
    innerDivChatbox, wrapper, buttonStyleSmall, topChatboxButtons} from './ScreenStyles';
import Message from './Message';
import {getUserID, getUserInfo} from '../UserInfo'; 
const io = require('socket.io-client'); 

export default class ChatBoxScreen extends Component {
    socket;
    chatBoxRef = React.createRef(); 

    state = {
        title: '',
        hostName: '',
        hostID: 1,
        archived: false,
        canSend: true,
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

    handleSave = () => {
        this.setState({saved: !this.state.saved}); 
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

    getChatboxValue = () => {
        if (this.state.archived) {
            return 'This party is archived.';
        }
        if (!this.state.canSend) {
            return 'You must wait between messages'; 
        }
        return this.state.chatBoxValue;  
    }

    goTop = () => {
        const element = this.chatBoxRef.current;
        element.scrollTop = -element.scrollHeight;
    }

    goBottom = () => {
        const element = this.chatBoxRef.current;
        element.scrollTop = element.scrollHeight;
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
                    this.socket.on('getAllMessages', messages => 
                        this.setState({allMessages: [...messages].reverse()})
                    ); 
                    this.socket.on('receiveMessage', this.handleReceiveMessage); 
                    this.socket.on('endParty', () => {this.setState({archived: true})});
                    this.socket.on('changeCanSend', bool => {this.setState({canSend: bool})}); 
                }); 
            }).catch(error => window.location.pathname = '/error');
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
                    <div style = {wrapper} ref = {this.chatBoxRef}>
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
                        disabled = {this.state.archived || !this.state.canSend}
                        onChange = {e => this.setState({chatBoxValue: e.target.value})}
                        value = {this.getChatboxValue()}
                    />
                    <button 
                        style = {{...buttonStyleSmall, ...topChatboxButtons}}
                        onClick = {this.handleSave}
                    >
                        {this.state.saved ? 'Unsave' : 'Save'}
                    </button>
                    <button 
                        style = {{...buttonStyleSmall, ...topChatboxButtons}}
                        onClick = {this.goTop}
                    >
                        Top
                    </button>
                    <button 
                        style = {{...buttonStyleSmall, ...topChatboxButtons}}
                        onClick = {this.goBottom}
                    >
                        Bottom
                    </button>
                    <button 
                        style = {{...buttonStyle, float: 'right', ...topChatboxButtons}}
                        onClick = {this.handleSendMessage}
                        disabled = {this.state.archived || !this.state.canSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        );
    }
}