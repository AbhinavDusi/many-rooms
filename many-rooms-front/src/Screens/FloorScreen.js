import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper } from './ScreenStyles';
import Box from './Box';

export default class FloorScreen extends Component {
    state = {
        rooms: [],
        startBox: 0
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>{this.props.floor}</p>
                    <div style = {boxWrapper}>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </div>
            </div>
        );
    }
}