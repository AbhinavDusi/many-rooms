import React, { Component } from 'react';
import FloorList from './FloorList'

export default class OptionsPanel extends Component {
    render() {
        const outerDivStyle = {
            float: 'left',
            height: '100%',
            width: '15%',
            backgroundColor: '#f2f2f2'
        }

        const pStyle = {
            paddingLeft: '15px',
            fontFamily: 'Quicksand',
            fontSize: '20px'
        }

        return (
            <div style = {outerDivStyle}>
                <div>
                    <p style = {pStyle}>Floors</p>
                    <FloorList />
                </div>
            </div>
        );
    }
}