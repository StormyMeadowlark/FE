import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import AutoSchool from './pages/AutoSchool.jsx';
import Faq from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "AutoSchool",
        element: <AutoSchool />,
      },
      {
        path: "Faq",
        element: <Faq />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
