import { useState, useEffect, useContext } from "react";

import ProjectItem from "./project-item";
import ProjectForm from "./project-form";
import { UserContext } from "../../store/user-context";

function Projects() {
    const [projects, setProjects] = useState([]);
    const [isForm, setIsForm] = useState(false);
    const userCtx = useContext(UserContext);
    
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

    function formSubmitHandler(project) {
        setProjects((prevProjects) => [project, ...prevProjects]);
        setIsForm(false);
    }
    
    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1 className="projects-title">Projects</h1>
                {userCtx.user?.role === "site_admin" && (
                    <button className="new-project-btn" onClick={() => setIsForm(!isForm)}>
                        {isForm ? "Hide Form" : "Add Project"}
                    </button>
                )}
            </div>
            <hr />

            {!isForm && <div className="projects-list">
                {projects.map((project) => (
                    <ProjectItem key={project?.id} project={project} />
                ))}
            </div>}

            {isForm && <div className="projects-form"><ProjectForm formSubmitHandler={formSubmitHandler} /></div>}
        </div>
    );
}

export default Projects;