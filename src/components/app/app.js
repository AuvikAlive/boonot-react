import React, { Component } from 'react'
// import { HashRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../navBar/navBar'
import Routes from '../routes/routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes />
        </div>
      </Router>
    )
  }
}

export default App
