import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './containers/Home'
import About from './containers/About'
import Order from './containers/order/Order'
import Product from './containers/product/product'
import ProductEdit from './containers/product/productEdit'
import NotFound from './containers/error/NotFound'

export default class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/orders' component={Order} />

        <Route exact path='/products' component={Product} />
        <Route exact path='/products/add' component={ProductEdit} />
        <Route exact path='/products/edit/:id' component={ProductEdit} />

        {/* Page NotFound */}
        <Route component={NotFound} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

