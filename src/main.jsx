import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./pages/error-page.jsx";
import Specs from './pages/Specs.jsx';
import Games from './pages/Games.jsx';
import Gallery from './pages/Gallery.jsx';
import Rules from './pages/Rules.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "specs",
    element: <Specs />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "rules",
    element: <Rules />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
