import React from "react";

import { NavLink } from "react-router-dom";

import Aux from "../../hoc/Aux";
import NavigationItem from "./NavigationItem/NavigationItem";

import Logo from "../../assets/images/icons/logo2.png";
import FacebookLink from "../../assets/images/icons/social-media/facebook.png";
import InstagramLink from "../../assets/images/icons/social-media/instagram.png";
import About from "../../assets/images/icons/about.png";
import Services from "../../assets/images/icons/services.png";
import Gallery from "../../assets/images/icons/gallery.png";
import Store from "../../assets/images/icons/store.png";

import classes from "../Navigation/NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <Aux>
      <header className={classes.Header}>
        <div className={classes.Top_Header}>
          <a
            className={classes.InstagramLink}
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={InstagramLink} alt="Instagram Link"></img>
          </a>
          <NavigationItem link="/home">
            <img className={classes.Logo} src={Logo} alt="Logo"></img>
          </NavigationItem>
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
            <div className={classes.About}>
              <NavLink to="/about">
                <img src={About} alt="About Us"></img>
              </NavLink>
              <NavigationItem link="/about">About</NavigationItem>
            </div>
            <div className={classes.Services}>
              <NavLink to="/services">
                <img src={Services} alt="Services"></img>
              </NavLink>
              <NavigationItem link="/services">Services</NavigationItem>
            </div>
            <div className={classes.Gallery}>
              <NavLink to="/gallery">
                <img src={Gallery} alt="Gallery"></img>
              </NavLink>
              <NavigationItem link="/gallery">Gallery</NavigationItem>
            </div>
            <div className={classes.Store}>
              <NavLink to="/store">
                <img src={Store} alt="Store"></img>
              </NavLink>
              <NavigationItem link="/store">Store</NavigationItem>
            </div>
            <NavigationItem link="/contact">Contact Us</NavigationItem>
          </ul>
        </div>
      </header>
    </Aux>
  );
};

export default NavigationItems;
