import React from "react";

import classes from "../Footer/Footer.module.css";
import UHost from "../../assets/images/icons/uhost-icon.png";

const footer = () => {
  return (
    <footer className={classes.Footer_Container}>
      <ul>
        <div className={classes.UHost_Container}>
          <li>Hosted By</li>
          <a href="/">
            <img src={UHost} alt="UHost"></img>
          </a>
        </div>
        <li>
          <a href="/">Terms of Service</a>
        </li>
        <li>
          <a href="/">Customer Service</a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
