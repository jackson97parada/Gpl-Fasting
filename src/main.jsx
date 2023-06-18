import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./styles.css";
import { Service } from "./components/SectionServices";

const router = createBrowserRouter([
  {
    path: "/Gpl-Fasting",
    element: <App />,
  },
  {
    path: "/Gpl-Fasting/servicio/:serviceId",
    element: <Service />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
