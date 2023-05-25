import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HomePageProjectItem from '../components/homepage/homepage-project-item';

function HomePage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/home')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => console.log('error:', error));
    }, []);

    return (
        <div className='homepage-container'>
            <div className='homepage-header'>
                <h1 className='homepage-title'>Videography/Photography</h1>

                <div className='homepage-subheader'>
                    <Link to='/about' className='homepage-subheader-link'>About</Link>
                    <Link to='/contact' className='homepage-subheader-link'>Contact</Link>
                </div>
            </div>
            
            <div className='homepage-projects-wrapper'>
                {projects?.map(project => <HomePageProjectItem key={project.id} project={project} />)}
            </div>
        </div>
    );
}

export default HomePage;