import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, boxWrapper, changePageProfile,
buttonStyle } from './ScreenStyles';
import PartyBox from './PartyBox';
import FriendBox from './FriendBox';

export default class ProfileScreen extends Component {
    state = {
        previousParties: [],
        archivedParties: [],
        friends: []
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
                            <PartyBox id = '000001'/>
                        </div>
                        <div style = {changePageProfile}>
                            <button style = {buttonStyle}>Next</button>
                            <p></p>
                            <button style = {buttonStyle}>Previous</button>
                        </div>
                    </div>
                    <p style = {infoText}>Archived Parties</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            <PartyBox id = '0001'/>
                        </div>
                        <div style = {changePageProfile}>
                            <button style = {buttonStyle}>Next</button>
                            <p></p>
                            <button style = {buttonStyle}>Previous</button>
                        </div>
                    </div>
                    <p style = {infoText}>Friends</p>
                    <div style = {{display: 'inline'}}>
                        <div style = {boxWrapper}>
                            <FriendBox />
                            <FriendBox />
                            <FriendBox />
                            <FriendBox />
                            <FriendBox />
                        </div>
                        <div style = {changePageProfile}>
                            <button style = {buttonStyle}>Next</button>
                            <p></p>
                            <button style = {buttonStyle}>Previous</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}