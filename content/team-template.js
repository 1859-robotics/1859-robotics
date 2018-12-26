module.exports.str = `import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/team.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"%%NUMBER%%"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      %%CONTENT%%
    </div>
    <Footer />
  </div>
)
`
