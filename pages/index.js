
import Header from "../components/Header.js"
import Head from "../components/Head.js"
import Animate from '../components/Animate.js'
import config from "../config/data.config.js"
import "../style/index.sass"

export default () => (
  <div>
    <Head />
    <Header />
    <div className="hero">
      <h1>We are: {" "}
        <Animate anime={{
          translateY: [-30, 0],
          opacity: [0, 1],
          duration: 500
        }} timeout={ 0 }>
          <span style={{opacity: 0, transform: "translateY(-30px)"}}>
            { config.name }
          </span>
        </Animate>
      </h1>
      <div className="latest">
      <Animate anime={{ translateY: [30, 0], opacity: [0, 1], duration: 500}} timeout={ 200 }>
        <div className="card" style={{opacity: 0, transform: "translateY(30px)"}}>
          <h3>The Latest: </h3>
          <h1>{ config.latest.title }</h1>
        </div>
      </Animate>
      </div>
    </div>
  </div>
)
