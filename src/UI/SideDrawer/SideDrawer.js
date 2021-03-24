import React from "react";

import { NavLink } from "react-router-dom";

import classes from "../SideDrawer/SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <div
      className={
        props.sidedrawerState
          ? classes.SideDrawer
          : `${classes.SideDrawer} ${classes.SideDrawer_Hidden}`
      }
    >
      <ul className={classes.Link_List}>
        <NavLink to="/about" className={classes.Links}>About</NavLink>
        <NavLink to="/services" className={classes.Links}>Services</NavLink>
        <NavLink to="/gallery" className={classes.Links}>Gallery</NavLink>
        <NavLink to="/store" className={classes.Links}>Store</NavLink>
        <NavLink to="/contact" className={classes.Links}>Contact Us</NavLink>
      </ul>
    </div>
  );
};

export default SideDrawer;
