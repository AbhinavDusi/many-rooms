import React, { Component } from 'react';
import {buttonStyle, changePageProfile} from './ScreenStyles'; 

export default class ProfilePrevNextButtons extends Component {
    nextDisplayed = false; 

    displayPrevious = () => {
        if (this.props.start - 5 >= 0) {
            return (
                <React.Fragment>
                    {this.nextDisplayed ? <p></p> : null}
                    <button 
                        style = {buttonStyle}
                        onClick = {this.props.onDec}
                    >
                        Previous
                    </button>
                </React.Fragment>
            )
        }

    }

    displayNext = () => {
        if (this.props.start + 5 < this.props.size) {
            this.nextDisplayed = true; 
            return (
                <button 
                    style = {buttonStyle} 
                    onClick = {this.props.onInc}
                >
                    Next
                </button>
            );
        } else {
            this.nextDisplayed = false; 
        }
    }

    render() { 
        return ( 
            <div style = {changePageProfile}>
                {this.displayNext()}
                {this.displayPrevious()}
            </div>
         );
    }
}