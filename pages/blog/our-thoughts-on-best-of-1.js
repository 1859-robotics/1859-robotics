import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"Thoughts on Best of 1"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>Thoughts on Best of 1</h1>
        <p>By: Jon Alverson - 10-29-2018</p>
      </div>
      <p>A VEX robotics tournament is split into 2 phases: "qualification" and "elimination". In the qualification rounds teams are randomly matched together and ranked based on performance. Then in the elimination rounds teams choose each other and form alliances. Then each alliance competes with one another in order to determine a winner. In the past these matches have been best of 3. Now they are best of 1. Also of note is that the alliances now consist of 2 teams instead of 3, but there are also 32 alliances instead of 16. I believe that this was done to lower the floor for new teams. It allows more teams to get into the elimination bracket which I think is a good thing. It gets more people excited because they got there, they made it, maybe they didn't win but they got into the 2nd round. Either way teams have to be a lot more consistent now. That is the long and short of it. Thus it affects everything from robot design to alliance selection. First it increases the amount of luck involved in any given tournament. This understandably is a negative ideally the objectively "best" alliance would win every time. Now just one mess up can lead to a loss. </p>
    </div>
    <Footer />
  </div>
)
