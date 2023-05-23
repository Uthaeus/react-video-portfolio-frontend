import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/layouts/root-layout";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import OptionsPage from "./pages/options";
import ErrorPage from "./components/error/error";
import SignUp from "./components/auth/sign_up";
import SignIn from "./components/auth/sign_in";

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
