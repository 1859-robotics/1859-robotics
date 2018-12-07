import React from 'react'
import anime from 'animejs'

import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Head from "../components/Head.js"
import Animate from '../components/Animate.js'
import Icon from '../components/Icon.js'
import config from "../config/data.config.js"
import "../style/index.sass"

const are = ["inventors", "dreamers", "the future", "engineers", "students", "leaders", config.name]

export default class Index extends React.Component {
  static async getInitialProps() {
    return {}
  }

  constructor(props) {
    super(props)
    this.state = {
      are: are[Math.floor(Math.random() * are.length)],
      in: true
    }
  }

  render = _ => (
    <div classname="home">
      <Head />
      <Header />
      <div className="hero">
        <div className="bg" style={{
          backgroundImage: `url("static/imgs/hero-1.jpeg")`
        }}></div>
        <img src="static/logo-white.svg" alt="logo"/>
        <h1><span>We are&nbsp;</span>
          <Animate enter={e => {
            anime({
              targets: e,
              maxWidth: ["0", "500px"],
              easing: 'easeInOutCubic',
              duration: 500
            })
            setTimeout(_ => this.setState({
              in: false
            }), 3000)
          }} exit={e => {
            anime({
              targets: e,
              maxWidth: ["500px", "0"],
              easing: 'easeInOutCubic',
              duration: 500
            })
            setTimeout(_ => this.setState({
              in: true,
              are: are[(are.indexOf(this.state.are) + 1) % are.length ],
            }), 500)
          }}
          in={ this.state.in }
          timeout={ 100 }>
            <span style={{ maxWidth: 0 }} className="are">
              { this.state.are }
            </span>
          </Animate>
        </h1>
        <div className="latest">
        <Animate enter={{ translateY: [30, 0], opacity: [0, 1], duration: 500}} timeout={ 200 }>
          <div className="card" style={{opacity: 0, transform: "translateY(30px)"}}>
            <h3>The Latest: </h3>
            <h1>{ config.latest.title }</h1>
          </div>
        </Animate>
        </div>
      </div>
      <section className="about">
        <Animate enter={e => ({
          targets: e.childNodes,
          delay: (el, i) => 100 * i,
          duration: 500,
          translateY: [ -30, 0 ],
          opacity: [ 0, 1 ],
        })} scroll={ true } scrollTarget=".about .cards" offset={300}>
          <div className="cards">
            <a className="card" href="#">
              <Icon icon="edit" />
              <h2>Blog</h2>
              <p>Hear our latest musings on anything and everything VEX!</p>
            </a>
            <a className="card" href="#">
              <Icon icon="people" />
              <h2>Teams</h2>
              <p>Meet the teams that make up this organization!</p>
            </a>
            <a className="card" href="/about">
              <Icon icon="public" />
              <h2>About Us</h2>
              <p>Learn who this organization is!</p>
            </a>
          </div>
        </Animate>
      </section>
      <section className="brief">
        <div>
          <h1>Who we are</h1>
          <p>{ config.orgDesc }</p>
        </div>
      </section>
      <section className="sponsors">
        <h1>Our Sponsors</h1>
        <p>A special thanks to the genorous supporters that make this possible. <br/> We are proudly sponsored by: </p>
        <div className="inner">
        <Animate enter={e => ({
          targets: e.childNodes,
          delay: (el, i) => 100 * i,
          duration: 500,
          scale: [ 0.8, 1 ],
          opacity: [ 0, 1 ],
        })} scroll={ true } scrollTarget=".sponsors .logos" offset={100}>
          <div className="logos">
            { config.sponsors.map((sponsor, i) => (
              <a href={ sponsor.link } key={ i }
                 style={{ opacity: 0, transform: "scale(0.8)" }}>
                <img src={ sponsor.logo } alt={ sponsor.name } />
              </a>
            ))}
          </div>
        </Animate>
        </div>
      </section>
      <section className="contact">
        <h1>Contact Us</h1>
        <p>We'll get back soon, we are happy to talk!</p>
        <div className="cols">
          <div className="col">
            <h2>Send us a message</h2>
            <input type="text" placeholder="your name"/>
            <input type="text" placeholder="your email"/>
            <textarea placeholder="what do you want to talk about?"></textarea>
            <button>Send it</button>
          </div>
          <div className="col">
            <h2>Or find us at:</h2>
            { config.externalContacts.map((contact, i) => (
              <a href={ contact.link } key={ i }>
                { contact.name }
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
