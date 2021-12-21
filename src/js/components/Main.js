// Main Page

import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Modal from "./decoration/modal/Modal";
import NavSide from './decoration/navbar/NavSide';
import Navbar from './decoration/navbar/NavBar';
import Content from './Content';
import Footer from './Footer';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.modalHandler = this.modalHandler.bind(this);
        this.grabNextKey = this.grabNextKey.bind(this);
    }

    state = {
        sideDrawerOpen: false,
        modalToggle: false,
        ModalComponent: Modal,
        key: 1
    };

    drawerToggleClickHandler(event) {
        event.stopPropagation();
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        });
    }

    modalHandler({ModalComponent}) {
        this.setState((prevState) => ({
            modalToggle: !prevState.modalToggle,
            ModalComponent
        }))
    }

    grabNextKey() {
        const key = this.state.key;
        this.state.key += 1;
        return key;
    }

    render() {
        const ModalType = this.state.ModalComponent;
        return (
            <div className="main">
                {this.state.modalToggle && (<ModalType modalHandler={this.modalHandler} />)}
                <Router>
                    {this.state.sideDrawerOpen ? <NavSide /> : null}
                    <Navbar toggleHandler={this.drawerToggleClickHandler} />
                    <Content
                        grabNextKeyHandler={this.grabNextKey}
                        modalHandler={this.modalHandler}
                    />
                    <Footer />
                </Router>
            </div>
        );
    }
}
