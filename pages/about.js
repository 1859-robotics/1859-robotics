import Head from "../components/Head.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Animate from "../components/Animate.js"
import "../style/about.sass"
import config from "../config/data.config.js"

export default () => (
  <div className="about">
    <Head title="About"/>
    <Header />
    <section className="faq">
      <div>
        <h1>FAQs</h1>
        <Animate enter={e => ({
          targets: e.childNodes,
          delay: (el, i) => 100 * i,
          duration: 300,
          translateX: (el, i) => [ (i % 2 ? 1 : -1) * 30, 0 ],
          opacity: [ 0, 1 ],
        })}>
          <div className="cards">
          { config.faq.map((a, i) => (
            <a key={i} className="card" style={{
              opacity: 0,
              transform: "translateX(" + (i % 2 ? 1 : -1) + "px)"
            }} href={ a.link }>
            <h3>{ a.q }</h3>
            <p>{ a.a }</p>
            </a>
          )) }
          </div>
        </Animate>
      </div>
    </section>
    <section className="long-desc">
      <div>
        <h1>Our History</h1>
        <p>{ config.historyPara }</p>
      </div>
    </section>
    <section className="coaches" id="coaches">
      <div>
        <h1>Coaches</h1>
        <p>The current leaders of the 1859 Robotics organization</p>
        <Animate enter={e => ({
          targets: e.childNodes,
          delay: (el, i) => 100 * i,
          duration: 300,
          translateX: (el, i) => [ (i % 2 ? 1 : -1) * 30, 0 ],
          opacity: [ 0, 1 ],
        })} scroll={ true } scrollTarget="#coaches" offset={300}>
          <div className="cards">
          {
            config.coaches.map((coach, i) => (
              <div className="card" style={{ transform: "translateX(" + (i % 2 ? 30 : -30) + "px)" }}>
                <h3>{ coach.name }</h3>
                <p>{ coach.desc }</p>
                <img src={coach.pic || "../static/imgs/person.png"} alt={coach.name}/>
              </div>
            ))
          }
          </div>
        </Animate>
      </div>
    </section>
    <section id="join">
      <div>
        <h1>Joining { config.orgName }</h1>
        <p>{ config.joinPara }</p>
      </div>
    </section>
    <section className="mentors">
      <div>
        <h1>Mentors</h1>
        <p>Past students, past coaches, just really cool people all here. Our greatest thanks goes out to these men and women, the program would not be where it is today without them.</p>
        <Animate enter={e => ({
          targets: e.childNodes,
          delay: (el, i) => 100 * i,
          duration: 300,
          translateY: [ -20, 0 ],
          opacity: [ 0, 1 ],
        })} scroll={ true } scrollTarget=".about .mentors" offset={300}>
          <div className="mentors">
          {
            config.mentors.map((mentor, i) => (
              <div className="mentor" style={{ transform: "scale(-20)", opacity: 0 }}>
                <h3>{ mentor.name }</h3>
                <p>{ mentor.desc }</p>
                <img src={mentor.pic || "../static/imgs/person.png"} alt={mentor.name}/>
              </div>
            ))
          }
          </div>
        </Animate>
      </div>
    </section>
    <section className="vex" id="vex">
      <div>
        <h1>VEX</h1>
        <p>{ config.aboutVEX }</p>
        <Animate enter={{
          delay: 0,
          duration: 300,
          translateY: [-30, 0],
          opacity: [ 0, 1 ],
        }} scroll={ true } scrollTarget="#vex a" offset={ 0 }>
          <a href="https://www.vexrobotics.com/" style={{ transform: "translateY(-30px)", opacity: 0 }}>Learn More Here!</a>
        </Animate>
      </div>
    </section>
    <Footer />
  </div>
)
