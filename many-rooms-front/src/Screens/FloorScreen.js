import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper, buttonStyle } from './ScreenStyles';
import PartyBox from './PartyBox';
import CreateBox from './CreateBox';

export default class FloorScreen extends Component {
    state = {
        rooms: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        startBox: 0
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{height: '85%', ...innerDivStyle}}>
                    <p style = {mainHeader}>{this.props.floor}</p>
                    <div style = {boxWrapper}>
                        <CreateBox floor = {this.props.floor} floorURL = {this.props.floorURL}/>
                        <PartyBox />
                        <PartyBox />
                        <PartyBox />
                        <PartyBox />
                        <PartyBox />
                        <PartyBox />
                    </div>
                    <div>
                        <button style = {buttonStyle}>Previous</button>
                        <span style = {{marginLeft: '25px'}}>Page: 1</span>
                        <button style = {{marginLeft: '25px', ...buttonStyle}}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}