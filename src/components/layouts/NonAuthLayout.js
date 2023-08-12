import React from "react";
import { withRouter } from "react-router-dom";

const NonAuthLayout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default withRouter(NonAuthLayout);
