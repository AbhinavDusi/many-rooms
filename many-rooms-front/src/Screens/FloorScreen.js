import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper } from './ScreenStyles';
import PartyBox from './PartyBox';
import CreateBox from './CreateBox';

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
                        <CreateBox floor = {this.props.floor} floorURL = {this.props.floorURL}/>
                        <PartyBox id = '0001'/>
                    </div>
                </div>
            </div>
        );
    }
}