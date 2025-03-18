import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/style.scss"
import { Provider } from "react-redux";
import { store } from "./app/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./page/Home.jsx";

import CartPage from "./page/CartPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
