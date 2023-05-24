import { Link } from "react-router-dom";

function HomePageProjectItem({ project }) {

    return (
        <div className='homepage-project-container'>
            <Link to={`/projects/${project.id}`} className='homepage-project-title'>{project.title}</Link>
            <p className='homepage-project-subtitle'>{project.subtitle}</p>
            <img src={`http://localhost:4000${project.image?.url}`} alt={project.title} width='300px' height='100px' />
        </div>
    );
}

export default HomePageProjectItem;