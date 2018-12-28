import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"Motion control"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>Motion control</h1>
        <p>By: Alexa Griffin - 28-12-2018</p>
      </div>
      <h2>What is this?</h2>
<p>Perhaps I should start with what this is not. This is not how to do 2d position tracking and motion control. heck</p>
    </div>
    <Footer />
  </div>
)
