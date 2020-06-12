import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'

class Cart extends Component {
    state = {
        cart: localStorage.getItem('cart')
    }


    render() {
        const cart = localStorage.getItem('cart').split(', ')
        console.log("CART: ", cart)
        
        let productList = this.state.products.map((product, index) => {
        return (
            <>
            <div className="center-block text-center">
            <Link key={ index } to={`/products/${product._id}`}>
            Product Name
            </Link>
            <button onClick={() => this.addIdToCart(product._id)}> add to cart</button>
            <ProductCard {...product} />
            </div>
            </>
        )
    })
}

export default Cart;