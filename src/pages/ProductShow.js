import React, { Component } from 'react';
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard';

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

    render() {
        return (
            <div>
                {this.state.product ? < ProductCard {...this.state.product} /> : 'Loading...'}
            </div>
        )
    }
}

export default ProductShow;