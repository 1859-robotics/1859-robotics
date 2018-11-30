import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Animate from "../components/Animate.js"
import "../style/about.sass"
import config from "../config/data.config.js"

export default () => (
  <div className="history">
    <Head title="About"/>
    <Header />
    <div className="quick">
    <section className="faq">
      <h1>FAQs</h1>
      <Animate enter={e => ({
        targets: e.childNodes,
        delay: (el, i) => 100 * i,
        duration: 300,
        translateX: (el, i) => [ (i % 2 ? 1 : -1) * 30, 0 ],
        opacity: [ 0, 1 ],
      })}>
      <div className="cards">
        { config.faq.map((a, i) => (
          <div key={i} className="card" style={{
            opacity: 0,
            transform: "translateX(" + (i % 2 ? 1 : -1) + "px)"
          }}>
            <h3>{ a.q }</h3>
            <p>{ a.a }</p>
          </div>
        )) }
      </div>
      </Animate>
    </section>
    </div>
    <section className="long-desc">
      <h1>Our History</h1>
      <p>{ config.historyPara }</p>
    </section>
    <Footer />
  </div>
)
