import React,{useContext} from 'react'
import {Switch,Route} from 'react-router-dom'
import Products from './products/Products'
import Shop from './products/Shop'

import DetailProduct from './detailProduct/DetailProduct'
import Register from './auth/Register'
import Login from './auth/Login'
import OrderHistory from '../mainpages/history/OrderHistory'
import OrderDetails from '../mainpages/history/OrderDetails'
import Cart from './cart/Cart'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'


import Contact from './contact/Contact'

import NotFound from './utils/NotFound/NotFound'
import {GlobalState} from '../../GlobalState'

export default function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <Switch>
            <Route path="/" exact component={Products}></Route>
            <Route path="/shop" exact component={Shop}></Route>
            <Route path="/login" exact component={isLogged ? NotFound :Login}></Route>
            <Route path="/register" exact component={isLogged ? NotFound :Register}></Route>
            <Route path="/detail/:id" exact component={DetailProduct}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound}></Route>
            <Route path="/category" exact component={isAdmin ? Categories : NotFound}></Route>  
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound}></Route> 
            
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound}></Route>  
  
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound}></Route>  
            <Route path="*" exact component={NotFound}></Route>  
            
        </Switch>
    )
}
