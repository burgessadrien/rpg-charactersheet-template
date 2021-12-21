import React from 'react';

import AddItemModal from '../modal/AddItemModal';
import ContentModel from '../../../model/ContentModel';

export default class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentModel: !!props.contentModel ? props.contentModel : new ContentModel({ContentComponent: Section})
        }
        this.getClasses = this.getClasses.bind(this);        
        this.splitSection = this.splitSection.bind(this);
        this.getChildObject = this.getChildObject.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.showAddItem = this.showAddItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    getChildObject(vLevel) {
        return new ContentModel({
            className: "section__vertical border",
            contents: [],
            ContentComponent: Section,
            key: this.props.grabNextKeyHandler(),
            verticalSplitLevel: vLevel
        });
    }

    splitSection(event) {
        const direction = event.target.value;
        const contentModel = this.state.contentModel;
        let vLevel = contentModel.verticalSplitLevel;
        if (direction === "vertical" && vLevel < 4) {
            vLevel = vLevel + 1;
        } else {
            return;
        }
        this.setState((prevState) => {
            const contentModel = prevState.contentModel;
            contentModel.className = "section__horizontal";
            contentModel.contents = [
                this.getChildObject(vLevel), 
                this.getChildObject(vLevel)
            ];
            return {
                contentModel: contentModel
            }
        });
    }

    isEmpty() {
        return !!this.state.contentModel && this.state.contentModel.contents.length < 1;
    }

    showAddItem() {
        this.props.modalHandler({ModalComponent: AddItemModal});
        this.addItem();
    }

    addItem() {
    }

    getEmptySection() {   
        return (
            <div className={this.getClasses("section__empty")} key={this.state.contentModel.key} >
                {this.state.contentModel.verticalSplitLevel < 2 && (<button onClick={this.splitSection} value="vertical" >Vertical Split</button>)}
                <button onClick={this.showAddItem}>Add Item</button>
            </div>
        );
    }

    getClasses(className) {
        let classes = `section`;
        if (!!this.state.contentModel.className) {
            classes = `${classes} ${this.state.contentModel.className}`;
        }
        if (!!className) {
            classes = `${classes} ${className}`;
        }
        return classes;
    }

    render() {
        return this.isEmpty() ? this.getEmptySection() : (
            <div className="section" >
                {this.isEmpty() && this.getEmptySection()}
                {!this.isEmpty() && (
                    <div className={this.getClasses()}>
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
                )}
            </div>
        );
    }
}