import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import GadgetContextProvider from './components/Context/GadgetContextProvider.jsx';
import ViewDetails from './components/ViewDetails/ViewDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Stastics from './components/Stastics/Stastics.jsx';
import Support from './components/Support/Support.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/viewDetails",
        element: <ViewDetails></ViewDetails>
      },
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path:"/stastics",
        element: <Stastics></Stastics>,
      },
      {
        path:"/support",
        element: <Support></Support>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetContextProvider>
    <RouterProvider router={router} />
    </GadgetContextProvider>
  </StrictMode>,
)
