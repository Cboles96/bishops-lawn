import React from "react";
import { NavLink } from "react-router-dom";

import classes from "../NavigationItem/NavigationItem.module.css";

const NavigationItem = (props) => {
  const showLink = () => {
    if (props.about === "about") {
      return `${classes.NavigationItem_Hidden} ${classes.About}`;
    }
    if (props.services === "services") {
      return `${classes.NavigationItem_Hidden} ${classes.Services}`;
    }
    if (props.gallery === "gallery") {
      return `${classes.NavigationItem_Hidden} ${classes.Gallery}`;
    }
    if (props.store === "store") {
      return `${classes.NavigationItem_Hidden} ${classes.Store}`;
    }
    if (props.contact === "contact") {
      return `${classes.NavigationItem_Hidden} ${classes.Contact}`;
    }
    return classes.NavigationItem_Hidden;
  };
  return (
    <li className={classes.NavigationItemLi}>
      <NavLink to={props.link} exact={props.exact} className={showLink()}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
