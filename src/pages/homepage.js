import { useState, useEffect } from 'react';

function HomePage() {
    const [pageTitle, setPageTitle] = useState('Home Page');

    useEffect(() => {
        fetch('http://localhost:4000/home')
            .then(response => response.json())
            .then(data => {
                console.log('homepage data:', data);
                setPageTitle(data.title);
            })
            .catch(error => console.log('error:', error));
    }, []);

    return (
        <div>
            <h1>{pageTitle}</h1>
        </div>
    );
}

export default HomePage;