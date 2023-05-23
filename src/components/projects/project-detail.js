import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function ProjectDetail() {
    const [project, setProject] = useState({});
    const { id } = useParams();
    const userCtx = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/projects/${id}`)
        .then((response) => {
            if (response.ok) {
            return response.json();
            }
        })
        .then((data) => setProject(data))
        .catch((error) => console.log("project error:", error));
    }, []);

    return (
        <div className="project-detail-container">
            <h1>{project.title}</h1>

            <div className="project-detail-actions">
                {userCtx.user.role === "site_admin" && (
                    <>
                        <Link to={`/projects/${id}/edit`}>Edit</Link>
                        <Link to={`/projects/${id}/delete`}>Delete</Link>
                    </>
                )}

                <Link to="/projects">Back to Projects</Link>
            </div>
        </div>
    );
}

export default ProjectDetail;
