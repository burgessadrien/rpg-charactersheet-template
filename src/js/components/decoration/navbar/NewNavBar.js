import React from 'react';

import Toggle from './DrawerToggle';

const toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <Toggle click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="toolbar_spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Customers</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;