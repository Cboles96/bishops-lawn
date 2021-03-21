import React, { useState } from "react";

import Cancel from '../../../UI/Cancel/Cancel';

import About from "../../../assets/images/icons/about.png";
import Services from "../../../assets/images/icons/services.png";
import Gallery from "../../../assets/images/icons/gallery.png";
import Store from "../../../assets/images/icons/store.png";
import Contact from "../../../assets/images/icons/contact.png";

import classes from "../FooterModal/FooterModal.module.css";

const FooterModal = (props) => {
  const [posLeft] = useState("91%");
  const [posTop] = useState("0");

  return (
    <div
      className={
        props.creditState
          ? classes.Modal_Container
          : `${classes.Modal_Container} ${classes.Modal_Hidden}`
      }
    >
      <Cancel posLeft={posLeft} posTop={posTop} />
      <ul className={classes.Icon_List}>
        <li>
          <img src={About} alt="About Us"></img>
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/help">
            Help icon
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
          icon by Icons8
          </a>
        </li>
        <li>
          <img src={Services} alt="Services"></img>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/nature-care"
          >
            Nature Care icon
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            icon by Icons8
          </a>
        </li>
        <li>
          <img src={Gallery} alt="Gallery"></img>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/stack-of-photos--v1"
          >
            Photo Gallery icon
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            icon by Icons8
          </a>
        </li>
        <li>
          <img src={Store} alt="Store"></img>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/us-dollar"
          >
            US Dollar icon
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            icon by Icons8
          </a>
        </li>
        <li>
          <img src={Contact} alt="Contact"></img>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/mail-contact"
          >
            Mail Contact icon
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            icon by Icons8
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterModal;
