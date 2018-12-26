import Head from "../../components/Head.js"
import Header from "../../components/Header.js"
import Footer from "../../components/Footer.js"
import Animate from "../../components/Animate.js"
import "../../style/blog.sass"
import config from "../../config/data.config.js"

export default () => (
  <div className="blog-post">
    <Head title={"Engineering in college"}/>
    <Header logo="../static/logo-white.svg"/>
    <div className="content">
      <div className="by">
        <h1>Engineering in college</h1>
        <p>By: Drew Bender - 10-12-2018</p>
      </div>
      <h2>Problems</h2>
<p>First thing's first if you are going in to a STEM field you need to go to college. This is hard for many people, because STEM naturally attracts the most knowledgeable. Suddenly being dropped in a situation where everyone is just as smart or smarter than you, who have up to this point often been the smartest person in the room, is a difficult thing to get used to. Add to this that the first classes you take are often the hardest and it can be a serious blow to your motivation and self-worth. The best words I can offer are to not take it personally, most people have or are going to go through this at some point, get through it and try to move on. Assuming you have gotten past that the most important thing to do to succeed is to not get mono. This is very important and I cannot stress enough just how important it is to not get mono. Assuming you have gotten past those two things the rest is pretty smooth sailing.</p>
<h2>Choosing a major</h2>
<p>There are so many different kinds of engineering in so many different fields that the options are practically limitless. So pick what you know you like. There will be parts of every career that you cannot stand but if you hate bridges then probably don't be a civil engineer. You will be doing this for the foreseeable future. That being said if you don't know what you like try not to commit to anything too early, take your universal requirements and try everything you can. </p>
    </div>
    <Footer />
  </div>
)
