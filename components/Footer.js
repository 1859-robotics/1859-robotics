import Head from "next/head"
import config from "../config/data.config.js"
import "../style/footer.sass"


export default props => (
  <footer>
    &copy; { config.year } { config.orgName }
  </footer>
)
