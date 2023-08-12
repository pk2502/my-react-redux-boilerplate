import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const ProfileMenu = () => {
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item d-flex flex-row align-items-center gap-2"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src="/images/avatar-1.jpg"
            alt="Header Avatar"
          />
          <span className="header-links font-size-14">admin</span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/">
            <i className="mdi mdi-at font-size-16 align-middle" /> Email
          </DropdownItem>
          <DropdownItem tag="a" href="/">
            <i className="mdi mdi-family-tree font-size-16 align-middle" />{" "}
            Support
          </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem
            onClick={() => {
              localStorage.clear();
              history.push("/login");
            }}
            role="button"
            className="dropdown-item"
          >
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />{" "}
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileMenu;
