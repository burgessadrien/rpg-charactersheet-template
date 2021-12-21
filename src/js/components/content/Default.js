import React from 'react';

import Dog from '../../../assets/images/dog-done.jpg';
import Card from '../decoration/card/Card';
import Input from '../decoration/item/input/Input';
import ImageCard from '../decoration/card/ImageCard';

import ContentModel from '../../model/ContentModel'
import Section from '../decoration/item/Section';
import SectionCard from '../decoration/card/SectionCard';

export default class DefaultContent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        contentModel: this.props.contentModel || this.createBaseContentModel()
    }

    createBaseContentModel(component) {
        return new ContentModel({
            className: "section__vertical",
            contents: [this.createContentModel(SectionCard), this.createContentModel(SectionCard)],
            ContentComponent: component,
            key: this.props.grabNextKeyHandler(),
            verticalSplitLevel: 0
        });
    }

    createContentModel(component) {
        return new ContentModel({
            className: "section__vertical",
            contents: [],
            ContentComponent: component,
            key: this.props.grabNextKeyHandler(),
            verticalSplitLevel: 0
        });
    }

    render() {
        return (
            <div className="content">
                {this.state.contentModel.contents.map((contentModel) => {
                    const ContentComponent = contentModel.ContentComponent;
                    return (
                        <ContentComponent 
                            key={contentModel.key} 
                            contentModel={contentModel} 
                            grabNextKeyHandler={this.props.grabNextKeyHandler} 
                            modalHandler={this.props.modalHandler} 
                        />)
                })}
                <ImageCard title="Welcome!" image={Dog} description="Default Content" />
                <Input label="This is an input" type="text" placeHolder="Fuck off" />
            </div>
        );
    }
}