import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './navLinks.css'
// import triangle from '../../img/triangle.svg'

class NavLinks extends Component {
  getOrientation() {
    let orientation =
      window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait'
    return orientation
  }

  onLinkClick(to) {
    const history = createHistory()

    // pathname equals to the last url here, so if the last url and the to value are different, that means user is going to a new location
    if (
      to !== history.location.pathname &&
      this.getOrientation() === 'Portrait'
    ) {
      this.props.onNavClick()
    }
  }

  render() {
    return (
      <nav className={`menu ${this.props.navState}`}>
        {/*<object>
          <embed src={triangle} id="triangle" />
        </object>*/}

        <NavLink
          to="/home"
          onClick={this.onLinkClick.bind(this, '/')}
          activeClassName="activeNav"
        >
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/services"
          onClick={this.onLinkClick.bind(this, '/services')}
          activeClassName="activeNav"
        >
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/portfolio"
          onClick={this.onLinkClick.bind(this, '/portfolio')}
          activeClassName="activeNav"
        >
          <span>Portfolio</span>
        </NavLink>

        {/*<NavLink
          to="/contact"
          onClick={this.onLinkClick.bind(this, '/contact')}
          activeClassName="activeNav"
        >
          <span>Contact</span>
        </NavLink>*/}
      </nav>
    )
  }
}

export default NavLinks
