import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList.js'
import ProductShow from '../pages/ProductShow'
import NewProduct from '../pages/NewProduct'
import EditProduct from '../pages/EditProduct'
import Cart from '../pages/Cart'

export default (
   <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/products' component={ ProductList } />
       <Route path='/products/new' component={ NewProduct } />
       <Route path='/products/update/' component={ EditProduct } />
       <Route path='/products/:id' component={ ProductShow } />
       <Route path='/cart' component={ Cart } />
   </Switch> 
)