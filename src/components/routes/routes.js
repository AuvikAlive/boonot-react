import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../home/home'
import Services from '../services/services'
import Portfolio from '../portfolio/portfolio'
// import Contact from '../contact/contact'

import './routes.css'

const Routes = () =>
  <div className="view">
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      {/*<Route path="/contact" component={Contact} />*/}
      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  </div>

export default Routes
