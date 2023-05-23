import { Link } from "react-router-dom";

function ProjectItem({ project }) {
    let projectImage = project.image ? `http://localhost:4000${project.image?.url}` : "https://via.placeholder.com/300x200";

  return (
    <div>
      <Link to={`/projects/${project.id}`}><h3>{project.title}</h3></Link>
      <img src={projectImage} alt={project.title} />
    </div>
  )
}

export default ProjectItem;