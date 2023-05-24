import { Link } from "react-router-dom";

function ProjectItem({ project, styles }) {
    let projectImage = project.image ? `http://localhost:4000${project.image?.url}` : "https://via.placeholder.com/300x200";

  return (
    <Link to={`/projects/${project.id}`} className={`project-item ${styles}`}>
      <img src={projectImage} alt={project.title} width='100%' height='100px' />
      <h3 className="project-item-title">{project.title}</h3>
    </Link>
  )
}

export default ProjectItem;