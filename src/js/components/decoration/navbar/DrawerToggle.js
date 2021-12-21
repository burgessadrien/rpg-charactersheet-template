import React from 'react';

import '../../../assets/styles/Toggle.css';

const toggle = (props) => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
        <div className="toggle-button__line"></div>
    </button>
);

export default toggle;