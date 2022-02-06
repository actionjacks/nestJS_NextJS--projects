import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";

import "./NewNavbar.css";

function NewNavbar({ pageWrapId, outerContainerId }) {
  return (
    <Menu outerContainerId={outerContainerId} pageWrapId={pageWrapId}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
}

export default NewNavbar;
