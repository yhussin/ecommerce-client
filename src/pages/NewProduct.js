import React, { Component } from 'react';
import ProductModel from '../models/product';

class NewProduct extends Component {
    state = {
        name: '',
        description: '',
        imageUrl: '',
        price: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()

        ProductModel.create(this.state)
            .then(data => {
                //redirect back to ProductList page
                // pushing a path, not into an array
                this.props.history.push('/products')
            })
    }

    handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
    }

    render() {
        return (
            <>

            <div className="center-block text-center">
            <h2>New Product:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-input">
                        <label htmlFor="description">Description: </label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                    </div>


                    <div className="form-input">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            name="imageUrl"
                            id="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-input">
                        <label htmlFor="price"> Price: $</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>

                    <input type="submit" value="Add new product" />
                </form>
            </div>
            </>
        )
    }
}

export default NewProduct;