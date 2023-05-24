import { useState, useEffect } from 'react';

import HomePageProjectItem from '../components/homepage/homepage-project-item';

function HomePage() {
    const [pageTitle, setPageTitle] = useState('Home Page');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/home')
            .then(response => response.json())
            .then(data => {
                setPageTitle(data.title);
                setProjects(data.projects);
            })
            .catch(error => console.log('error:', error));
    }, []);

    return (
        <div className='homepage-container'>
            <div className='homepage-header'>
                <h1>{pageTitle}</h1>
            </div>
            <hr />
            <div className='homepage-projects-wrapper'>
                {projects?.map(project => <HomePageProjectItem key={project.id} project={project} />)}
            </div>
        </div>
    );
}

export default HomePage;