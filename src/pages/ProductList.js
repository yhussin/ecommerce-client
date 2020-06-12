import React, { Component } from 'react'
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';
//import addProductToCart from './addProductToCart'


// const addProductToCart = (product, next) => {
//     let cart = []

//     if (typeof window !== undefined) {
//         if (localStorage.getItem('cart')) {
//             cart = JSON.parse(localStorage.getItem('cart'))
//         }
//     cart.push({
//         ...product,
//         count: 1
//     })
//     }
// }



class ProductList extends Component {
    state = {
        products: [], 
        cart: []
    }

    addIdToCart = (id) => {
        //this.setState({cart: [id, ...this.state.cart]})
        let currentCart = localStorage.getItem('cart')
        localStorage.setItem('cart', currentCart + ', ' + id)
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
                <button onClick={() => this.addIdToCart(product._id)}> add to cart</button>
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