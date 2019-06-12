import React, { Component } from 'react'

class Items extends Component {
    render() {
        console.log('Inside Items:render: (this.props)', this.props)
        return(
            <div className="items">
                <div className="grocery-item">
                    <h4>
                        <span>{this.props.item.grocery}</span>
                        <div className="item-actions">
                            {this.props.item.purchased === 't'
                               ? <i
                                 className="incomplete far fa-check-square"
                                 onClick={() => {this.props.handleCheck(this.props.item, this.props.arrayIndex, this.props.currentArray)}}
                                 ></i>
                               : <i
                                 className="complete far fa-square"
                                 onClick={() => {this.props.handleCheck(this.props.item, this.props.arrayIndex, this.props.currentArray)}}
                                 ></i>
                            }
                            <i
                                className="delete far fa-trash-alt"
                                onClick={ () => { this.props.handleDelete(this.props.item.id, this.props.arrayIndex, this.props.currentArray) }}
                            ></i>
                        </div>
                    </h4>
                    <ul className="itemInfo">
                        <li>
                            <span className="bold"> Brand: </span>
                            <span className="specifics">{this.props.item.brand}</span>
                        </li>
                        <li>
                            <span className="bold"> Size: </span>
                            <span className="specifics">{this.props.item.size}</span>
                        </li>
                        <li>
                            <span className="bold"> Quantity: </span>
                            <span className="specifics">{this.props.item.quantity}</span>
                        </li>
                   </ul>
                </div>
            </div>
        )
    }
}

export default Items
