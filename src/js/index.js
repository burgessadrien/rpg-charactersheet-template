'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

// local components
import Main from './components/Main';

// importing css
import 'normalize.css/normalize.css';
import '../assets/styles/styles.scss';



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Main />
        );
    }
}

ReactDOM.render(
  (
    <App />
  ),document.getElementById('root')
);
