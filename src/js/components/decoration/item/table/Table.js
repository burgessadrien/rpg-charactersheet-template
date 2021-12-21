import React from 'react';

/*
    header {
        title,
        mapper
    }
    action {
        icon,
        altIcon,
        handler
    }
*/

// TODO: export table to csv

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.headers = props.headers || [];
        this.actions = props.actions || [];
        this.items = props.items || [];
    }

    render() {
        return (
            <div>
                {this.props.title && (<h1>{this.props.title}</h1>)}
                <table>
                    <thead>
                        <tr>
                            {this.headers.map(({title},i) => (
                                <th key={i} >{title}</th>
                            ))}
                            {this.actions.length > 0 && (
                                <th>Actions</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.items.map((item, i) => (
                            <tr key={i} >
                                {this.headers.map(({mapper},i) => (
                                    <td key={i} >{item[mapper]}</td>
                                ))}
                                {this.actions.length > 0 && (
                                    <td className="card-table__actions">
                                        {this.actions.map(({icon, altIcon, handler}, i) => (
                                            <div key={i} onClick={handler}>
                                                {icon}
                                                {altIcon && (altIcon)}
                                            </div>
                                        ))}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.props.details && (<div>{this.props.details}</div>)}
            </div>
        );
    }
}