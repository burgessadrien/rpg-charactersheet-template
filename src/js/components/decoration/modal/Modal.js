import React from "react";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: props.header,
            body: props.body,
            footer: props.footer
        }
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">{this.state.header}<span onClick={this.props.modalHandler} className="close">&times;</span></div>
                    <div className="modal-body">{this.state.body}</div>
                    <div className="modal-footer">{this.state.footer}</div>
                </div>W
            </div>
        );
    }
}