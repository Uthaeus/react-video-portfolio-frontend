import { NavLink, Link } from "react-router-dom";

function MainNavigation() {

    function logoutHandler() {
        console.log('logout');
    }

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
                <Link className="nav-link" onClick={logoutHandler}>Logout</Link>
                <NavLink to="/sign-in" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign In</NavLink>
                <NavLink to="/sign-up" className={({isActive}) => isActive ? 'nav-link link-active' : 'nav-link'}>Sign Up</NavLink>
            </div>
        </nav>
    );
}

export default MainNavigation;