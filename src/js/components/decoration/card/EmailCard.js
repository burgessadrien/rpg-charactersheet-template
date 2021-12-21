'use strict';

import React from 'react';
import emailjs from 'emailjs-com';
import Reaptcha from 'reaptcha';

import Card from './Card';

export default class EmailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            body: "",
            ready: false,
            notARobot: false
        }
        this.onHandleRecaptcha = this.onHandleRecaptcha.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onHandleRecaptcha() {
        this.setState({notARobot: true});
        this.checkFormStatus();
    }

    validateEmail() {
        const emailformat =  	
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.state.email.match(emailformat) != null;
    }

    checkFormStatus() {
        this.setState({ready: this.state.name.length > 0 && this.validateEmail(this.state.email) && this.state.body.length > 0 && this.state.notARobot})
    }

    handleChange(event) {
        event.preventDefault();
        let stateChange = {};
        if(event.target.name === "name") {
            stateChange = {
                name: event.target.value,
                subject: `Order for ${event.target.value}`
            };
        } else {
            stateChange = {[event.target.name]: event.target.value || ""};
        }
        this.setState(stateChange, () => {
            this.checkFormStatus();
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        emailjs.send(
            'gmail',
            'this_is_the_first_template',
            this.state,
            "user_HZj8ti2rjq7MMuATspS6D"
        );
    }

    render() {
        return (
            <Card className="card-email" component={(
                <form>
                    <div>
                        <h1>{this.props.title || "Send Email"}</h1>
                    </div>
                    <div className="input">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" required onChange={this.handleChange} />
                    </div>
                    <div className="input">
                        <label htmlFor="email">From: </label>
                        <input type="email" id="email" name="email" required onChange={this.handleChange} />
                    </div>
                    <div className="body">
                        <textarea id="body" name="body" required onChange={this.handleChange}/>
                    </div>
                    <div className="send">
                        {!this.state.notARobot && (<Reaptcha sitekey={`${process.env.EMAILJS_API_KEY}`} onVerify={this.onHandleRecaptcha} />)}
                        <button disabled={!this.state.ready} onClick={this.handleSubmit}>Send</button>
                    </div>
                </form>
            )}/>
        );
    }
}