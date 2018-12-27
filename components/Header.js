import "../style/header.sass"
import Animate from "../components/Animate.js"

export default props => (
  <header id="header">
  <div className="logo">
    <img src={props.logo || "static/logo-white.svg"} alt="logo"/>
  </div>
  <div className="ham" onClick={ e => document.getElementById("header").classList.toggle("active") }>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <nav>
    <Animate enter={e => ({
      targets: e.childNodes,
      delay: (el, i) => 100 * i,
      duration: 500,
      opacity: [ 0, 1 ]
    })} timeout={400}>
      <ul>
        <li style={{ opacity: 0 }}><a href="/">home</a></li>
        <li style={{ opacity: 0 }}><a href="/about">about</a></li>
        <li style={{ opacity: 0 }}><a href="/outreach">outreach</a></li>
        <li style={{ opacity: 0 }}><a href="/teams">teams</a></li>
        <li style={{ opacity: 0 }}><a href="/blog">blog</a></li>
      </ul>
    </Animate>
    </nav>
  </header>
)
