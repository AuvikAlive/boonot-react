import React, { Component } from 'react'
import NavLinks from '../navLinks/navLinks'

import './navBar.css'
// import logoDarkSimple from '../../img/logoDarkSimple.svg'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navState: false
    }
    this.onNavClick = this.onNavClick.bind(this)
  }

  onNavClick() {
    this.setState({
      navState: !this.state.navState
    })
  }

  render() {
    return (
      <div id="topBar">
        <NavLinks
          onNavClick={this.onNavClick}
          navState={this.state.navState ? 'active' : ''}
        />

        <div
          id="nav-icon3"
          className={this.state.navState ? 'open' : ''}
          onClick={this.onNavClick}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }
}

export default NavBar
