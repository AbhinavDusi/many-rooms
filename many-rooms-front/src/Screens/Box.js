import React, { Component } from 'react';

export default class Box extends Component {
    state = {
        boxStyle: {
            width:'16%',
            height:'100px',
            backgroundColor: '#f2f2f2',
            float:'left',
            marginRight: '4%',
            marginBottom: '25px',
            boxSizing: 'border-box',
            border: '2px solid transparent'
        }
    }

    handleMouseEnter = () => {
        const boxStyle = {...this.state.boxStyle};
        boxStyle.border = '2px solid black';
        this.setState({boxStyle});
    }

    handleMouseLeave = () => {
        const boxStyle = {...this.state.boxStyle};
        boxStyle.border = '2px solid transparent';
        this.setState({boxStyle});
    }

    pStyle = {
        lineHeight: '1em',
        fontSize:'10px',
        marginBottom: '-0.8em'
    }

    innerBoxWrapper = {
        paddingLeft: '5px'
    }

    render() {
        return (
            <div 
                style = {this.state.boxStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <div style = {this.innerBoxWrapper}>
                    <p style = {this.pStyle}>ID: 0001</p>
                    <p style = {this.pStyle}>Attendees: 23</p>
                    <p style = {this.pStyle}>Posts: 230</p>
                    <p style = {this.pStyle}>Host: Sample_User#0001</p>
                    <p style = {this.pStyle}>Title: This is a very very long sample Topic</p>
                </div>
            </div>
        );
    }
}