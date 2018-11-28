import Head from "next/head"
import styled, { injectGlobal } from 'react-emotion'

injectGlobal`
  *
    margin: 0
    padding: 0
    border: none
    box-sizing: border-box
    outline: none
    font-family: "Nunito Sans" sans-serif
`


export default props => (
  <Head>
    <title>1859{ props.title ? " - " + props.title : "" }</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700" rel="stylesheet" />
  </Head>
)
