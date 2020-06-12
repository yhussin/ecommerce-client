import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/cart'} className="fa fa-shopping-cart">Cart</Link>
                <Link to={'/products/new'}>Add new product</Link>
            </nav>
        )
    }
}

export default Header