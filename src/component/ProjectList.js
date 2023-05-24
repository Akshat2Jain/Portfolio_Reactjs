// import Img from "../assests/download.jpeg";
import Img1 from "../assests/netflix.jpg";
import Img3 from "../assests/blog.jpg";
import Img4 from "../assests/expence.jpeg";
import Img2 from "../assests/todo.png"
import Img5 from "../assests/rakt.png"
import Img6 from "../assests/whether.jpg"
import Img7 from "../assests/marvel.png"
import Img8 from "../assests/profile.png"
import Img9 from "../assests/starbucks.png"
import Img10 from "../assests/sorting.png"
import Img11 from "../assests/bootstrap.png"
import Img12 from "../assests/password.png"
import Img13 from "../assests/covid.png"
import Img14 from "../assests/2min.png"
import Img15 from "../assests/strapi.jpg"
import Img16 from "../assests/chat.png"
import Img17 from "../assests/github.png"
import Img18 from "../assests/crypto.png"
import Img19 from "../assests/crowdfunding.png"
import Img20 from "../assests/movie.png"
import Img21 from "../assests/ShirtSquad.png"
const ProjectList = [
  {
    name:"ShirtSquad",
    image:Img21,
    skills:"Nextjs,Strapi,TailwindCss,stripe,Render",
    link:"https://github.com/Akshat2Jain/ShirtSquad",
    live:"https://shirtsquad.vercel.app",
    id:0


  },
  {
    name:"MovieReview_Webisite",
    image:Img20,
    skills:"ReactJs,Spring Boot, MongoDb, Bootstrap",
    link:"https://github.com/Akshat2Jain/Fullstack_MovieReview",
    live:"https://github.com/Akshat2Jain/Fullstack_MovieReview",
    id:1


  },
  {
    name: "Crowdfunding Platform Using Web3.0",
    image: Img19,
    skills: "Reactjs,BlockChain, Solidity, Metamask, ThirdWeb",
    link: "https://github.com/Akshat2Jain/web3_crowdfunding",
    live: "https://crowdsupport.netlify.app/",
    id: 2,
  },
  {
    name: "Chat Application",
    image: Img16,
    skills: "Reactjs,sass,Firebase 9",
    link: "https://github.com/Akshat2Jain/chatApp",
    live: "https://chat-app-three-roan.vercel.app/login",
    id: 3,
  },
  {
    name: "Crypto App",
    image: Img18,
    skills: "Reactjs,sass,Chakra-UI, Chart.js",
    link: "https://github.com/Akshat2Jain/CryptoApp",
    live: "https://icic.vercel.app/",
    id: 4,
  },
  {
    name: "Github User Finder",
    image: Img17,
    skills: "Reactjs,Tailwindcss",
    link: "https://github.com/Akshat2Jain/github_user_finder",
    live: "https://github2user4finder.vercel.app/",
    id: 5,
  },
  {
    name: "Netflix Clone",
    image: Img1,
    skills: "Reactjs,TailwindCss,Firebase 9,Material Ui",
    link: "https://github.com/Akshat2Jain/Netflix_clone",
    live: "https://net12clone.netlify.app/",
    id: 6,
  },
  {
    name: "Game Review Strapi Website",
    image: Img15,
    skills: "Reactjs,Strapi,Graphql",
    link: "https://github.com/Akshat2Jain/react_strapi",
    live: "https://github.com/Akshat2Jain/react_strapi",
    id: 7,
  },
  {
    name: "Personal Blog Website",
    image: Img14,
    skills: "Reactjs",
    link: "https://github.com/Akshat2Jain/2min-Blog",
    live: "https://2minblog.vercel.app/",
    id: 8,
  },
  {
    name: "Login/Logout Todo App",
    image: Img2,
    skills: "Reactjs,Firebase 8,Bootstrap",
    link: "https://github.com/Akshat2Jain/advance_todo_app",
    live: "https://todopp.netlify.app/",
    id: 9,
  },
  {
    name: "Blogging App",
    image: Img3,
    skills: "Reactjs,Firebase,Material Ui",
    link: "https://github.com/Akshat2Jain/Firebase_auth",
    live: "https://github.com/Akshat2Jain/Firebase_auth",
    id: 10,
  },
  {
    name: "Expense Tracker",
    image: Img4,
    skills: "Reactjs,LocalStorage",
    live: "https://github.com/Akshat2Jain/project5",
    link: "https://github.com/Akshat2Jain/project5",
    id: 11,
  },
  {
    name: "Project Rakt",
    image: Img5,
    skills: "JavaScript,HTML,CSS,Bootstrap",
    link: "https://github.com/Akshat2Jain/project_rakt",
    live: "https://github.com/Akshat2Jain/project_rakt",
    id: 12,
  },
  {
    name: "WeatherApp",
    image: Img6,
    skills: "Reactjs",
    link: "https://github.com/Akshat2Jain/weatherapp_reactjs",
    live: "https://github.com/Akshat2Jain/weatherapp_reactjs",
    id: 13,
  },
  {
    name: "Marvel MovieApp",
    image: Img7,
    skills: "Reactjs",
    link: "https://github.com/Akshat2Jain/reactjs_project1_movieapp",
    live: "https://marvel-phasewise-app.netlify.app/",
    id: 14,
  },
  {
    name: "Portfolio Website",
    image: Img8,
    skills: "Html,Css,Javascript",
    link: "https://github.com/Akshat2Jain/Portfolio_Website",
    live: "https://akshatjain.tech/",
    id: 15,
  },
  {
    name: "Starbucks Website",
    image: Img9,
    skills: "TailwindCss",
    link: "https://github.com/Akshat2Jain/Starbucks_tailwindCss",
    live: "https://github.com/Akshat2Jain/Starbucks_tailwindCss",
    id: 16,
  },
  {
    name: "Sorting App",
    image: Img10,
    skills: "Html,Css,Javascript",
    link: "https://github.com/Akshat2Jain/Sorting_App",
    live: "https://github.com/Akshat2Jain/Sorting_App",
    id: 17,
  },
  {
    name: "Bootstrap Website",
    image: Img11,
    skills: "Bootstrap",
    link: "https://github.com/Akshat2Jain/Starbuks_Website_BootstrapOnly",
    live: "https://github.com/Akshat2Jain/Starbuks_Website_BootstrapOnly",
    id: 18,
  },
  {
    name: "Password Generator",
    image: Img12,
    skills: "Html,Css,Javascript",
    link: "https://github.com/Akshat2Jain/Password_Generator_animated_bg",
    live: "https://github.com/Akshat2Jain/Password_Generator_animated_bg",
    id: 19,
  },
  {
    name: "Covid Dashboard",
    image: Img13,
    skills: "Html,Css,Javascript,Chartjs",
    link: "https://github.com/Akshat2Jain/Covid_statewise_tracker_dashboard",
    live: "https://github.com/Akshat2Jain/Covid_statewise_tracker_dashboard",
    id: 20,
  },
];

export default ProjectList;
