import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: new Date().getTime(),
            label: props.label,
            inputType: props.inputType,
            placeHolder: props.placeHolder,
            value: props.value
        }
    }

    getClasses() {
        const className = this.props.className ? ` ${this.props.className}` : "";
        return `input${className}`;
    }

    render() {
        return (
            <div>
                <label id={this.id}>{this.state.label}</label>
                <input id={this.id} type={this.state.inputType} placeholder={this.state.placeHolder} className={this.getClasses()} value={this.state.value}></input>
            </div>
        );
    }
}