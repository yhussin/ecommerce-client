import React, { Component } from 'react';
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

class ProductShow extends Component  {
    state = {
        product: {}, 
        currentProductId: this.props.match.params.id
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ProductModel.show(this.state.currentProductId)
         .then(data => this.setState({product: data}))
    }

    removeItem = () => {
        ProductModel.removeItem(this.state.currentProductId)
         .then(data => this.props.history.push('/products'))
         .catch(err =>  console.log(err))
    }
    

    render() {
        return (
            <div className="center-block text-center">
                {this.state.product ? < ProductCard {...this.state.product} /> : 'Loading...'}
                <button className="btn btn-primary" onClick={this.removeItem}>DELETE</button>
                <Link to={`/products/update/${this.state.product.id}`}>
                                        <button className="btn btn-primary">
                                            Edit Item
                                            </button>
                                        </Link>

            </div>
        )
    }
}

export default ProductShow;