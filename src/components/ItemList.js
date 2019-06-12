import React, { Component } from 'react'
import Items from './Items'

class ItemList extends Component {
    render() {
        console.log('this: ', this)
        return (
            <div className="item-list">
                { this.props.currentView === 'toGet'
                   ?
                    <div>
                        {this.props.itemsToGet.map( (item, index) => {
                            return (
                                <Items
                                    key={index}
                                    item={item}
                                    handleCheck={this.props.handleCheck}
                                    arrayIndex={index}
                                    currentArray='itemsToGet'
                                    handleDelete={this.props.handleDelete}
                                />
                            )
                        })}
                    </div>
                   :
                    <div>
                        {this.props.purchasedItems.map( (item, index) => {
                            return (
                                <Items
                                    key={index}
                                    item={item}
                                    handleCheck={this.props.handleCheck}
                                    arrayIndex={index}
                                    currentArray='purchasedItems'
                                    handleDelete={this.props.handleDelete}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default ItemList
