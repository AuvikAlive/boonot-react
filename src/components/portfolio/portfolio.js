import React, { Component } from 'react'

import './portfolio.css'

import goopybagha from '../../img/portfolio/goopybagha.jpg'
import joyeeta from '../../img/portfolio/joyeeta.jpg'
import tito from '../../img/portfolio/tito.PNG'
import rong from '../../img/portfolio/rong.jpg'
import sketchbookbd from '../../img/portfolio/sketchbookbd.jpg'
import galibazim from '../../img/portfolio/galibazim.PNG'
import golf from '../../img/portfolio/golf.PNG'
import sharp from '../../img/portfolio/sharp.PNG'
import orchidales from '../../img/portfolio/orchidales.jpg'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import $ from 'jquery'
// import 'imports?jQuery=jquery!owl.carousel'
import 'owl.carousel'

class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          imageSource: goopybagha,
          link: 'http://www.goopybagha.com/',
          title: 'Goopy Bagha Productions Limited'
        },
        {
          imageSource: joyeeta,
          link: 'http://www.joyeetaroy.com/',
          title: 'Joyeeta Roy'
        },
        {
          imageSource: tito,
          link: 'http://www.ashrafulalamtito.com/',
          title: 'Ashraful Alam Tito'
        },
        {
          imageSource: rong,
          link: 'http://www.rongphotography.com/',
          title: 'Rong Event Services'
        },
        {
          imageSource: sketchbookbd,
          link: 'http://www.sketchbookbd.com/',
          title: 'SketchbookBD'
        },
        {
          imageSource: galibazim,
          link: 'http://www.galibazim.com/',
          title: 'Galib Azim'
        },
        {
          imageSource: golf,
          link: 'http://www.golfandgrace.com/',
          title: 'Golf & Grace'
        },
        {
          imageSource: sharp,
          link: 'http://sharpdressed.net/',
          title: 'Sharpdressed'
        },
        {
          imageSource: orchidales,
          link: 'http://orchidales.com/',
          title: 'Orchidales Events and Photography'
        }
      ]
    }
  }

  componentDidMount() {
    $('.owl-carousel').addClass('fadeIn')
    $('.owl-carousel').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop: true,
      navText: [
        '<svg class="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path></svg>',
        '<svg class="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path></svg>'
      ]
    })
  }

  render() {
    return (
      <div id="portfolio">
        <section className="content">
          <div className="owl-carousel">
            {this.state.items.map((value, index) =>
              <div key={index}>
                <img src={value.imageSource} alt="" />
                <a href={value.link} target="_blank" rel="noopener noreferrer">
                  <h1>
                    {value.title}
                  </h1>
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default Portfolio
