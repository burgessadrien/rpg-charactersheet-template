import React from 'react';

import Card from '../decoration/card/Card';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <p>About Page</p>
                <Card />
                <Card />
            </div>
        );
    }
}