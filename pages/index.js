import Header from "../components/Header.js"
import Head from "../components/Head.js"
import config from "../config/data.config.js"
import "../style/index.sass"

export default () => (
  <div>
    <Head />
    <Header />
    <div className="hero">
      <h1>We are { config.name }</h1>
    </div>
  </div>
)
