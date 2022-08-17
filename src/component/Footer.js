import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles.css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/akshat-jain-991571209/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/akshat_2_jain/?hl=en">
          <InstagramIcon />
        </a>
        <a href="https://github.com/Akshat2Jain">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/Easyakshat">
          <TwitterIcon />
        </a>
      </div>
      <p>&copy; 2022 Akshat Jain</p>
    </div>
  );
};

export default Footer;
