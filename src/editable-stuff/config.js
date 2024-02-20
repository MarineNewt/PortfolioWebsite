// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Frankie",
  middleName: "",
  lastName: "Leyva",
  message: "Creative Developer driving innovation through experimentalism.",
  icons: [
    {
      pre: "fab",
      image: "fa-github",
      url: "https://github.com/MarineNewt",
    },
    {
      pre: "fab",
      image: "fa-instagram",
      url: "https://instagram.com/newt9.oceans",
    },
    {
      pre: "fa",
      image: "fa-envelope",
      url: "mailto: Newt@newt9.dev",

    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile2.png"),
  imageSize: 375,
  message:
    "My name is Frankie Leyva. I'm a 2022 graduate with a degree in Biology from the University of California, Monterey Bay. I specialize in creative thinking as a solutions architect advancing concepts into functional programs. I have experience in developing a range of website front ends to fulfill various purposes and utilizing technologies such as AWS, Alchemy, and Vercel to produce smooth full stack applications that not only look visually aesthetic, but also operate smoothly as well. I enjoy exploring the sciences, adventures to new places, and expanding my repertoire to overcome all challenges. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
//  gitHubUsername: "MarineNewt",
//  reposLength: 6,
//  specificRepos: [],
  list: [
    {
      category: "App",
      title: "Intro Me ",
      url: "https://www.introme.me/",
      url2: "https://www.introme.me/intro/newt",
      //repo: "https://github.com/MarineNewt/",
      notes: "IntroMe is a Link-in-Bio SaaS tool enpowering users to create their own highly personalized introduction webpages for a monthly subscription. Using easy to follow components built step-by-step users are able to create uniquely customizable webpages on their own without code.",
      thumbnail:require("../assets/img/PL - Introme.png"), 
     },
    {
    category: "App",
    title: "Seattle Adventures",
    url: "https://initial-mern.vercel.app/",
    repo: "https://github.com/MarineNewt",
    notes: "Get ready to explore the beautiful city of Seattle with this quick adventure tracking website. Explore new experiences in the city, record progress on all of your adventures, and learn more about where and what you can do in Seattle.",
    thumbnail:require("../assets/img/SeattleAdv.png"), 
   },
   {
    category: "App",
    title: "Tattoo Business Website",
    url: "https://lionel-ink.vercel.app/",
    repo: "https://github.com/MarineNewt/",
    notes: "Minimalistic business website showcasing a tattoo artist’s art and background in a dynamic visuals-focused UI. Allows for ease of appointment booking and quick presentation of past works.",
    thumbnail:require("../assets/img/LionelInk-home.png"), 
   },
   {
    category: "App",
    title: "Oculoplastics Learning Center",
    url: "https://oculoplasticslearningcenter.com/",
    repo: "https://github.com/MarineNewt/Oculoplastics-Learning-Center",
    notes: "Education focused website detailing various oculofacial conditions and their corresponding treatments with thorough overviews. Features information heavy pages explaining symptoms, causes, treatments, and more wrapped in an easy to navigate website.",
    thumbnail:require("../assets/img/oculoplasticslc-home.png"), 
   },
   {
    category: "App",
    title: "Ship Wars",
    url: "https://shipgame.netlify.app/",
    repo: "https://github.com/MarineNewt/ShipGame",
    notes: "Ship Wars is a real time battle game on the polygon network using NFTs as game pieces with actions taken on chain. To begin users pick stats and mint a ship NFT altered based on their token's assigned stats. Then users can use their ship to 'fire' at others in an attempt to sink their ships thereby burning their opponet's NFT and claiming a matic reward for each opponet sunk. ",
    thumbnail:require("../assets/img/shipwars.png"), 
   },
   {
    category: "App",
    title: "Eden's Flowers",
    url: "https://edensflowers.netlify.app/",
    repo: "https://github.com/MarineNewt/EdenNFT",
    notes: "Eden's Flowers is a dynamic NFT collection on Ethereum showcasing the Art within NFT smart contracts through displaying how the medium as a whole can be utilized. The collection built upon an already unique proliferative token has an image switching mechanism and a contract time limit, challenging the importantance of common project trends of rarity structures and perpetuity on the blockchian.",
    thumbnail:require("../assets/img/edenspage.png"), 
   },
   {
    category: "App",
    title: "On Chain Canvas",
    url: "https://canvasonchain.com/",
    repo: "https://github.com/MarineNewt/CanvasNFT",
    notes: "On Chain Canvas is an dynamic & interactive on-chain NFT. The token featuring a SVG canvas can be altered by holders one pixel at a time, once every 600 blocks. The evolving piece shows the capabilities of NFTs to be developed by communities over time and are not limited to static instances of art.",
    thumbnail:require("../assets/img/canvasonchain.png"), 
   },
   {
    category: "App",
    title: "Restaurant Landing Page",
    url: "https://udupbop.netlify.app/",
    repo: "https://github.com/MarineNewt/Restaurant-LandingPage-UDB",
    notes: "Landing page for Asian fusion restaurant Udupbop. Provides an easy to navigate menu and all nccesary business information presented in a modern aesthetic page directing attention towards the deliciously artistic cusine.",
    thumbnail:require("../assets/img/reslandingpage.png"), 
   }

   /*
   {
    category: "App",
    title: "Twitter Automation",
    url: "https://github.com/MarineNewt/TwitterAutomation",
    repo: "https://github.com/MarineNewt/TwitterAutomation",
    notes: "Automated twitter bot posting randomized emoji art daily. My Twitter bot code can be modified to pull data from any available APIs to aggregate data and post real time updated statistics to twitter.",
    thumbnail:require("../assets/img/twitterauto.jpg"), 
   },
   */

  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile2.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile2.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "MERN Stack"},
    { name: "Next JS"},
    { name: "HTML/CSS"},
    { name: "Node"},
    { name: "React"},
    { name: "Alchemy"},
    { name: "Solidity"},
    { name: "Contract Auditing"},
    { name: "Python"},
    { name: "Automation"},
    { name: "Github"},
    { name: "Vercel"},
  ],
  softSkills: [
    { name: "Problem Solving"},
    { name: "Communication"},
    { name: "Adaptability"},
    { name: "Creativity"},
    { name: "Optimistic"},
    { name: "Goal-Oriented"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Currently accepting roles within Web Development fulfilling both Front-end and Contract needs. If you have an oppurtunity to share, have questions about myself, or simply want to say hi, please reach out to me via Email at:",
  email: "Newt@newt9.dev",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Solidity Developer',// Here Add Company Name
      companylogo: require("../editable-stuff/profile2.png"),// Add logo
      date: 'June 2018 – Present',//Add dates
    },
    {
      role: 'Front-End Developer',
      companylogo: require("../editable-stuff/profile2.png"),
      date: 'May 2017 – May 2018',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
