import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Rental from "./pages/Rental";
import "./scss/main.scss";
import { rentalLoader, rentalsLoader } from "./utils/loaders";

// const routes = [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Navigate to="/home" />,
//           },
//           { path: "home", element: <Home />, loader: rentalsLoader },
//           { path: "about", element: <About /> },
//           { path: "rental/:id", element: <Rental />, loader: rentalLoader },
//           { path: "*", element: <NotFound /> },
//         ],
//       },
//     ],
//   },
// ];

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route errorElement={<ErrorPage />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} loader={rentalsLoader} />
      <Route path="about" element={<About />} />
      <Route path="rental/:id" element={<Rental />} loader={rentalLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(routes, { basename: "/kasa" });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
