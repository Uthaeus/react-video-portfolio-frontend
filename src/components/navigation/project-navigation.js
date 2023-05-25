import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function ProjectNavigation() {
  const userCtx = useContext(UserContext);

  function logoutHandler() {
    fetch("http://localhost:4000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("video-token")}`,
      },
    }).then((response) => {
      if (response.ok) {
        localStorage.removeItem("video-token");
        userCtx.logout();
        return response.json();
      }
    });
  }

  return (
    <div className="project-navigation-container">
      <div className="project-navigation-logo-wrapper"></div>

      <div className="project-navigation-links-wrapper">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'project-navigation-link link-active' : 'project-navigation-link'}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'project-navigation-link link-active' : 'project-navigation-link'}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'project-navigation-link link-active' : 'project-navigation-link'}
        >
          Contact
        </NavLink>

        <NavLink
          to="/options"
          className={({ isActive }) => isActive ? 'project-navigation-link link-active' : 'project-navigation-link'}
        >
          Options
        </NavLink>
      </div>

      <div className="project-navigation-auth-wrapper">
        {!userCtx.user && (
          <>
            <Link to="/sign-in" className="project-navigation-link">
              Sign In
            </Link>

            <Link to="/sign-up" className="project-navigation-link">
              Sign Up
            </Link>
          </>
        )}

        {userCtx.user && (
          <Link
            onClick={logoutHandler}
            className="project-navigation-link"
          >
            Sign Out
          </Link>
        )}

        {userCtx.user?.role === "site_admin" && (
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'project-navigation-link link-active' : 'project-navigation-link'}
          >
            Projects
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default ProjectNavigation;
