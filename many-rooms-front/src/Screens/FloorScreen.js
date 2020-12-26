import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper, buttonStyle } from './ScreenStyles';
import PartyBox from './Boxes/PartyBox';
import CreateBox from './Boxes/CreateBox';

export default class FloorScreen extends Component {
    prevDisplayed = false; 

    state = {
        rooms: [],
        startBox: 0
    }

    handleNext = () => {
        this.setState({startBox: this.state.startBox + 20});
    }

    handlePrev = () => {
        this.setState({startBox: this.state.startBox - 20});
    }

    getBoxesToDisplay = () => {
        const boxes = []; 
        boxes.push(<CreateBox floor = {this.props.floor} floorURL = {this.props.floorURL}/>);
        for (let i = this.state.startBox; 
            i < Math.min(this.state.rooms.length, this.state.startBox + 19); 
            i++) {
            boxes.push(this.state.rooms[i]); 
        }
        return boxes; 
    }

    displayPrevious = () => {
        if (this.state.startBox - 20 >= 0) {
            this.prevDisplayed = true; 
            return (
                <button style = {buttonStyle} onClick = {this.handlePrev}>Previous</button>
            )
        } else {
            this.prevDisplayed = false; 
        }
    }

    displayNext = () => {
        if (this.state.startBox + 20 < this.state.rooms.length) {
            return (
                <button 
                    style = {{marginLeft: '25px', ...buttonStyle}} 
                    onClick = {this.handleNext}
                >
                    Next
                </button>
            );
        }  
    }

    componentDidMount() {
        let rooms = [];
        for (let i = 0; i < 50; i++) {
            rooms.push(<PartyBox key = {"" + i}/>); 
        }
        this.setState({rooms});
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{height: '85%', ...innerDivStyle}}>
                    <p style = {mainHeader}>{this.props.floor}</p>
                    <div style = {boxWrapper}>
                        {this.getBoxesToDisplay().map(
                            room => room
                        )}
                    </div>
                    <div>
                        {this.displayPrevious()}
                        <span style = {{marginLeft: this.prevDisplayed ? '25px' : '0px'}}>
                            Page: {Math.ceil(this.state.startBox / 20) + 1} of&nbsp;
                            {Math.ceil(this.state.rooms.length / 20)}
                        </span>
                        {this.displayNext()}
                    </div>
                </div>
            </div>
        );
    }
}