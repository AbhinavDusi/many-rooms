import React, { Component } from 'react';
import {messageStyle} from './ScreenStyles';

export default class Message extends Component {
    state = {
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


    render() { 
        return ( 
            <div style = {messageStyle}>
                <a 
                    style = {this.state.linkWrapper}
                    href = {`/profile/${this.props.userID}`}
                    onMouseEnter = {this.handleMouseEnter}
                    onMouseLeave = {this.handleMouseLeave}
                >
                    {this.props.username}#{this.props.userID}
                </a>
                : {this.props.content}
            </div>
         );
    }
}