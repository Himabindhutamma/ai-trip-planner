import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/gallery", "/login"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
