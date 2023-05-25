import { Link } from "react-router-dom";
import { useState } from "react";

import { ProjectStatusToggle } from "../util/project-status";

function ProjectItem({ project, styles }) {
    const [status, setStatus] = useState(project?.status);
    let projectImage = project.image ? `http://localhost:4000${project.image?.url}` : "https://via.placeholder.com/300x200";

    function statusToggleHandler() {
        ProjectStatusToggle({ id: project.id, currentStatus: project.status });
        setStatus((prevStatus) => (prevStatus === "draft" ? "published" : "draft"));
    }

  return (
    <div className={`project-item ${styles}`}>
      <img src={projectImage} alt={project.title} width='100%' height='100px' />
      <div className="project-item-right-column">
        <Link to={`/projects/${project.id}`} className="project-item-title">{project.title}</Link>
        <p className="project-item-subtitle">{project.subtitle}</p>
        <p onClick={statusToggleHandler} className="project-item-status">{status}</p>
      </div>
    </div>
  )
}

export default ProjectItem;