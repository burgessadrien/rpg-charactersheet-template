import React from 'react';

import Card from './Card';

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.state = {
            quantity: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            quantity: parseInt(event.target.value || 0, 10)
        });
    }

    addItem(event) {
        event.preventDefault();
        this.props.addItemHandler({
            id: this.item.id,
            name: this.item.name,
            price: this.item.price,
            quantity: this.state.quantity
        }, this.item.price);
    }

    render() {
        return (
            <Card 
                component={(
                    <form>
                        <div className="item-info">
                            {this.item.name && (<h1>{this.item.name}</h1>)}
                            {this.item.image && (<img src={this.item.image} />)}
                            {this.item.description && (<p>{this.item.description}</p>)}
                        </div>
                        <div className="item-request">
                            <p>Add to cart</p>
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input name="quantity" type="number" step="1" min="0" placeholder="0" onChange={this.handleChange}/>
                                <button type="submit" onClick={this.addItem}>Add</button>
                            </div>
                        </div>
                    </form>
                )}
            />
        );
    }
}