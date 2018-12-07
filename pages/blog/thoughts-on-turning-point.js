
import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"Thoughts on turning point"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>Thoughts on turning point</h1>
        <p>By: Alexa Griffin</p>
      </div>
      <p>So the new VRC game just got released, this one is insane, my initial thoughts are somewhat positive before learning that balls must be shot to toggle high flags I thought this game would be slightly too easy. I do not think this game is as good as starstruck was however I do think turning point is better than in the zone.</p>
<p>First and foremost this game eliminates "skills bots," bots that have the pure intent of getting a high skills score and completely throw competition by the wayside. This is a much needed improvement from last year, because of the relative ease of creation of skills bots they were very prevalent this inherently is not a problem, if a team wants to focus on skills that's fine. However due to the collaborative nature of VRC the teams that focused on skills can and would hurt teams they were paired with in game.</p>
<p>This game is also very multifaceted, you have to juggle stacking caps, shooting balls, and controlling platforms. This is a deparcher from past VRC games which have typically focused on one or maybe two tasks. I believe that this encourages specialization of bots thus lowering the barrier of entry while also challenging higher level teams to design around more things.</p>
<p>Turning point is a very unorthodox game and I feel that it will provide some very interesting world's bots, but for now it is a lot of super sketchy bots that don't really do much, but isn't that how it is every year?</p>
    </div>
    <Footer />
  </div>
)
