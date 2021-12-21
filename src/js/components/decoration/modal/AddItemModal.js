import React from 'react';
import Select from 'react-select';

import {capitalizeFirstLetter} from "../../../common/Utils";
import Modal from './Modal';
import ItemList from '../item/ItemList';

export default class AddItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.getItemSelectOptions = this.getItemSelectOptions.bind(this);
        this.onSelectedItemChange = this.onSelectedItemChange.bind(this);
    }

    state = {
        ItemOptions: undefined
    }

    getItemSelectOptions() {
        return Object.keys(ItemList).map(type => {
            return {
                value: type,
                label: capitalizeFirstLetter(type)
            }
        })
    }

    onSelectedItemChange(option) {
        this.setState({ItemOptions: ItemList[option.value]});
        console.log(this.state)
    }

    render() {
        const ItemOptions = this.state.ItemOptions
        return (
            <Modal 
                modalHandler={this.props.modalHandler}
                header={(<h2>Add Item</h2>)}
                body={(
                    <div>
                        <label htmlFor="item-list">Item List</label>
                        <Select 
                            name="item-list"
                            options={this.getItemSelectOptions()}
                            onChange={this.onSelectedItemChange}
                        />
                        {!!this.state.ItemOptions && (
                            <div><ItemOptions /></div>
                        )}
                    </div>
                )}
                footer={(
                    <div>This is the footer</div>
                )}
            />
        );
    }
}