import React, { Component } from 'react'; 
import { outerDivStyle, innerDivStyle, mainHeader, secondaryHeader, infoText } from './ScreenStyles';

export default class ChatBoxScreen extends Component {
    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Many Rooms</p>
                    <p style = {infoText}>
                        In this building there are many floors. In each floor there are many rooms. 
                        In each room there is an exciting party. 
                    </p>
                    <p style = {infoText}>
                        Want to see what the buzz is on each floor? Try joining one by selecting 
                        a topic, or create your own party when you get there! 
                    </p>
                    <p style = {secondaryHeader}>About</p>
                    <p style = {infoText}>
                        We believe in the importance of thoughtful discussions, and chatrooms
                        provide the best opportunity for this. They occur in real time and are
                        focused on centralized topics. 
                    </p>
                    <p style = {infoText}>
                        Having a meaningful conversation is like striking gold, so we give you
                        the option to save and archive all or parts of your discussions. 
                    </p>
                    <p style = {secondaryHeader}>News and Updates</p>
                    <p style = {infoText}>
                        Version 1.0.0 is set to release by February 1st, 2020.
                    </p>
                </div>
            </div>
        );
    }
}