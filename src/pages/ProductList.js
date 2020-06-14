import React, { Component } from 'react'
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';




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
        if (!currentCart) {
            localStorage.setItem('cart', id)
        } else {
            localStorage.setItem('cart', currentCart + ', ' + id)
        }
    }

    deleteProduct = (id) => {
        let currentCart = localStorage.getItem('cart')
        if (!currentCart) {
            localStorage.removeItem('cart', id)
        } else {
            localStorage.removeItem('cart', currentCart + ', ' + id)
        }
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
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <img src={product.imageUrl} alt="Product"></img>
                                <Link key={index} to={`/products/${product._id}`}>
                                    <h5 className="card-title">{product.name}</h5>
                                </Link>
                                <p className="card-text">{product.description}</p>
                                <button className="btn btn-primary" onClick={() => this.addIdToCart(product._id)}>Add to cart</button>
                                <button className="btn btn-primary" onClick={() => this.deleteProduct()}>Delete Product</button>
                            </div>
                        </div>
                    </div>

                    {/* 
                <div className="center-block text-center">
                <Link key={ index } to={`/products/${product._id}`}>
                <h1>{product.name}</h1>
                </Link>
                <button onClick={() => this.addIdToCart(product._id)}> add to cart</button>
                <ProductCard {...product} />
                </div> */}
                </>
            )
        })

        return (
            <>
            <h1 className="center-block text-center">This is the products page</h1>
            <div className="row">
                {this.state.products ? productList : '...Loading...'}
            </div>
            </>
        )
    }
}

export default ProductList



