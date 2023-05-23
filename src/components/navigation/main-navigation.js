import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    return (
        <nav className="main-navigation">
            <div className="main-navigation-logo-wrapper">
                <Link to='/' className="main-navigation-logo">Logo Here</Link>
            </div>

            <div className="main-navigation-items">
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Contact</NavLink>    
                <NavLink to="/options" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Options</NavLink>
            </div>

            <div className="main-navigation-auth">
                Auth here
            </div>
        </nav>
    );
}

export default MainNavigation;