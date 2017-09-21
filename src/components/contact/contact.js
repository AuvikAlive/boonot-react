import React, { Component } from 'react'

import './contact.css'

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <section className="content">
          <div id="message" />

          <form noValidate autoComplete="off">
            <div className="input input--haruki">
              <input
                className="input__field input__field--haruki"
                type="text"
                id="input-1"
                name="name"
              />
              <label
                className="input__label input__label--haruki"
                htmlFor="name"
              >
                <span className="input__label-content input__label-content--haruki">
                  Name
                </span>
              </label>
            </div>

            <div className="input input--haruki">
              <input
                className="input__field input__field--haruki"
                type="email"
                id="input-2"
                name="email"
              />
              <label
                className="input__label input__label--haruki"
                htmlFor="email"
              >
                <span className="input__label-content input__label-content--haruki">
                  Email
                </span>
              </label>
            </div>

            <div className="input input--haruki">
              <textarea
                className="input__field input__field--haruki"
                id="input-3"
                name="description"
              />
              <label
                className="input__label input__label--haruki"
                htmlFor="description"
              >
                <span className="input__label-content input__label-content--haruki">
                  Description
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-1 btn-1e">
              Done!
            </button>
          </form>

          <a href="tel:0177-6777333" id="tel">
            <i className="fa fa-mobile fa-2x" /> <span>+88 0177-6777333</span>
          </a>

          <ul className="social">
            <li>
              <a href="">
                <i className="fa fa-facebook fa-lg" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Contact
