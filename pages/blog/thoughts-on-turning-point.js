
import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"Thoughts on turning point"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>Thoughts on turning point</h1>
        <p>By: Alexa Griffin</p>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis blanditiis, quas sed, nisi incidunt iste perferendis enim maiores ea unde dolore! Ad beatae qui illo praesentium a quod minima accusamus, iure eum ut iusto blanditiis quibusdam fugit doloremque dolor eius.</p>
    </div>
    <Footer />
  </div>
)
