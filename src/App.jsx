import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rental from "./pages/Rental";
import "./scss/main.scss";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "rental/:id", element: <Rental /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/kasa" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
