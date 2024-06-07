import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import './index.css'
import ErrorPage from "./pages/error-page.jsx";
import Specs from './pages/Specs.jsx';
import Games from './pages/Games.jsx';
import Gallery from './pages/Gallery.jsx';
import Rules from './pages/Rules.jsx';


const router = createBrowserRouter([
  {
    path: "cyberclub/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "cyberclub/specs",
        element: <Specs />,
      },
      {
        path: "cyberclub/games",
        element: <Games />,
      },
      {
        path: "cyberclub/gallery",
        element: <Gallery />,
      },
      {
        path: "cyberclub/rules",
        element: <Rules />,
      },
    ]
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "specs",
//     element: <Specs />,
//   },
//   {
//     path: "games",
//     element: <Games />,
//   },
//   {
//     path: "gallery",
//     element: <Gallery />,
//   },
//   {
//     path: "rules",
//     element: <Rules />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
