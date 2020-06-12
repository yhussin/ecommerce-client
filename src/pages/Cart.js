import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'

class Cart extends Component {
    state = {
        cart: localStorage.getItem('cart')
    }


    render() {
        const cart = localStorage.getItem('cart')
        console.log(cart)

        return (
        <div>
        {this.state.cart ? < ProductCard {...this.state.cart} /> : 'Loading...'}
        </div>
        )
    }
}

export default Cart;