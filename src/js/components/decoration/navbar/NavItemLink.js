// Navigation Bar Item

import React from 'react'
import {NavLink} from 'react-router-dom';

//local components

export default class NavItemLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-link">
                <NavLink to={this.props.path} activeClassName="" >{this.props.label}</NavLink>
            </li>
        );
    }
}