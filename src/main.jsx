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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
