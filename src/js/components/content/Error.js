import React from 'react';

export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                404 Error!
            </div>
        );
    }
}