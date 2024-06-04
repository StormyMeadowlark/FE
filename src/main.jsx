import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider, useHref } from "react-router-dom";
import App from "./App";
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import AutoSchool from './pages/AutoSchool.jsx';
import Faq from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Makes from './pages/Makes.jsx';

const router = createBrowserRouter([
  {
    path:"/",
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
            path:"services/:href",
            element: <Services />,
          }
        ]
      },
      {
        path: "faq",
        element: <Faq />,
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
        element: <AutoSchool />,
      },
      {
        path: "experience",
        element: <Experience />,
        children: [
          {
            path:"experience/:href",
            element: <Experience />,
          }
        ]
      },
      {
        path: "makes",
        element: <Makes />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
