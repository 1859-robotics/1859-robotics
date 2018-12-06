import anime from 'animejs'

import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Animate from "../components/Animate.js"
import "../style/outreach.sass"
import config from "../config/data.config.js"


export default () => (
  <div className="outreach">
    <Head title="Outreach"/>
    <Header />

    { config.outreach.map((action, i) => (
      <Animate key={ i } enter={{
        delay: (el, j) => 300 * j,
        duration: 600,
        translateX: (el, j) => [ (i % 2 ? 100 : -100), 0 ],
        opacity: [ 0, 1 ],
      }} scroll={ true } scrollTarget={"#outreach-" + i} timeout={ 600 } offset={ 0 }>
        <section className="outreach-item" id={ "outreach-" + i } style={{
          opacity: 0,
          transform: "translateX(" + (i % 2 ? 100 : -100) + "px)"
        }}>
          <div className="txt">
            <h2>{ action.title }</h2>
            <p>{ action.desc }</p>
          </div>
          <img src={ action.img } alt={ action.title }/>
        </section>
      </Animate>
    )) }
    <Footer />
  </div>
)
