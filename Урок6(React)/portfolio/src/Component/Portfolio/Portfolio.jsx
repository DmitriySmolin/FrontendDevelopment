import React, { Component } from "react";
import "./Portfolio.css";
import MyProject from "./Project";
import descriptionProjects from "./projectList";

class ProjectsList extends Component {
  render() {
    return (
      <section id="Портфолио" className="projects">
        <div id="projects" className="container-fluent backgroundProjects">
          <h2>Портфолио</h2>
          <div className="row py-4">
            {descriptionProjects.map(descriptionProject => (
              <MyProject
                title={descriptionProject.title}
                description={descriptionProject.description}
                icon={descriptionProject.icon}
                link={descriptionProject.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsList;
