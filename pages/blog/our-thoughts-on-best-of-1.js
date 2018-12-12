import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"%%TITLE%%"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>%%TITLE%%</h1>
        <p>By: %%AUTHOR%% - %%DATE%%</p>
      </div>
      
    </div>
    <Footer />
  </div>
)
