import React, { Component } from 'react';
import { innerDivStyle, outerDivStyle, secondaryHeader } from './ScreenStyles';

export default class FloorScreen extends Component {
    state = {
        rooms: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {secondaryHeader}>{this.props.floor}</p>
                </div>
            </div>
        );
    }
}