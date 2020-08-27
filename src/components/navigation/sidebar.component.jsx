import React from 'react';

import { NavLink } from "react-router-dom";

export const Sidebar = ({ routes }) => {
  return (
    <nav className={"col-md-3 col-lg-2 d-md-block bg-secondary sidebar collapse"}>
      <div className={"sidebar-sticky pt-3"}>
        <ul className={"nav flex-column"}>
          {routes.map((route, i) => (
            <NavLink
              key={i}
              activeClassName="text-light"
              className={"nav-item nav-link"}
              exact
              to={route.pathname}
            >{route.name}</NavLink>
          ))}
        </ul>
      </div>
    </nav>
  )
}
