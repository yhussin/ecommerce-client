import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModel from '../models/product'
const url = `http://localhost:5000`

class Cart extends Component {
    state = {
        cart: localStorage.getItem('cart').split(", "), 
        products: []
    }

    componentDidMount() {
        this.fetchData()
    }
 
    fetchData = () => {
        console.log(JSON.stringify(this.state))

        return fetch (`${url}/products/cartid`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(this.state)
        })
         .then(res => res.json())
         .then(data => this.setState({
             products: data.products
         }))
    }


    removeFromCart = () => {
        return fetch (`${url}/products/:id`, {
            method: "DELETE", 
        })
         .then(res => res.json)
    }

    render() {

        let cartContents = this.state.products.map((product, index) => {

            return (
                <>
                    <div className="center-block text-center">                  
                        <ProductCard {...product} />
                        <button className="btn btn-primary" onClick={() => this.removeFromCart()}>Remove from Cart</button>
                    </div>
                </>
            )
        })

        return (
            <div>
                <h1>This is the cart page</h1>
                { cartContents }
            </div>
        )
    }
}

export default Cart