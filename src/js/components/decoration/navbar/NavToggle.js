import React from 'react';

// imported components
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavToggle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-toggle" onClick={this.props.toggleHandler} >
                <FontAwesomeIcon icon={faBars} />
            </div>
        );
    }
};