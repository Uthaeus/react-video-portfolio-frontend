import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  return (
    <div>
      <Link to={`/projects/${project.id}`}><h3>{project.name}</h3></Link>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectItem;