import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './app.css'
import Home from '../Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Area from '../Area/Area'
import Profile from '../Profile'
import Addproduct from '../Product/Addproduct'
import Logout from '../Logout/Logout'

export default class App extends Component {
  render () {
    return (
      <div className="app pure-g">
        <Logout />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/neighbourhood' component={Area} />
        <Route path='/addproducts' component={Addproduct}/>
        <Route path='/profile' component={Profile} />
      </div>
    )
  }
}
