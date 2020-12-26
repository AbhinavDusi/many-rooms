import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper } from './ScreenStyles';
import PartyBox from './Boxes/PartyBox';
import FriendBox from './Boxes/FriendBox';
import ProfilePrevNextButtons from './ProfilePrevNextButtons';

export default class ProfileScreen extends Component {
    state = {
        previousParties: [
            <PartyBox key = '1'/>,
            <PartyBox key = '2'/>,
            <PartyBox key = '3'/>,
            <PartyBox key = '4'/>,
            <PartyBox key = '5'/>,
            <PartyBox key = '6'/>,
            <PartyBox key = '7'/>,
            <PartyBox key = '8'/>,
            <PartyBox key = '9'/>,
            <PartyBox key = '10'/>,
            <PartyBox key = '11'/>,
            <PartyBox key = '12'/>
        ],
        archivedParties: [
            <PartyBox key = '1'/>,
            <PartyBox key = '2'/>,
            <PartyBox key = '3'/>,
            <PartyBox key = '4'/>,
            <PartyBox key = '5'/>
        ],
        friends: [
            <FriendBox key = '1'/>,
            <FriendBox key = '2' />,
            <FriendBox key = '3' />,
            <FriendBox key = '4' />,
            <FriendBox key = '5' />,
            <FriendBox key = '6' />,
            <FriendBox key = '7' />,
            <FriendBox key = '8' />,
            <FriendBox key = '9' />,
            <FriendBox key = '10' />,
            <FriendBox key = '11' />,
            <FriendBox key = '12' />,
        ],
        friendsStart: 0,
        prevPartiesStart: 0,
        archivedPartiesStart: 0
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

    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Sample_User#0001's Room</p>
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