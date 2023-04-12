import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./componets/Details";
import Applied from "./componets/Applied";
import ErrorPage from "./componets/ErrorPage";
import Home from "./componets/Home";
import Blog from "./componets/Blog";
import Statistics from "./componets/Statistics";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('JobCategoryList.json')
      },
      {
        path: "/applied",
        element: <Applied/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/statistics",
        element: <Statistics/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
