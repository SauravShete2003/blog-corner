import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./views/Home/Home";
import FortView from "./views/FortView/FortView";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "forts/:id",
    element: <FortView />,
  },
]);

root.render(<RouterProvider router={router} />);
