import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./styles.css";
import { Service } from "./components/SectionServices";
import { ROUTES } from "./constants/routes.js";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ROUTES.service,
    element: <Service />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
