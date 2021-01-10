import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper, 
    buttonStyle } from './ScreenStyles';
import ProfilePrevNextButtons from './ProfilePrevNextButtons';
import EmptyBox from './Boxes/EmptyBox';
import { getUserInfo } from '../UserInfo';

export default class ProfileScreen extends Component {
    state = {
        previousParties: [],
        archivedParties: [],
        friends: [],
        friendsStart: 0,
        prevPartiesStart: 0,
        archivedPartiesStart: 0,
        username: '',
        userID: '',
        friendAdded: false,
        myAccount: true
    }

    handleLogOut = () => {
        document.cookie = 'username=;path=/';
        document.cookie = 'sid=;path=/';
        window.location.pathname = '';
    }

    handleAddFriend = () => {
        this.setState({friendAdded: !this.state.friendAdded});
    }

    displayTopButton = () => {
        if (!this.state.myAccount) {
            return (
                <button 
                    style = {buttonStyle}
                    onClick = {this.handleAddFriend}
                >
                    {this.state.friendAdded ? 'Remove ' : 'Add '}Friend
                </button>
            );
        } else {
            return (
                <button 
                    style = {buttonStyle}
                    onClick = {this.handleLogOut}
                >
                    Sign Out
                </button>
            )
        }
    }

    getBoxesToDisplay = (list, start, type) => {
        const boxes = []; 
        for (let i = start; i < Math.min(list.length, start + 5); i++) {
            boxes.push(list[i]); 
        }
        if (boxes.length === 0) {
            if (type === 0) {
                boxes.push(<EmptyBox key = 'emptyBox' message = 'No parties created.'/>)
            } else if (type === 1) {
                boxes.push(<EmptyBox key = 'emptyBox' message = 'No parties archived.'/>)
            } else if (type === 2) {
                boxes.push(<EmptyBox key = 'emptyBox' message = 'No friends added.'/>)
            }
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
        getUserInfo(window.location.pathname).then(result => {
            const { userID, username, previousParties, archivedParties, friends } = result; 
            this.setState({userID, username, previousParties, archivedParties, friends});
        }); 
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>{this.state.username}#{this.state.userID}'s Room</p>
                    {this.displayTopButton()}
                    <p style = {{lineHeight: '0.5em', ...infoText}}>Previous Parties</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.previousParties, 
                                this.state.prevPartiesStart, 0).map(
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
                    <p style = {{lineHeight: '0.5em', ...infoText}}>Archived Parties</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.archivedParties, 
                                this.state.archivedPartiesStart, 1).map(
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
                    <p style = {{lineHeight: '0.5em', ...infoText}}>Friends</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            {this.getBoxesToDisplay(this.state.friends, this.state.friendsStart, 2).map(
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