import React from "react";
import "./Projects.css";
import { projectDetails } from "./projectDetails";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="title">PROJECTS</h1>
      <div className="Proline" />

      <div className="project">
        {projectDetails.map((box, index) => (
          <div key={index} className="proBox">
            <div className="proBox-img">
              <img src={box.img} />
            </div>
            <div className="proBox-text">
              <h4>{box.title}</h4>
              <p>{box.desc}</p>
            </div>
            <div className="buttons">
              <a href={box.git} target="_blank">
              <button>Git hub   <img src="/assets/git.png" />  </button>
              </a>
              <a href={box.deployed} target="_blank">
              <button>View site <img src="/assets/view.png" /> </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
