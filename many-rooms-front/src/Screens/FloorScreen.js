import React, { Component } from 'react';
import { innerDivStyle, mainHeader, outerDivStyle, boxWrapper, buttonStyle, infoText, inputTextStyle, selectStyle } from './ScreenStyles';
import PartyBox from './Boxes/PartyBox';
import CreateBox from './Boxes/CreateBox';
import {floorList} from '../FloorListInfo';

export default class FloorScreen extends Component {
    prevDisplayed = false; 
    displayOnScreen = 20; 
    floor = ''; 

    state = {
        allRooms: [], 
        rooms: [],
        startBox: 0,
        searchValue: '',
        sortBy: 'Old'
    }

    handleSearch = () => {
        if (this.state.searchValue.trim() !== '') {
            const searchTags = this.state.searchValue.split(',').map(tag => tag.toLowerCase()); 
            const rooms = []; 
            for (let room in this.state.allRooms) {
                const currRoom = this.state.allRooms[room].props.tags; 
                const roomTags = currRoom.split(',').map(tag => tag.toLowerCase()); 
                let found = false; 
                for (let tag in roomTags) {
                    if (searchTags.includes(roomTags[tag])) {
                        found = true; 
                        break; 
                    }
                }
                if (found) {
                    rooms.push(this.state.allRooms[room]); 
                }
            }
            this.setState({rooms}); 
            this.setState({searchValue: ''});
        } else {
            this.setState({rooms: this.state.allRooms});
        }
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
            floor = {this.floor} 
            floorURL = {window.location.pathname}
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
        if (this.state.startBox - this.displayOnScreen >= 0) {
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

    sortByTime = (a, b) => {
        return a.props.id - b.props.id; 
    }

    sortByTrending = (a, b) => {
        return b.props.attendees * b.props.posts - a.props.attendees * a.props.posts; 
    }

    handleSortBy = () => {
        if (this.state.sortBy === 'New') {
            const rooms = [...this.state.allRooms]; 
            rooms.sort(this.sortByTime).reverse();
            this.setState({rooms});
        } else if (this.state.sortBy === 'Old') {
            const rooms = [...this.state.allRooms]; 
            rooms.sort(this.sortByTime); 
            this.setState({rooms});
        } else {
            const rooms = [...this.state.allRooms]; 
            rooms.sort(this.sortByTrending); 
            this.setState({rooms}); 
        }
    }

    componentDidMount() {
        const rooms = []; 
        fetch(window.location.pathname)
            .then(res => res.json())
            .then(res => {
                res.forEach(room => {
                    rooms.push(
                    <PartyBox 
                        key = {room.id}
                        id = {room.id}
                        title = {room.title}
                        host = {room.host}
                        hostID = {room.host_id}
                        posts = {room.posts}
                        attendees = {room.attendees}
                        tags = {room.tags}
                        startTime = {room.start_time}
                    /> 
                )}); 
                this.setState({rooms, allRooms: [...rooms]});
            })
            .catch(error => {
                window.location.pathname = '/error';
            });
    }

    render() {
        const floors = floorList.filter(floor => floor.url === window.location.pathname);
        if (floors.length === 1) 
            this.floor = floors[0].name; 
        else 
            window.location.pathname = '/error';
        return (
            <div style = {outerDivStyle}>
                <div style = {{height: '85%', ...innerDivStyle}}>
                    <p style = {mainHeader}>{this.floor}</p>
                    <p style = {infoText}>
                        <input 
                            type = 'text' 
                            style = {{verticalAlign: 'middle',...inputTextStyle}}
                            onChange = {e => this.setState({searchValue: e.target.value})}
                            value = {this.state.searchValue}
                        />
                        <button style = {{
                            verticalAlign: 'middle',
                            marginLeft: '15px', 
                            ...buttonStyle,
                            marginRight: '15px'
                        }}
                            onClick = {this.handleSearch}
                        >
                            Search By Tag
                        </button>
                        Sort by:
                        <select 
                            style = {{marginLeft: '15px', ...selectStyle}}
                            onChange = {async e => {
                                await this.setState({sortBy: e.target.value}); 
                                this.handleSortBy(); 
                            }}
                            value = {this.state.sortBy}
                        >
                            <option>Old</option>
                            <option>New</option>
                            <option>Trending</option>
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