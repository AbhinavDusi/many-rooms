import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper } from './ScreenStyles';
import PartyBox from './Boxes/PartyBox';
import FriendBox from './Boxes/FriendBox';
import ProfilePrevNextButtons from './ProfilePrevNextButtons';

export default class ProfileScreen extends Component {
    state = {
        previousParties: [],
        archivedParties: [],
        friends: [],
        friendsStart: 0,
        prevPartiesStart: 0,
        archivedPartiesStart: 0,
        username: '',
        userID: ''
    }

    getBoxesToDisplay = (list, start) => {
        const boxes = []; 
        for (let i = start; i < Math.min(list.length, start + 5); i++) {
            boxes.push(list[i]); 
        }
        return boxes; 
    }

    handleNextPrevParty = () => {
        this.setState({prevPartiesStart: this.state.prevPartiesStart + 5});
    }

    handlePrevPrevParty = () => {
        this.setState({prevPartiesStart: this.state.prevPartiesStart - 5});
    }

    handleNextArchivedParty = () => {
        this.setState({archivedPartiesStart: this.state.archivedPartiesStart + 5});
    }

    handlePrevArchivedParty = () => {
        this.setState({archivedPartiesStart: this.state.archivedPartiesStart - 5});
    }

    handleNextFriend = () => {
        this.setState({friendsStart: this.state.friendsStart + 5});
    }

    handlePrevFriend = () => {
        this.setState({friendsStart: this.state.friendsStart - 5});
    }

    componentDidMount() {
        fetch(window.location.pathname)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                /*
                this.setState({
                    username: result.username,
                    userID: result.userID,
                    previousParties: result.previousParties,
                    archivedParties: result.archivedParties,
                    friends: result.friends
                });
                */
            }); 
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>{this.state.username}#{this.state.userID}'s Room</p>
                    <p style = {infoText}>Previous Parties</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.previousParties, 
                                this.state.prevPartiesStart).map(
                                friend => friend
                            )}
                        </div>
                        <ProfilePrevNextButtons 
                            onInc = {this.handleNextPrevParty}
                            onDec = {this.handlePrevPrevParty}
                            size = {this.state.previousParties.length}
                            start = {this.state.prevPartiesStart}
                        />
                    </div>
                    <p style = {infoText}>Archived Parties</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.archivedParties, 
                                this.state.archivedPartiesStart).map(
                                friend => friend
                            )}
                        </div>
                        <ProfilePrevNextButtons 
                            onInc = {this.handleNextArchivedParty}
                            onDec = {this.handlePrevArchivedParty}
                            size = {this.state.archivedParties.length}
                            start = {this.state.archivedPartiesStart}
                        />
                    </div>
                    <p style = {infoText}>Friends</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.friends, this.state.friendsStart).map(
                                friend => friend
                            )}
                        </div>
                        <ProfilePrevNextButtons 
                            onInc = {this.handleNextFriend}
                            onDec = {this.handlePrevFriend}
                            size = {this.state.friends.length}
                            start = {this.state.friendsStart}
                        />
                    </div>
                </div>
            </div>
        );
    }
}