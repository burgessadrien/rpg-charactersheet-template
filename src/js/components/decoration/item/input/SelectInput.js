import React from 'react';

export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: new Date().getTime(),
            label: props.label || "",
            inputType: props.inputType || "",
            placeHolder: props.placeHolder || "",
            value: props.value,
            options: props.options || []
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
                <select>
                    {this.state.options.map((option) => {
                        <option value={option.toLowerCase()}>{option}</option>
                    })}
                </select>
            </div>
        );
    }
}