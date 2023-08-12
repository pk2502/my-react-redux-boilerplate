import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

const Layout = ({ children }) => {
  const toggleMenu = () => {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collapsed");
      body.classList.toggle("sidebar-enable");
    }
  };

  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
      <div id="layout-wrapper">
        <Header toggleMenu={toggleMenu} />
        <Sidebar />
        <div className="main-content">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
