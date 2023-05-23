import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";

import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import OptionsPage from "./pages/options";
import ErrorPage from "./components/error/error";
import SignUp from "./components/auth/sign_up";
import SignIn from "./components/auth/sign_in";
import { UserContext } from "./store/user-context";
import ProjectsLayout from "./components/layouts/projects-layout";
import Projects from "./components/projects/projects";
import ProjectDetail from "./components/projects/project-detail";
import EditProject from "./components/projects/edit-project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "options",
        element: <OptionsPage />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "sign-in",
        element: <SignIn />
      }
    ]
  },
  {
    path: "/projects",
    element: <ProjectsLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Projects />
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail />
      },
      {
        path: "/projects/:id/edit",
        element: <EditProject />
      }
    ]
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("video-token");

    if (!token) {
      return;
    }

    if (!userCtx.user) {

      fetch("http://localhost:4000/user_check", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          userCtx.login(data);
        })
        .catch(error => console.log("validate error:", error));
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
