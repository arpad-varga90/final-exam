import React from "react";
import ReactDOM from "react-dom/client";
import { initFakeApi } from "./mirage.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FurnituresPages from "./Pages/FurnituresPages";
import RoomsPages from "./Pages/RoomsPages";

import "./index.css";

// don't touch this line
initFakeApi();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RoomsPages />,
  },
  {
    path: "/rooms/:id",
    element: <FurnituresPages />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
