import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience.jsx";
import Legal from "./pages/Legal.jsx";
import Services from "./pages/Services.jsx";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "services/:href",
            element: <ErrorPage />,
          },
        ],
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "auto-school",
        element: <ErrorPage />,
      },
      {
        path: "experience",
        element: <Experience />,
        children: [
          {
            path: "experience/:href",
            element: <Experience />,
          },
        ],
      },
      {
        path: "makes",
        element: <ErrorPage />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "login",
        element: <ErrorPage />,
      },
      {
        path: "register",
        element: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
