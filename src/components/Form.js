import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grocery: '',
            brand: '',
            size: '',
            quantity: '',
            purchased:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

 handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateTask(this.state)
    this.clearForm()
 }

 handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
 }

 clearForm = () => {
   this.setState({
       grocery: '',
       brand: '',
       size: '',
       quantity: '',
       purchased:false
   })
 }

 render () {
   return (
     <div className="form" >
        <form onSubmit={this.handleSubmit}>
         <input type='text'
             id='grocery'
           value={this.state.grocery}
           onChange={this.handleChange}
           placeholder="grocery item"
         />
         <input type='text'
             id='brand'
           value={this.state.brand}
           onChange={this.handleChange}
           placeholder="item brand"
         />
         <input type='text'
             id='size'
           value={this.state.size}
           onChange={this.handleChange}
           placeholder="size"
         />
        <input type='number'
             id='quantity'
           value={this.state.quantity}
           onChange={this.handleChange}
           placeholder="quantity"
         />
         <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
        </form>
      </div>
   )
 }
}

export default Form;
