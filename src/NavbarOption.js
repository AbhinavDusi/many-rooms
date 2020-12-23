import React, { Component } from 'react';

export default class NavbarOption extends Component {
    state = {
        divStyle: {
            color: 'white',
            marginLeft: '25px',
            float: 'left', 
            verticalAlign: 'middle',
            lineHeight: '60px',
            fontSize: '25px',
            fontFamily: 'Quicksand',
            textDecoration: 'none'
        }
    }

    handleMouseEnter = () => {
        const divStyle = {...this.state.divStyle}; 
        divStyle.textDecoration = 'underline';
        this.setState({divStyle}); 
    }

    handleMouseLeave = () => {
        const divStyle = {...this.state.divStyle}; 
        divStyle.textDecoration = 'none';
        this.setState({divStyle}); 
    }

    render() { 
        return (
            <div 
                style = {this.state.divStyle} 
                onMouseEnter = {this.handleMouseEnter}
                onMouseLeave = {this.handleMouseLeave}
            >
                {this.props.value}
            </div>
        );
    }
}