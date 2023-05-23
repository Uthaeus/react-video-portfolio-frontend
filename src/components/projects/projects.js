import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectItem from "./project-item";

function Projects() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:4000/projects")
        .then((response) => {
            if (response.ok) {
            return response.json();
            }
        })
        .then((data) => setProjects(data))
        .catch((error) => console.log("projects error:", error));
    }, []);
    
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;