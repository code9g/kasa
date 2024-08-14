import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
