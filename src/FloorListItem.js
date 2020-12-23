import React, { Component } from 'react';

export default class FloorListItem extends Component {
    state = {
        pStyle: {
            fontFamily: 'Quicksand',
            paddingLeft: '40px'
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

    render() {
        return (
            <p 
                style = {{...this.props.floorItem.weightStyle, ...this.state.pStyle}}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
                onMouseDown = {() => this.props.onSelect(this.props.floorItem)}
            >
                {this.props.floorItem.name}
            </p>
        );
    }
}