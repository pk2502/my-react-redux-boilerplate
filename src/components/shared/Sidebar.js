import React from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import SidebarContent from "./SidebarContent";

const Sidebar = ({ layout }) => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box text-white font-size-16 mt-4">
          <Link to="/" className="logo logo-lg text-white text-center">
            Logo
          </Link>
          <Link to="/" className="logo logo-sm text-white text-center">
            Logo
          </Link>
        </div>
        <div data-simplebar className="h-100">
          <SidebarContent type={layout.leftSidebarType} />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({ layout: state.Layout });

export default connect(
  mapStateToProps,
  {}
)(withRouter(withTranslation()(Sidebar)));
