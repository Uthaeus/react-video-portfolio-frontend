import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
  const userCtx = useContext(UserContext);

  function logoutHandler() {
    console.log("logout");

    if (!userCtx.user) {
      return;
    }

    let token = localStorage.getItem("video-token");

    fetch("http://localhost:4000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("video-token");
          userCtx.logout();
          return response.json();
        }
      })
      .catch((error) => console.log("logout error:", error));
  }

  return (
    <nav className="main-navigation">
      <div className="main-navigation-logo-wrapper">
        <Link to="/" className="main-navigation-logo">
          {userCtx.user ? userCtx.user.username : "Your Logo Here"}
        </Link>
      </div>

      <div className="main-navigation-items">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/options"
          className={({ isActive }) =>
            isActive ? "nav-link link-active" : "nav-link"
          }
        >
          Options
        </NavLink>
      </div>

      <div className="main-navigation-auth">
        {userCtx.user ? (
          <Link className="nav-link" onClick={logoutHandler}>
            Logout
          </Link>
        ) : (
          <>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "nav-link link-active" : "nav-link"
              }
            >
              Sign In
            </NavLink>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive ? "nav-link link-active" : "nav-link"
              }
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
