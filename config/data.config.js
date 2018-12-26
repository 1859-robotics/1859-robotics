const posts = require("./blog.config.json")

module.exports = {
  number: "1859",
  school: "JCTC",
  name: "1859 Robotics",
  orgName: "JCTC Robotics",
  year: "2018",
  orgDesc: "We are jctc robotics. A robotics organization from nicholasville kentucky. We compete in the VEX robotics competition, \
            a robotics competition that brings together over 20,000 teams from more than 50 countries.",
  colors: {
    main: "#b37feb",
    red: "#ff7875",
    blue: "#85a5ff"
  },
  latest: {
    title: "hello this is a test!",
    link: "/",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aspernatur architecto molestiae provident ex id consectetur velit. Tempora, magni, optio."
  },
  sponsors: [
    {
      name: "Banks engineering",
      logo: "static/imgs/sponsors/banks-engineering.png",
      link: "https://www.banksengineering.net"
    },
    // {
    //   name: "Banks engineering",
    //   logo: "static/imgs/sponsors/banks-engineering.png",
    //   link: "https://www.banksengineering.net"
    // },
    // {
    //   name: "Banks engineering",
    //   logo: "static/imgs/sponsors/banks-engineering.png",
    //   link: "https://www.banksengineering.net"
    // },
  ],
  externalContacts: [
    { name: "email: 1859.robotics@gmail.com", link: "mailto: 1859.robotics@gmail.com" },
    { name: "twitter: @1859Robotics", link: "https://twitter.com/1859Robotics" },
    { name: "instagram: 1859Robotics", link: "https://www.instagram.com/1859robotics/" },
  ],
  historyPara: "JCTC robotics was unofficially founded in 2015, consisting of students from 2 schools, East and West jessamine highschools, we began with almost nothing. \
                a getto field peiced together from pvc pipes, one team with a bot that wouldn't stay together, and \
                two coaches that were begrugingly accomodating some students' weird hobby. \
                Then everything changed in 2016. 1859X was 3rd picked at state on the winning alliance. So we got to go to worlds \
                this fired everyone up beyond any and all expectations and the program picked up a lot of steam. Suddenly many other students were interested in joining, and many of the existing members \
                became more dedicated to winning. With this dedication we went on to win 1st and 2nd place, as well as skills, at state in 2017-2018's game: In The Zone. \
                three of our teams qualified for worlds that year and even won awards. We hope that our program contenues to grow at this rate for the future.",
  joinPara: "To join simply contact greg caminisch, please note that you will have to be currrently enrolled in east or west jessamine high school or middle school",
  faq: [
    {
      q: "What are your teams?",
      a: "We have had many teams in our history. Click here to meet them.",
      link: "/teams"
    },
    {
      q: "What is VEX?",
      a: "VEX is a robotics competition to engage and inspire students in STEM feilds. VEX create tools that educators and mentors will use to shape the learners of today into the problem solving leaders of tomorrow.",
      link: "#vex"
    },
    {
      q: "What else have you done?",
      a: "We have done many outreach projects as an organization, as teams, and as individuals. Click here to see them.",
      link: "/outreach"
    },
    {
      q: "Who are your coaches?",
      a: "We have had three amazing coaches in are 3 years 1 of whom has left us. Without their support we would be nowhere.",
      link: "#coaches",
    },
    {
      q: "How can I join?",
      a: "We welcome anyone and everyone interested in robotics.",
      link: "#join",
    }
  ],
  coaches: [
    {
      name: "Greg",
      desc: "I am Greg Camenisch, I am one of the first movers for the 1859 Robotics organization and along with Andrea O'bryan formed the first 1859 team. I still teach engineering at JCTC."
    },
    {
      name: "Meghan Banks",
      desc: "I am Meghan Banks, I joined just last year however have quickly become 'team mom' I teach engineering at JCTC and Andrea O'bryaan actually taught me bringing the whole thing full circle.",
      pic: "static/imgs/banks.png"
    }
  ],
  mentors: [
    {
      name: "elmers",
      desc: "Joe is now studying engineering at the university of kentucky"
    },
    {
      name: "bendy boi",
      desc: "Drew is now studying engineering at the university of louisville"
    },
    {
      name: "andi",
      desc: "Andrea O'bryan, once a coach, has since left the program to pursue being a member of the board of edjucation"
    },
  ],
  aboutVEX: "VEX Competitions bring STEM skills to life by tasking teams of students with designing and building a robot to play against other teams in a game-based engineering challenge. ",
  teamDir: "./pages/teams/",
  teams: [
    {
      number: "1859X",
      name: "The Gladiators",
      color: "#ffc53d",
      txtColor: "rgba(0,0,0,0.85)",
      bgPath: "static/imgs/teams/gladiators.jpg"
    },
    {
      number: "1859W",
      name: "The Walruses",
      color: "#91d5ff",
      txtColor: "rgba(0,0,0,0.85)",
      bgPath: "static/imgs/teams/walruses.jpg"
    },
    {
      number: "1859S",
      name: "The Cobras",
      color: "#2f54eb",
      txtColor: "rgba(255,255,255,0.85)",
      bgPath: "static/imgs/teams/cobras.jpg"
    },
    {
      number: "1859Z",
      name: "The Raptors",
      color: "#52c41a",
      txtColor: "rgba(0,0,0,0.85)",
      bgPath: "static/imgs/teams/raptors.jpg"
    },
  ],
  outreach: [ //TODO: ask for this
    {
      title: "PLTW",
      desc: "JCTC is a proud PLTW school.",
      // img: "https://via.placeholder.com/300x140.png"
    },
    {
      title: "TSA",
      desc: "In addition to VEX we also do TSA! In order to support our members who are not interested or do not have the time to do VEX we also compete in TSA.",
      // img: "https://via.placeholder.com/300x140.png"
    },
    {
      title: "Radio",
      desc: "Each year the best and brightest of our students go on public radio to help raise awareness for STEM.",
      // img: "https://via.placeholder.com/300x140.png"
    },
    {
      title: "Library STEM Extravaganza",
      desc: "Each year at the Jessamine County Public Library we host a STEM get together for some of the youngest minds in Kentucky!",
      // img: "https://via.placeholder.com/300x140.png"
    },
    {
      title: "STLP",
      desc: "Due to lack of resources STLP was recently removed from JCTC club day, we brought the many students left without a STEM outlet into VEX.",
      // img: "https://via.placeholder.com/300x140.png"
    },
    // {
    //   title: "we prob",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   // img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "need",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "at least",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "a lot",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "of these",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "they can be",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
    // {
    //   title: "really stretching it tho",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus asperiores delectus at dicta quis ipsa? Error maiores recusandae sit consequatur hic, nam deleniti omnis distinctio odio quisquam ut dolore magni.",
    //   img: "https://via.placeholder.com/300x140.png"
    // },
  ],
  blog: {
    outputDir: "./pages/blog/",
    inputDir: "./content/blog/",
    configDir: "./config/",
    posts: posts.posts
  }
}
