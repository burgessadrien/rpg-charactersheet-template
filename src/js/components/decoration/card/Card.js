import React from 'react'

//local components

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    getClasses() {
        const className = this.props.className ? ` ${this.props.className}` : "";
        return `card round-corners${className}`;
    }

    render() {
        return (
            <div className={this.getClasses()}>
                {this.props.component}
            </div>
        );
    }
}