import React from 'react';

import Label from "./Input";
import SelectInput from './SelectInput';

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

    getItemTypeOptions() {
        return [
            "text",
            "checkbox",
            "number"
        ];
    }

    getClasses() {
        const className = this.props.className ? ` ${this.props.className}` : "";
        return `input${className}`;
    }

    render() {
        return (
            <form>
                <SelectInput label="Input Type" options={this.getItemTypeOptions()}/>
                <Input inputType="text" placeHolder="Enter label..." value="label" />
            </form>
        );
    }
}