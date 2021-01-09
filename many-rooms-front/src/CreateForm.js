import React, { Component } from 'react';
import { buttonStyle, infoText, secondaryHeader } from './Screens/ScreenStyles';

export default class CreateForm extends Component {
    state = {
        username: '', 
        firstPassword: '',
        secondPassword: '',
        email: '',
        err: ''
    }

    handleSubmit = () => {
        fetch ('/createaccount', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...this.state})
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.err === 1) {
                    this.setState({err: result.msg});
                } else {
                    fetch ('/login', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            password: this.state.firstPassword,
                            email: this.state.email
                        })
                    })
                        .then(res => res.json())
                        .then(result => {
                            document.cookie = 'sid=' + result.msg.accessToken + '; path=/;';
                            document.cookie = 'username=' + result.msg.userID + '; path=/;';
                            window.location.pathname = '/home'; 
                        });
                }
            })
    }

    render() { 
        const wrapper = {
            marginTop: '10%',
            marginLeft: 'calc(50% - 225px)',
            display: 'inline-block'
        }

        const labelStyle = {
            lineHeight: '0px',
        }

        const inputTextStyle = {
            backgroundColor: '#f2f2f2',
            border: 'none',
            height:'30px',
            fontFamily:'Quicksand',
            fontSize:'25px',
            width: '450px'
        }

        return ( 
            <div style = {wrapper}>
                <div style = {{ margin: '0 auto'}}>
                    <p style = {secondaryHeader}>Create An Account</p>
                    <p style = {{...labelStyle, ...infoText}}>Enter Email</p>
                    <input 
                        type = 'text' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({email: e.target.value})}
                        value = {this.state.email}
                    />
                    <p style = {{...labelStyle, ...infoText}}>Enter Username</p>
                    <input 
                        type = 'text' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({username: e.target.value})}
                        value = {this.state.username}
                    />
                    <p style = {{...labelStyle, ...infoText}}>Enter Password</p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({firstPassword: e.target.value})}
                        value = {this.state.firstPassword}
                    /><p></p>
                    <p style = {{...labelStyle, ...infoText}}>Enter Password Again</p>
                    <input 
                        type = 'password' 
                        style = {inputTextStyle}
                        onChange = {e => this.setState({secondPassword: e.target.value})}
                        value = {this.state.secondPassword}
                    /><p></p>
                    <button 
                        style = {buttonStyle}
                        onClick = {this.handleSubmit}
                    >
                        Submit
                    </button>
                    <span style = {{marginLeft: '15px', ...infoText}}>{this.state.err}</span>
                    <p></p>
                    <button 
                        style = {buttonStyle} 
                        onClick = {this.props.onChangeType}
                    >
                        Log In Instead
                    </button>
                </div>
            </div>
        );
    }
}