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
        boxes.push(<CreateBox 
            floor = {this.props.floor} 
            floorURL = {this.props.floorURL}
            key = 'createBox'
        />);
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
        const rooms = []; 
        fetch(window.location.pathname)
            .then(res => res.json())
            .then(res => {
                res.forEach(room => rooms.push(
                    <PartyBox 
                        key = {room.id}
                        id = {room.id}
                        title = {room.title}
                        host = {room.host}
                        posts = {room.posts}
                        attendees = {room.attendees}
                        tags = {room.tags}
                    /> 
                )); 
                this.setState({rooms});
            })
            .catch(error => {
                window.location.pathname = '/error';
            });
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {{height: '85%', ...innerDivStyle}}>
                    <p style = {mainHeader}>{this.props.floor}</p>
                    <p style = {infoText}>
                        <input type = 'text' style = {{verticalAlign: 'middle',...inputTextStyle}} />
                        <button style = {{
                            verticalAlign: 'middle',
                            marginLeft: '15px', 
                            ...buttonStyle,
                            marginRight: '15px'
                        }}>Search By Tag</button>
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
                            {  
                                Math.max(Math.ceil(this.state.rooms.length / this.displayOnScreen), 1)
                            }
                        </span>
                        {this.displayNext()}
                    </div>
                </div>
            </div>
        );
    }
}