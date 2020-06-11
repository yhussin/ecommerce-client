import React, { Component } from 'react'
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';





class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        ProductModel.all().then(data => {
            console.log("I am data", data)
            this.setState({ products: data })
        })
    }

    render() {
        let productList = this.state.products.map((product, index) => {
            return (
                <>
                <Link key={ index } to={`/products/${product._id}`}>
                    Product Name
                </Link>
                <Link to="/cart" > - add to cart</Link>
                <ProductCard {...product} />
                <br/>
                </>
            )
        })
    
        return (
            <div>
            <h1>This is the products page</h1>
            {this.state.products ? productList: '...Loading...'}
            <li></li>
            </div>
        )
    }
}

export default ProductList 