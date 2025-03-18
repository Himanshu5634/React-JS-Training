import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/scss/style.scss";
import StoreContaxtProvider from "./Context/StoreContaxt.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Post from "./Components/Post/Post.jsx";

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
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path:"/post/:postId",
    element: <Post/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StoreContaxtProvider>
    <RouterProvider router={router} />
  </StoreContaxtProvider>
);
