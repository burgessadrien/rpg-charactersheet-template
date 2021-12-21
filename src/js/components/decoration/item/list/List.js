import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.list || this.list;
    }

    getClasses() {
        const className = this.props.className ? ` ${this.props.className}` : "";
        return `list${className}`;
    }

    render() {
        return (
            <ul className={this.getClasses()}>
                {this.list.map((item, i) => {
                return (<li key={i}>{item}</li>);
                })}
            </ul>
        );
    }
}