import Link from 'next/link'
import "../style/header.sass"
import Animate from "../components/Animate.js"

export default props => (
  <header id="header">
  <div className="logo">
    <img src={props.logo || "static/logo-white.svg"} alt="logo"/>
  </div>
    <nav>
    <Animate enter={e => ({
      targets: e.childNodes,
      delay: (el, i) => 100 * i,
      duration: 500,
      opacity: [ 0, 1 ]
    })} timeout={400}>
      <ul>
        <li style={{ opacity: 0 }}><Link href="/"><a>home</a></Link></li>
        <li style={{ opacity: 0 }}><Link href="/about"><a>about</a></Link></li>
        <li style={{ opacity: 0 }}><Link href="/outreach"><a>outreach</a></Link></li>
        <li style={{ opacity: 0 }}><Link href="/teams"><a>teams</a></Link></li>
        <li style={{ opacity: 0 }}><Link href="/blog"><a>blog</a></Link></li>
      </ul>
    </Animate>
    </nav>
  </header>
)
