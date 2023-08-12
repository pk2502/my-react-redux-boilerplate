import PropTypes from "prop-types";
import React from "react";
import ProfileMenu from "./ProfileMenu";

const Header = ({ toggleMenu }) => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex flex-row align-items-center gap-4 w-100">
            <button
              type="button"
              className="btn btn-sm font-size-16"
              id="vertical-menu-btn"
              onClick={() => {
                toggleMenu();
              }}
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>
            <div className="d-flex flex-row align-items-center gap-3 ms-auto me-2">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = { toggleMenu: PropTypes.func };

export default Header;
