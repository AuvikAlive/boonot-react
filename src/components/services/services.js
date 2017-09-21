import React, { Component } from 'react'

import './services.css'

class Services extends Component {
  constructor(props) {
    super(props)

    this.state = {
      serviceList: [
        {
          name: 'Web Design & Development',
          opacity: 0
        },
        {
          name: 'Responsive Web Design',
          opacity: 0
        },
        {
          name: 'MERN Stack Web Application Development',
          opacity: 0
        },
        {
          name: 'WordPress development',
          opacity: 0
        },
        {
          name: 'Drupal Development',
          opacity: 0
        },
        {
          name: 'Cross Platform Mobile App Development',
          opacity: 0
        },
        {
          name: 'Search Engine Optimization',
          opacity: 0
        },
        {
          name: 'Domain & Hosting Solution',
          opacity: 0
        },
        {
          name: 'Social Media Marketing',
          opacity: 0
        },
        {
          name: 'Web Performance Optimization',
          opacity: 0
        },
        {
          name: 'Facebook App Development',
          opacity: 0
        }
      ]
    }
  }

  setOpacity(index) {
    const newList = this.state.serviceList
    newList[index].opacity = 1

    this.setState({
      serviceList: newList
    })
  }

  render() {
    return (
      <div id="services">
        <section className="content">
          <ul className="services">
            {this.state.serviceList.map((value, index) =>
              <li
                onAnimationEnd={this.setOpacity.bind(this, index)}
                key={index}
                className={index % 2 === 0 ? 'bounceInLeft' : 'bounceInRight'}
                style={{
                  animationDelay: `${index * 100}ms`,
                  opacity: value.opacity
                }}
              >
                {value.name}
              </li>
            )}
          </ul>
        </section>
      </div>
    )
  }
}

export default Services
