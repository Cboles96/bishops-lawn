import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Aux from "../../hoc/Aux";
import NavigationItem from "./NavigationItem/NavigationItem";

import Logo from "../../assets/images/icons/logo2.png";
import FacebookLink from "../../assets/images/icons/social-media/facebook.png";
import InstagramLink from "../../assets/images/icons/social-media/instagram.png";
import About from "../../assets/images/icons/about.png";
import Services from "../../assets/images/icons/services.png";
import Gallery from "../../assets/images/icons/gallery.png";
import Store from "../../assets/images/icons/store.png";
import Contact from "../../assets/images/icons/contact.png";

import classes from "../Navigation/NavigationItems.module.css";

const NavigationItems = () => {
  const history = useHistory();

  useEffect(() => {
    activePathHandler();
  });

  const [showAboutNavItem, setShowAboutNavItem] = useState();
  const [showServicesNavItem, setShowServicesNavItem] = useState();
  const [showGalleryNavItem, setShowGalleryNavItem] = useState();
  const [showStoreNavItem, setShowStoreNavItem] = useState();
  const [showContactNavItem, setShowContactNavItem] = useState();

  const aboutMouseOverHandler = () => {
    setShowAboutNavItem("about");
    setShowServicesNavItem();
    setShowGalleryNavItem();
    setShowStoreNavItem();
    setShowContactNavItem();
  };

  const servicesMouseOverHandler = () => {
    setShowAboutNavItem();
    setShowServicesNavItem("services");
    setShowGalleryNavItem();
    setShowStoreNavItem();
    setShowContactNavItem();
  };

  const galleryMouseOverHandler = () => {
    setShowAboutNavItem();
    setShowServicesNavItem();
    setShowGalleryNavItem("gallery");
    setShowStoreNavItem();
    setShowContactNavItem();
  };

  const storeMouseOverHandler = () => {
    setShowAboutNavItem();
    setShowServicesNavItem();
    setShowGalleryNavItem();
    setShowStoreNavItem("store");
    setShowContactNavItem();
  };

  const contactMouseOverHandler = () => {
    setShowAboutNavItem();
    setShowServicesNavItem();
    setShowGalleryNavItem();
    setShowStoreNavItem();
    setShowContactNavItem("contact");
  };

  const aboutMouseOutHandler = () => {
    setShowAboutNavItem();
  };

  const servicesMouseOutHandler = () => {
    setShowServicesNavItem();
  };

  const galleryMouseOutHandler = () => {
    setShowGalleryNavItem();
  };

  const storeMouseOutHandler = () => {
    setShowStoreNavItem();
  };

  const contactMouseOutHandler = () => {
    setShowContactNavItem();
  };

  let activeHomePage;
  let activeAboutPage;
  let activeServicesPage;
  let activeGalleryPage;
  let activeStorePage;
  let activeContactPage;

  const activePathHandler = () => {
    switch (history.location.pathname) {
      case "/home":
        activeHomePage = (
          <img
            className={`${classes.Logo} ${classes.Active}`}
            src={Logo}
            alt="Logo"
          ></img>
        );
        return activeHomePage;
      case "/about":
        activeAboutPage = (
          <img className={classes.Active} src={About} alt="About Us"></img>
        );
        return activeAboutPage;
      case "/services":
        activeServicesPage = (
          <img className={classes.Active} src={Services} alt="Services"></img>
        );
        return activeServicesPage;
      case "/gallery":
        activeGalleryPage = (
          <img className={classes.Active} src={Gallery} alt="Gallery"></img>
        );
        return activeGalleryPage;
      case "/store":
        activeStorePage = (
          <img className={classes.Active} src={Store} alt="Store"></img>
        );
        return activeStorePage;
      case "/contact":
        activeContactPage = (
          <img className={classes.Active} src={Contact} alt="Contact"></img>
        );
        return activeContactPage;
      default:
        return null;
    }
  };
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
          <NavLink to="/home">
            {activePathHandler() === activeHomePage ? (
              activeHomePage
            ) : (
              <img className={classes.Logo} src={Logo} alt="Logo"></img>
            )}
          </NavLink>
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
              <NavLink
                to="/about"
                onMouseOver={aboutMouseOverHandler}
                onMouseOut={aboutMouseOutHandler}
              >
                {activePathHandler() === activeAboutPage ? (
                  activeAboutPage
                ) : (
                  <img
                    className={classes.Inactive}
                    src={About}
                    alt="About Us"
                  ></img>
                )}
              </NavLink>
              <NavigationItem
                link="/about"
                about={showAboutNavItem}
                mouseover={aboutMouseOverHandler}
              >
                About
              </NavigationItem>
            </div>
            <div className={classes.Services}>
              <NavLink to="/services" onMouseOver={servicesMouseOverHandler} onMouseOut={servicesMouseOutHandler}>
                {activePathHandler() === activeServicesPage ? (
                  activeServicesPage
                ) : (
                  <img
                    className={classes.Inactive}
                    src={Services}
                    alt="Services"
                  ></img>
                )}
              </NavLink>
              <NavigationItem
                link="/services"
                services={showServicesNavItem}
                mouseover={servicesMouseOverHandler}
              >
                Services
              </NavigationItem>
            </div>
            <div className={classes.Gallery}>
              <NavLink to="/gallery" onMouseOver={galleryMouseOverHandler} onMouseOut={galleryMouseOutHandler}>
                {activePathHandler() === activeGalleryPage ? (
                  activeGalleryPage
                ) : (
                  <img
                    className={classes.Inactive}
                    src={Gallery}
                    alt="Gallery"
                  ></img>
                )}
              </NavLink>
              <NavigationItem
                link="/gallery"
                gallery={showGalleryNavItem}
                mouseover={galleryMouseOverHandler}
              >
                Gallery
              </NavigationItem>
            </div>
            <div className={classes.Store}>
              <NavLink to="/store" onMouseOver={storeMouseOverHandler} onMouseOut={storeMouseOutHandler}>
                {activePathHandler() === activeStorePage ? (
                  activeStorePage
                ) : (
                  <img
                    className={classes.Inactive}
                    src={Store}
                    alt="Store"
                  ></img>
                )}
              </NavLink>
              <NavigationItem
                link="/store"
                store={showStoreNavItem}
                mouseover={storeMouseOverHandler}
              >
                Store
              </NavigationItem>
            </div>
            <div className={classes.Contact}>
              <NavLink to="/contact" onMouseOver={contactMouseOverHandler} onMouseOut={contactMouseOutHandler}>
                {activePathHandler() === activeContactPage ? (
                  activeContactPage
                ) : (
                  <img
                    className={classes.Inactive}
                    src={Contact}
                    alt="Contact"
                  ></img>
                )}
              </NavLink>
              <NavigationItem
                link="/contact"
                contact={showContactNavItem}
                mouseover={contactMouseOverHandler}
              >
                Contact
              </NavigationItem>
            </div>
          </ul>
        </div>
      </header>
    </Aux>
  );
};

export default NavigationItems;
