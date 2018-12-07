import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Animate from "../components/Animate.js"
import "../style/about.sass"
import config from "../config/data.config.js"
import { getPosts } from 'api/posts'

export default class BlogPost extends React.Component {
  static async getInitialProps({ query }) {

    return { query }
  }

  render() {
    return (
      <div>
      <Head />
      <Header />
      
      <Footer />
      </div>
    )
  }
}
