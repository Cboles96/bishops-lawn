import React, { useState } from "react";

import NavigationItem from "../../components/Navigation/NavigationItem/NavigationItem";

import classes from "../SideDrawer/SideDrawer.module.css";

const SideDrawer = (props) => {
  const [sidedrawer, showSideDrawer] = useState(true);

  const sidedrawerClickedHandler = () => {
    showSideDrawer(false);
  };

  return (
    <div
      className={
        props.sidedrawerState && sidedrawer
          ? classes.SideDrawer
          : `${classes.SideDrawer} ${classes.SideDrawer_Hidden}`
      }
    >
      <ul className={classes.Link_List}>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/services">Services</NavigationItem>
        <NavigationItem link="/gallery">Gallery</NavigationItem>
        <NavigationItem link="/store">Store</NavigationItem>
        <NavigationItem link="/contact">Contact Us</NavigationItem>
      </ul>
    </div>
  );
};

export default SideDrawer;
