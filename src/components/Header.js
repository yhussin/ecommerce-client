import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/cart'}> Cart <i className="fa fa-shopping-cart"></i></Link>
            </nav>
        )
    }
}

export default Header