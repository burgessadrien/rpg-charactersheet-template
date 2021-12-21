import React from 'react';

//local components
import Card from './Card';

export default class ImageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card component={(
                <div>
                    {this.props.title && (<h1>{this.props.title}</h1>)}
                    {this.props.image && (<img src={this.props.image} />)}
                    {this.props.description && (<p>{this.props.description}</p>)}
                </div>
            )} />
        );
    }
}