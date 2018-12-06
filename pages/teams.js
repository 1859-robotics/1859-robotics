import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Animate from "../components/Animate.js"
import "../style/teams.sass"
import config from "../config/data.config.js"


export default () => (
  <div>
    <Head title="Teams"/>
    <Header />
    <div className="teams">
    { config.teams.map((team, i) => (
      <a className="team" key={ i } style={{
        backgroundColor: team.color
      }} href={ "/teams/" + team.number }>
      <h1 style={{ color: team.txtColor }}>{ team.number }</h1>
      <img src={team.bgPath} alt={ team.name }/>
      <h2 style={{ color: team.txtColor }}>{ team.name }</h2>
      </a>
    )) }
    </div>
    <Footer />
  </div>
)
