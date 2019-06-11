import React, {Component} from 'react';

/// components ///
import Header from './components/Header'
import ItemList from './components/ItemList'
import Form from './components/Form'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'toGet',
      purchasedItems: [],
      itemsToGet: [],

    }
    this.fetchItems = this.fetchItems.bind(this)
    this.handleView = this.handleView.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.sortItems = this.sortItems.bind(this)
    this.setItems = this.setItems.bind(this)
    this.handleCreateTask = this.handleCreateTask.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

  }
  fetchItems() {
      fetch('https://grocery-backend-api.herokuapp.com/items')
       .then( data => data.json())
       .then( jData => {
         console.log('this is jData', jData)
         this.sortItems(jData)
       })
    }

    handleView(view) {
        console.log('Inside App:handleView: ', view)
        this.setState({
            currentView: view,
        })
    }

    // adding updating items
    handleCreateTask(item) {
        console.log('Inside handleCreateTask (item): ', item)
      fetch('https://grocery-backend-api.herokuapp.com/items', {
        body:JSON.stringify(item),
        method:'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
        .then( addedItem => addedItem.json())
        .then( jData => {
          this.updateArray(jData[0], 'itemsToGet')
          this.handleView('toGet')
        })
        .catch( err => console.log('this is err', err))
    }

  // handle checking of item
  handleCheck(item, arrayIndex, currentArray) {
    console.log('Inside App:handleCheck (PUT)')
    console.log('Inside App:handleCheck (item): ', item)
    console.log('Inside App:handleCheck (arrayIndex): ', arrayIndex)
    console.log('Inside App:handleCheck (currentArray): ', currentArray)

    // this toggles the completed value
    console.log('purchased bool before: ', item.purchased)
    item.purchased === 'f' ? item.purchased = true : item.purchased = false
    // item.purchased = !item.purchased
    console.log('purchased bool AFTER: ', item.purchased)
    console.log('Inside App:handleCheck (item): ', item)
    // now we make our fetch call to PUT (update)
    fetch(`https://grocery-backend-api.herokuapp.com/items/${item.id}`, {
      body:JSON.stringify(item),
      method:'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then( updatedItem => updatedItem.json())
    .then(jData => {
        console.log('Inside handleCheck (jData): ', jData)
      this.removeFromArray(currentArray, arrayIndex)
      if(currentArray === 'itemsToGet') {
        this.updateArray(jData[0], 'purchasedItems')
      } else {
        this.updateArray(jData[0], 'itemsToGet')
      }
    })
    .catch(err => console.log('this is error from handleCheck', err))
  }

    // remove item from list
    removeFromArray(array, arrayIndex){
      this.setState(prevState => {
        prevState[array].splice(arrayIndex, 1)
        return {
          [array]: prevState[array]
        }
      })
    }

    handleDelete(itemId, arrayIndex, currentArray) {
        console.log('Inside App:handleDelete (itemId): ', itemId)
        console.log('Inside App:handleDelete (arrayIndex): ', arrayIndex)
        console.log('Inside App:handleDelete (currentArray): ', currentArray)
        fetch(`https://grocery-backend-api.herokuapp.com/items/${itemId}`, {
            method: 'DELETE'
        })
        .then(data => {
            this.removeFromArray(currentArray, arrayIndex)
        })
        .catch(err => console.log('ERROR in handleDelete: ', err))
    }

    updateArray(task, array) {
        console.log('Inside App:updateArray (task): ', task)
        console.log('Inside App:updateArray (array): ', array)
        // prevState is a copy of the currentState
        this.setState( prevState => {
            // PrevState['todoTasks'].push(task)
            prevState[array].push(task)
            console.log('Inside App:updateArray (prevState): ', prevState)
            // We are returning an object, thus the return {}
            return {
                [array]: prevState[array]
            }
        })
    }

    // // updateArray
    //   updateArray(task,array){
    //   this.setState( prevState => ({
    //     [array]:[...prevState[array],task]
    //   }))
    // }

    // sorting items
    sortItems(items) {
      // default counter variables
      let purchasedItems = []
      let itemsToGet = []
      // counter loop
      items.forEach((item) => {
        // if task is completed, push it to the completedTasks array
        if(item.purchased === 't') {
          purchasedItems.push(item)
        } else { // otherwise, push it to the todoTasks array
          itemsToGet.push(item)
        }
      })

      this.setItems(purchasedItems, itemsToGet)
    }

    setItems(purchased, toGet) {
    	this.setState({
    		purchasedItems: purchased,
    		itemsToGet: toGet
    	})
    }

      componentDidMount(){
        this.fetchItems()
      }

  render(){
      return (
        <div className="main-container">
            <h1 className="mainTitle">Grocery List App</h1>
            <h2 className="slogan">You will never forget it again </h2>
              <Header
                  currentView={this.state.currentView}
                  handleView={this.handleView}
                  toGetCount={this.state.itemsToGet.length}
                  purchasedItemsCount={this.state.purchasedItems.length}
               />
              <Form
                  handleCreateTask={this.handleCreateTask}
              />
              <ItemList
                  currentView={this.state.currentView}
                  purchasedItems={this.state.purchasedItems}
                  itemsToGet={this.state.itemsToGet}
                  handleView={this.handleView}
                  handleDelete={this.handleDelete}
                  handleCheck={this.handleCheck}
              />
        </div>
      );
  }
}

export default App;
