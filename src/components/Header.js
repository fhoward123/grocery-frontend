//Remember, for components we always need React and the Component class
import React, { Component } from 'react'

class Header extends Component {
    render() {
        console.log("Header render (hideForm): ", this.props.hideForm)
        return (
            <div className="">
                {/* Grocery List */}
                <div className="header">
                    {this.props.currentView === 'toGet'
                        ?
                        <div className="head-wrap">
                            <li className="shoppingList" onClick={() => {this.props.handleView('toGet')}}>
                                <span className="current bold">Shopping List: {this.props.toGetCount}</span>
                            </li>
                            <li className="purchasedItems" onClick = {() => {this.props.handleView('purchased')}}>
                                Purchased Items: {this.props.purchasedItemsCount}
                            </li>
                            { this.props.hideForm
                                ?
                                <button type="submit"
                                    className="submit-button"
                                    onClick={() => {
                                        this.props.displayForm(true)
                                    }}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                : <b/>
                            }
                        </div>
                        :
                        <div className="head-wrap">
                            <li className="shoppingList" onClick={() => {this.props.handleView('toGet')}}>
                                Shopping List: {this.props.toGetCount}
                            </li>
                            <li className="purchasedItems" onClick = {() => {this.props.handleView('purchased')}}>
                                <span className="current bold">Purchased Items: {this.props.purchasedItemsCount}</span>
                            </li>
                            { this.props.hideForm
                                ?
                                <button type="submit"
                                    className="submit-button"
                                    onClick={() => {
                                        this.props.displayForm(true)
                                    }}>
                                    <i className="fas fa-plus"></i>
                                </button>
                                : <b></b>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Header
