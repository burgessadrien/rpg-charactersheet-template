import React from 'react';

import Card from './Card';
import List from '../List';

export default class ListCard extends React.Component {
    constructor(props) {
        super(props);
        this.list = props.list || [];
    }

    render() {
        return (
            <Card className="card-list" component={(
                <div>
                    <h1>Contact Information</h1>
                    <div className="container">
                        <List list={this.list} />
                    </div>
                </div>
            )}/>
        );
    }
}