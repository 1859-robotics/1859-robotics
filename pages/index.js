import React from 'react'
import anime from 'animejs'

import Header from "../components/Header.js"
import Head from "../components/Head.js"
import Animate from '../components/Animate.js'
import Icon from '../components/Icon.js'
import config from "../config/data.config.js"
import "../style/index.sass"

const are = ["inventors", "dreamers", "engineers", "students", config.name]

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
    <div>
      <Head />
      <Header />
      <div className="hero">
        <img src="static/logo-white.svg" alt="logo"/>
        <h1><span>We are&nbsp;</span>
          <Animate enter={e => {
            anime({
              targets: e,
              maxWidth: ["0", "500px"],
              opacity: [0, 1],
              easing: 'easeInOutCubic',
              duration: 500
            })
            setTimeout(_ => this.setState({
              in: false
            }), 5000)
          }} exit={e => {
            anime({
              targets: e,
              maxWidth: ["500px", "0"],
              opacity: [1, 0],
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
            <span style={{opacity: 0, maxWidth: 0 }} className="are">
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
        <div className="cards">
          <div className="card">
            <Icon icon="edit" />
            <h1>Blog</h1>
            <p>Hear our latest musings on anything and everything VEX!</p>
          </div>
          <div className="card">
            <Icon icon="people" />
            <h1>Teams</h1>
            <p>Meet the teams that make up this organization!</p>
          </div>
          <div className="card">
            <Icon icon="public" />
            <h1>About Us</h1>
            <p>Learn who this organization is!</p>
          </div>
        </div>
      </section>
      <section className="brief">
        <h1>Who we are</h1>
        <p>{ config.orgDesc }</p>
      </section>
    </div>
  )
}
