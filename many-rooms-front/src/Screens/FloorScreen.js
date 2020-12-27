import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper, buttonStyle, infoText, inputTextStyle, selectStyle } from './ScreenStyles';
import PartyBox from './Boxes/PartyBox';
import CreateBox from './Boxes/CreateBox';

export default class FloorScreen extends Component {
    prevDisplayed = false; 
    displayOnScreen = 20; 

    state = {
        rooms: [],
        startBox: 0
    }

    handleNext = () => {
        this.setState({startBox: this.state.startBox + this.displayOnScreen});
    }

    handlePrev = () => {
        this.setState({startBox: this.state.startBox - this.displayOnScreen});
    }

    getBoxesToDisplay = () => {
        const boxes = []; 
        boxes.push(<CreateBox floor = {this.props.floor} floorURL = {this.props.floorURL}/>);
        for (let i = this.state.startBox; 
            i < Math.min(this.state.rooms.length, this.state.startBox + this.displayOnScreen - 1); 
            i++) {
            boxes.push(this.state.rooms[i]); 
        }
        return boxes; 
    }

    displayPrevious = () => {
        if (this.state.startBox -this.displayOnScreen >= 0) {
            this.prevDisplayed = true; 
            return (
                <button style = {buttonStyle} onClick = {this.handlePrev}>Previous</button>
            )
        } else {
            this.prevDisplayed = false; 
        }
    }

    displayNext = () => {
        if (this.state.startBox + this.displayOnScreen < this.state.rooms.length) {
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
                    <p style = {infoText}>
                        Search by tag:
                        <input type = 'text' style = {
                            {marginLeft: '15px', 
                            ...inputTextStyle,
                            marginRight: '15px'
                        }} />
                        Sort by:
                        <select style = {{marginLeft: '15px', ...selectStyle}}>
                            <option>Trending</option>
                            <option>New</option>
                        </select>
                    </p>
                    <div style = {boxWrapper}>
                        {this.getBoxesToDisplay().map(
                            room => room
                        )}
                    </div>
                    <div>
                        {this.displayPrevious()}
                        <span style = {{marginLeft: this.prevDisplayed ? '25px' : '0px'}}>
                            Page: {Math.ceil(this.state.startBox / this.displayOnScreen) + 1} of&nbsp;
                            {Math.ceil(this.state.rooms.length / this.displayOnScreen)}
                        </span>
                        {this.displayNext()}
                    </div>
                </div>
            </div>
        );
    }
}