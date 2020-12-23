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
        pStyle.fontWeight = 'normal'; 
        this.setState({pStyle});
    }

    render() {
        return (
            <p 
                style = {this.state.pStyle}
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
                onMouseDown = {() => this.props.onSelect(this.props.floorItem)}
            >
                <a 
                    href = {`/f/${this.props.floorItem.name.toLowerCase().replace(/\s/g, '')}`}
                    style = {this.state.aStyle}
                >
                    {this.props.floorItem.name}
                </a>
            </p>
        );
    }
}