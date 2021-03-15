import React from "react";

import About from "../../../assets/images/icons/about.png";
import Services from "../../../assets/images/icons/services.png";
import Gallery from "../../../assets/images/icons/gallery.png";

import classes from "../FooterModal/FooterModal.module.css";

const FooterModal = (props) => {
  return (
    <div
      className={
        props.creditState
          ? classes.Modal_Container
          : `${classes.Modal_Container} ${classes.Modal_Hidden}`
      }
    >
      <ul className={classes.Icon_List}>
        <li>
          <img src={About} alt="About Us"></img>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/icons/set/resume"
          >
            Resume icon
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
      </ul>
    </div>
  );
};

export default FooterModal;
