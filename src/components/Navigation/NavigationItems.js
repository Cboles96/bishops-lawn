import React from "react";

import Aux from "../../hoc/Aux";
import NavigationItem from "./NavigationItem/NavigationItem";

import Logo from "../../assets/images/icons/logo2.png";
import Menu from "../../assets/images/icons/controls/green-buttons/menu.png";
import FacebookLink from "../../assets/images/icons/social-media/facebook.png";
import InstagramLink from "../../assets/images/icons/social-media/instagram.png";

import classes from "../Navigation/NavigationItems.module.css";

const navigationItems = () => (
  <Aux>
    <header className={classes.Header}>
      <div className={classes.Left_Header}>
        <div className={classes.DrawerToggle}>
          <img src={Menu} alt="Menu"></img>
        </div>
        <NavigationItem link="/">
          <img className={classes.Logo} src={Logo} alt="Logo"></img>
        </NavigationItem>
        <a
          className={classes.InstagramLink}
          href="/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={InstagramLink} alt="Instagram Link"></img>
        </a>
        <a
          className={classes.FacebookLink}
          href="https://www.facebook.com/Bishops-Lawn-Care-531145520277013/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={FacebookLink} alt="Facebook Link"></img>
        </a>
      </div>
      <div className={classes.Header_Links}>
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/about">About</NavigationItem>
          <NavigationItem link="/services">Services</NavigationItem>
          <NavigationItem link="/gallery">Gallery</NavigationItem>
          <NavigationItem link="/store">Store</NavigationItem>
          <NavigationItem link="/contact">Contact Us</NavigationItem>
        </ul>
      </div>
    </header>
  </Aux>
);

export default navigationItems;
