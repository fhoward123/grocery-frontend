//Remember, for components we always need React and the Component class

import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div className="">
        {/* TODO */}
            <div>
                <h2>
                    {this.props.currentView === 'toGet'
                        ? 'SHOPPING LIST'
                        : 'ITEMS PURCHASED'
                    }
                </h2>
            </div>
            <div className="header">
                <li onClick={() => {this.props.handleView('toGet')}}>
                  Shopping List: {this.props.toGetCount}
                </li>
                {/* COMPLETED */}
                <li onClick = {() => {this.props.handleView('purchased')}}>
                  Items Purchased: {this.props.purchasedItemsCount}
                </li>
            </div>
        </div>
    )
  }
}

export default Header

// import React, { Component } from 'react'
//
// class Header extends Component {
//     render() {
//         console.log('Inside Header:render')
//         return (
//             <div className="header">
//                 <div className="title">
//                     <h2>
//                         {this.props.currentView === 'toGet'
//                             ? 'SHOPPING LIST'
//                             : 'ITEMS PURCHASED'
//                         }
//                     </h2>
//                 </div>
//                 <ul>
//                     <li onClick={() => {this.props.handleView('toGet')}}>
//                         Shopping List: {this.props.toGetCount}
//                     </li>
//                     <li onClick={() => {this.props.handleView('purchased')}}>
//                         Items Purchased: {this.props.purchasedItemsCount}
//                     </li>
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Header;
