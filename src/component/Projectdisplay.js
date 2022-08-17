import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "./ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "../styles.css/Display.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="img" />
      <p>
        <b>Tech:</b> {project.skills}
      </p>
      <div>
        <a href={project.link}>
          {" "}
          <GitHubIcon />
        </a>{" "}
        &nbsp;
        <a href={project.live}>
          <LiveTvIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
