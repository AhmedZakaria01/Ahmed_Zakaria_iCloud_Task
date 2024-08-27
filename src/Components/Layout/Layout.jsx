import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";

function Layout() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [navbarIconValue, setNavbarIconValue] = useState("");

  const toggleSideNav = (value) => {
    setIsSideNavOpen(!isSideNavOpen);
    setNavbarIconValue(value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`flex-1 transition-all duration-300 ${
          isSideNavOpen ? "w-3/4" : "w-full"
        }`}
      >
        <Navbar toggleSideNav={toggleSideNav} />
        <div className="flex flex-col justify-center items-center h-[100vh]">
          <Outlet />
        </div>
      </div>
      <SideMenu
        isOpen={isSideNavOpen}
        toggleSideNav={toggleSideNav}
        navbarIconValue={navbarIconValue}
      />
      <Footer />
    </div>
  );
}

export default Layout;
