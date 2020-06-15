import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModel from '../models/product'
const url = `http://localhost:5000`

class Cart extends Component {

    state = {
        products: []
    }

    // deleteProduct = (id) => {
    //     let currentCart = localStorage.getItem('cart')
    //     if (!currentCart) {
    //         localStorage.removeItem('cart', id)
    //     } else {
    //         localStorage.removeItem('cart', currentCart + ', ' + id)
    //     }
    // }

    componentDidMount() {


        let cart = []
        if (localStorage.getItem('cart')) {
            cart = localStorage.getItem('cart').split(", ")
        }
        this.setState((prevState) => {
            return {
                ...prevState,
                cart: cart
            }
        },
            this.fetchData
        )
    }

    fetchData = () => {
        console.log(JSON.stringify(this.state))

        return fetch(`${url}/products/cartid`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => this.setState((prevState) => {
                return {
                    ...prevState,
                    products: data.products
                }
            }))
    }



    render() {

        let cartContents = this.state.products.map((product, index) => {

            return (
                <>
                    <div className="center-block text-center">
                        <ProductCard {...product} />
                        <button className="btn btn-primary" onClick={() => this.deleteProduct()}>Remove from Cart</button>
                    </div>
                </>
            )
        })

        return (
            <div>
                <h1>Shopping Cart:</h1>
                {cartContents}
            </div>
        )
    }
}

export default Cart