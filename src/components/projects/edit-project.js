import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ProjectForm from "./project-form";

function EditProject() {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/projects/${id}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            }
        })
        .then((data) => setProject(data))
        .catch((error) => console.log("project error:", error));
    }, [id]);

    return (
        <div className="project-detail-container">
            <h1>Edit {project.title}</h1>
            <hr />
            <img src={`http://localhost:4000${project.image?.url}`} alt={project.title} />

            <ProjectForm project={project} />
            <Link to={`/projects/${id}`}>Back to Project</Link>
        </div>
    );
}

export default EditProject;