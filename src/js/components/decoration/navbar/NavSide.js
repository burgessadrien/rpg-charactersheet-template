// Navigation Side Drawer
import React from 'react';

import ContentPaths from '../../ContentPaths';
import NavList from './NavList';

export default class NavSide extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navside">
                <NavList items={ContentPaths} />
            </div>
        );
    }
}