import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main id="mainContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
