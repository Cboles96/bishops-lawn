import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../NavigationItem/NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink to={props.link} exact={props.exact} activeStyle={{ opacity: 1 }}>
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
