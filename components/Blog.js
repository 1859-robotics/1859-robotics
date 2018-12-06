import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import "../style/about.sass"

export default props => (
  <div className="about">
    <Head title={ props.title }/>
    <Header />
    <Render />
    <Footer />
  </div>
)
