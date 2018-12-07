module.exports.str = `
import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div>
    <Head title={"%%TITLE%%"}/>
    <Header />
      %%CONTENT%%
    <Footer />
  </div>
)
`
