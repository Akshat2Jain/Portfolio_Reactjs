import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles.css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Akshat Jain</h2>
        <div className="prompt">
          <p>A Front-End developer with a passion for learning and creating.</p>

          <a
            href="https://www.linkedin.com/in/akshat-jain-991571209/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/channel/UCFzcimWQetFMo2AZ9sh25MQ">
            <YouTubeIcon />
          </a>
          <a href="https://github.com/Akshat2Jain">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/Easyakshat">
            <TwitterIcon />
          </a>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <Button
            variant="outlined"
            style={{ color: "yellow" }}
            href="Resume.pdf"
            download
          >
            Download Cv
          </Button>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End 🤌</h2>
            <span>
              Nextjs,Stripe,ReactJS, AngularJs, ExpressJs, NodeJs, MongoDB, HTML, CSS, Ionic, BootStrap,
              MaterialUI, TailwindCSS, Firebase 8, Chartjs, Strapi
            </span>
          </li>
          <li className="item">
            <h2>Languages 🖥</h2>
            <span>JavaScript(Proficient), Java(Proficient),C++(Proficient) </span>
          </li>
          <li className="item">
            <h2>Achievements🏆</h2>
            <span><a href="https://github.com/reactjs/hi.reactjs.org/pull/211">Contributed to the official React Docs</a></span>
          </li>
          <li className="item">
            <h2>Extra 😄</h2>
            <span>Youtuber,Graphic designer,Video Editor,Guitar</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
