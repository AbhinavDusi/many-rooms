import React, { Component } from 'react';

export default class FloorListItem extends Component {
    state = {
        pStyle: {
            fontFamily: 'Quicksand',
            paddingLeft: '40px'
        },
        aStyle: {
            textDecoration: 'none',
            color: 'black'
        }
    }

    handleMouseEnter = () => {
        const pStyle = {...this.state.pStyle}; 
        pStyle.textDecoration = 'underline';
        this.setState({pStyle}); 
    }

    handleMouseLeave = () => {
        const pStyle = {...this.state.pStyle}; 
        pStyle.textDecoration = 'none';
        this.setState({pStyle}); 
    }

    componentDidMount() {
        const pStyle = {...this.state.pStyle}; 
        const split = window.location.pathname.split('/'); 
        if (split[2] === this.props.floorItem.url) {
            pStyle.fontWeight = 'bold';
        } else {
            pStyle.fontWeight = 'normal';
        }
        this.setState({pStyle});
    }

    render() {
        return (
            <p 
                style = {this.state.pStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                <a 
                    href = {`/f/${this.props.floorItem.url}`}
                    style = {this.state.aStyle}
                >
                    {this.props.floorItem.name}
                </a>
            </p>
        );
    }
}