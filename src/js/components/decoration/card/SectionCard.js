import React from 'react';

import ContentModel from '../../../model/ContentModel';
import Card from './Card';
import Section from '../item/Section';

export default class SectionCard extends React.Component {
    constructor(props) {
        super(props);
        this.addSection = this.addSection.bind(this);
        if (props.contentModel && props.contentModel.contents.length < 1) {
            props.contentModel.contents.push(this.createContentModel(Section));
        }
    }

    state = {
        contentModel: this.props.contentModel || this.createBaseContentModel()
    }

    createBaseContentModel(component) {
        return new ContentModel({
            className: "section__vertical",
            contents: [this.createContentModel(Section)],
            ContentComponent: component,
            key: this.props.grabNextKeyHandler(),
            verticalSplitLevel: 0
        });
    }

    createContentModel(component) {
        return new ContentModel({
            className: "section__vertical border",
            contents: [],
            ContentComponent: component,
            key: this.props.grabNextKeyHandler(),
            verticalSplitLevel: 0
        });
    }

    addSection() {
        const updatedContentModel = this.state.contentModel;
        updatedContentModel.contents.push(this.createContentModel(Section));
        this.setState({contentModel: updatedContentModel});
    }

    getContentsJSX() {
        return (
            <div>
                {this.state.contentModel.contents.map((contentModel) => {
                    const ContentComponent = contentModel.ContentComponent;
                    return (
                        <ContentComponent 
                            key={contentModel.key} 
                            contentModel={contentModel}
                            grabNextKeyHandler={this.props.grabNextKeyHandler} 
                            modalHandler={this.props.modalHandler}
                        />
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <Card
                className="max-width"
                component={(
                    <div>
                        {this.getContentsJSX()}
                        <div
                            className="section section__horizontal"
                        >
                            <button onClick={this.addSection}>Add Section</button>
                        </div>
                    </div>
                )}
            />
        );
    }
}
