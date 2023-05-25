import { Link } from "react-router-dom";

function HomePageProjectItem({ project }) {

    return (
        <Link to={`/projects/${project.id}`} className='homepage-project-item-container'>
            <div className="homepage-project-item-header">
                <p className='homepage-project-item-title'>{project.title}</p>
                <p className='homepage-project-item-subtitle'>{project.subtitle}</p>
            </div>

            <img src={`http://localhost:4000${project.image?.url}`} alt={project.title} width='100%' height='300px' />
        </Link>
    );
}

export default HomePageProjectItem;