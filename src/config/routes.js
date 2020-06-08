import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductList from '../pages/ProductList.js'

export default (
   <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/products' component={ ProductList } />
   </Switch> 
)