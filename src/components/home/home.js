import React, { Component } from 'react'
import Logo from '../logo/logo'
import Tagline from '../tagline/tagline'
import Type from '../type/type'
import Vivus from 'vivus'

import './home.css'

class Home extends Component {
  // homeAnimations() {
  //   new Promise(resolve =>
  //     setTimeout(_ => {
  //       drawTagline.classList.add('fadeOutDown')
  //       resolve()
  //     }, 3000)
  //   )
  //     .then(_ => {
  //       new Promise(resolve =>
  //         setTimeout(_ => {
  //           drawTagline.style.opacity = '0'
  //           resolve()
  //         }, 500)
  //       )
  //     })
  //     .then(_ => {
  //       new Promise(resolve =>
  //         setTimeout(_ => {
  //           drawLogo.classList.add('tinRightOut')
  //           resolve()
  //         }, 500)
  //       )
  //     })
  //     .then(_ => {
  //       new Promise(resolve =>
  //         setTimeout(_ => {
  //           drawLogo.style.opacity = '0'
  //         }, 1500)
  //       )
  //     })
  // }

  componentDidMount() {
    // let drawLogo = document.getElementById('draw-logo')
    // let drawTagline = document.getElementById('draw-tagline')

    new Vivus('Layer_1', { type: 'delayed', duration: 150 })
    new Vivus('Layer_2', { type: 'oneByOne', duration: 150 })
  }

  render() {
    return (
      <div id="home">
        <section className="content">
          <Logo />
          <Tagline />
          <Type />
        </section>
      </div>
    )
  }
}

export default Home
