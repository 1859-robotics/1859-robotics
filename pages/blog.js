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
  static async getInitialProps({ path }) {
    console.log(path)
    return {}
  }
  render = _ => (
    <div className="home">
      <Head />
      <Header />

      <Footer />
    </div>
  )
}
