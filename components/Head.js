import Head from "next/head"
import config from "../config/data.config.js"
import "../style/global.sass"


export default props => (
  <Head>
    <title>{config.orgName + (props.title ? " - " + props.title : "" )}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700" rel="stylesheet" />
    <link rel='shortcut icon' type='image/x-icon' href='/static/logo.ico' />

  </Head>
)
