import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grocery: '',
            brand: '',
            size: '',
            quantity: '',
            purchased: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleCreateTask(this.state)
        this.clearForm()
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    clearForm = () => {
        console.log('Inside clearForm')
        this.props.displayForm(false)
        this.setState({
            grocery: '',
            brand: '',
            size: '',
            quantity: '',
            purchased: false,
            hideForm: true,
        })
    }

    render () {
        return (
            <div className="form" >
                { ! this.state.hideForm
                    ?
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
                           placeholder=" quantity"
                        />
                        <button type="submit"
                            className="submit-button">
                            <i className="fas fa-plus"></i>
                        </button>
                    </form>
                    : <b/>
                }
            </div>
        )
    }
}

export default Form;
