import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"The design process"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>The design process</h1>
        <p>By: Alexa Griffin - 10-12-2018</p>
      </div>
      <p>The engineering design process is a vital part of any STEM project. It begins with the identification of the problem followed by research, brainstorming, development of a solution, construction of a prototype, testing of that prototype, and the evaluation of the prototype. This is repeated as many times as needed to develop an adequate solution. This may seem daunting however it is very simple when taken one step at a time.</p>
<h2>Problem definition</h2>
<p>This is the first step in the process and involves exactly what it sounds like: defining a problem. This is a very important step that is often overlooked due to the urge to just start making something. However this can lead to poor results, clouded judgement, and uninformed decisions. For many problems a simple paragraph containing a short description of the problem will suffice. However for more complex problems, such as the VEX game the problem may take several pages and a manual to fully define. In the VEX game the problem is defined in the rule book. Thus all teams already have an extremely useful document for determining what is legal, what is effective, and what their goals should be. Something that VEX does not provide is the design requirements of a solution. This is something determined by teams.</p>
<h2>Brainstorming</h2>
<p>This step involves the compilation of ideas and concepts related to the game. This is often split into multiple phases such as independent brainstorming, collaborative brainstorming, and dumping. Independent brainstorming is when a single person puts down everything they can think of relating to the problem. Collaborative brainstorming is a similar concept except with multiple people. The reason you may choose to do independent brainstorming over collaborative brainstorming is that collaborative brainstorming can often kill concepts that could have been good despite at first glance being not all that. Dumping involves recording <em>everything</em> relating to the problem. This is often very difficult for people to do due to the natural desire to filter your thoughts. Additionally the final result can be very messy and unorganized thus many teams steer away from this method. This is fine however it almost always produces an interesting result in our experience.</p>
<h2>Development of a solution</h2>
<p>Essentially this is the process of organizing, refining, and combining the ideas produced in the brainstorming phase. The goal of this is to produce an actionable plan to solve the problem. This first involves determining what system is the best within it's category, this is often done by a decision matrix, then combining them. To use Turning point as an example it's great if you have an idea about how to handle caps and an idea about how to climb the platform, but how do those 2 ideas interact? Can they be used together? Does using one lessen the effectivity of the other? Do they complement each other? Answering these questions is an important part of the design process and doing so can save headaches down the line.</p>
<h2>Construction of the prototype</h2>
<p>There are two primary ways to do this either a team can build each component of a design separately to determine their effectivity independently from each other or a team can build an entire solution to determine its effectivity as a unit. Both of these methods have advantages and disadvantages, independent testing is much more thorough however takes much more time, building as a system is a much more rapid process however can lead to oversight.</p>
<h2>Testing of the prototype</h2>
<p>Once a prototype is created it must be tested. This involves creating qualitative and quantitative tests to put it through. Qualitative testing is used to determine opinions on a prototype and is usually less useful than quantitative tests which measure objective statistics concerning the prototype. An example of a qualitative test is to ask the driver to rate 1 - 10 how good it feels to drive a robot. While a qualitative test is to measure how much lateral pushing force a robot has while going at a constant speed. Both of these tests have their merit however generally speaking quantitative tests are much more important and should be favored over qualitative tests.</p>
<h2>Evaluation of the solution</h2>
<p>This is the process of organizing the test results, weighting them if necessary, and determining if the solution fulfils the design requirements established in the identification of the problem.</p>
<h2>Repeat</h2>
<p>The steps of this process are typically repeated many times, this iteration on concepts is part of what makes the engineering process successful.</p>
    </div>
    <Footer />
  </div>
)
