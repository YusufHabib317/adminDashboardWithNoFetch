import "./index.scss";
import "./style/dark.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { productInputs, userInputs } from "./common/formSource/FormSource";

import { DarkModeContextProvider } from "./context/darkModeContext";
import Index from "./pages/rootLayout/Index";
import List from "./pages/list/List";
import New from "./pages/new/New";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/rootLayout/Root";
import Single from "./pages/single/Single";

const router = createBrowserRouter([
  {
    path: "/admin_dashboard_noFetchData",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "users", element: <List link={"new"} /> },
      { path: "users/:userId", element: <Single /> },
      {
        path: "users/new",
        element: <New inputs={userInputs} title={"Add New User"} />,
      },
      { path: "products", element: <List link={"new"} /> },
      { path: "products/:productId", element: <Single /> },
      {
        path: "products/new",
        element: <New inputs={productInputs} title={"Add New product"} />,
      },
    ],
  },

  // {
  //   path: "/users",
  //   children: [
  //     { index: true, element: <List /> },
  //     { path: ":userId", element: <Single /> },
  //     {
  //       path: "new",
  //       element: <New inputs={userInputs} title={"Add New Users"} />,
  //     },
  //   ],
  // },
  // {
  //   path: "/products",
  //   children: [
  //     { index: true, element: <List /> },
  //     { path: ":productId", element: <Single /> },
  //     {
  //       path: "new",
  //       element: <New inputs={productInputs} title={"Add New Product"} />,
  //     },
  //   ],
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DarkModeContextProvider>
    <RouterProvider router={router} />
  </DarkModeContextProvider>
);
