import React, { Component } from 'react';
import { outerDivStyle, innerDivStyle, mainHeader, infoText, inputTextStyle, 
    bodyTextAreaStyle, buttonStyle, selectStyle } from './ScreenStyles';

export default class CreateRoomScreen extends Component {
    state = {
        titleValue: '',
        tagsValue: '',
        bodyValue: '',
        timeValue: 5,
        errMsg: ''
    }

    handleCreateParty = () => {
        const partyInfo = {...this.state}; 
        partyInfo.floor = window.location.pathname.split("/")[2]; 
        fetch('/createparty', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(partyInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.err === 1) {
                    this.setState({errMsg: result.msg});
                } else {
                    window.location.pathname = '/p/' + result.msg.partyID;
                }
            });
    }

    render() {
        return (
            <div style = {outerDivStyle}>
                <div style = {innerDivStyle}>
                    <p style = {mainHeader}>Create A Party</p>
                    <p style = {infoText}>Title</p>
                    <input 
                        type = 'text' 
                        style = {inputTextStyle} 
                        onChange = {e => this.setState({titleValue: e.target.value})}
                    />
                    <p style = {infoText}>Tags (Separated by a comma)</p>
                    <input 
                        type = 'text' 
                        style = {inputTextStyle} 
                        onChange = {e => this.setState({tagsValue: e.target.value})}
                    />
                    <p style = {infoText}>Body</p>
                    <textarea 
                        style = {bodyTextAreaStyle}
                        onChange = {e => this.setState({bodyValue: e.target.value})}
                    ></textarea>
                    <button 
                        style = {{marginTop: '25px',...buttonStyle}}
                        onClick = {this.handleCreateParty}
                    >
                        Submit
                    </button>
                    <span style = {{marginLeft: '15px'}}>
                        {this.state.errMsg}
                    </span>
                    <p style = {infoText}>
                        Time between messages:
                        <select 
                            style = {selectStyle}
                            onChange = {e => this.setState({timeValue: parseInt(parseInt(e.target.value))})}
                            value = {this.state.timeValue}
                        >
                            <option value = '5'>5 seconds</option>
                            <option value = '10'>10 seconds</option>
                            <option value = '30'>30 seconds</option>
                        </select>
                    </p>
                </div>
            </div>
        );
    }
}