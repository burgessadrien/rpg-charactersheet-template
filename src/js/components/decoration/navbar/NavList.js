import React from 'react'

//local components
import NavItemLink from './NavItemLink';

export default class NavList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="nav-list">
                {this.props.items.map(({path, label, isMenuItem}, i) => {
                    if (isMenuItem) {
                        return (<NavItemLink path={path} label={label} key={i} />);
                    }
                })}    
            </ul>
        );
    }
}