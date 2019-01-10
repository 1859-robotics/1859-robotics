import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Icon from '../components/Icon.js'
import "../style/teams.sass"
import config from "../config/data.config.js"


export default () => (
  <div>
    <Head title="Teams"/>
    <Header />
    <div className="teams">
    { config.teams.map((team, i) => (
      <div className="team" key={ i } style={{
        backgroundColor: team.color,
        color: team.txtColor
      }}>
        <h1>{ team.number }</h1>
        <img src={team.bgPath} alt={ team.name }/>
        <h2>{ team.name }</h2>
        <div className="data">
          <div className="item">
            <p>Awards: { team.awards }</p>
            <p>Best Skills Rank: { team.skills }</p>
            <p>Worlds Appearances: { team.worlds }</p>
          </div>
        </div>
      </div>
    )) }
    </div>
    <Footer />
  </div>
)
