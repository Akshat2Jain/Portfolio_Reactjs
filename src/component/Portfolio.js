import React from "react";
import ProjectItem from "./projectItem";
import "../styles.css/project.css";
import ProjectList from "./ProjectList";

const Portfolio = () => {
  const [filterData, setfilterData] = React.useState("");
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Project Name or TechStack"
          onChange={(e) => setfilterData(e.target.value)}
        />
      </div>
      <div className="projectList">
        {ProjectList.filter((project) => {
          if (filterData === "") {
            return project;
          } else if (
            project.name.toLowerCase().includes(filterData.toLowerCase()) ||
            project.skills.toLowerCase().includes(filterData.toLowerCase())
          ) {
            return project;
          }
        }).map((project, id) => {
          return <ProjectItem name={project.name} image={project.image} id={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
