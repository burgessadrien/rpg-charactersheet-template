import React from 'react';

import Card from '../decoration/card/Card';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <p>Menu Page</p>
                <Card />
                <Card />
            </div>
        );
    }
}