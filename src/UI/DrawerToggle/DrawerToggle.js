import React from "react";

import DrawerToggleBtn from "../../assets/images/icons/menu.png";

import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => {
  return (
    <div className={classes.DrawerToggle}>
      <img
        className={classes.Menu_Button}
        src={DrawerToggleBtn}
        alt="Menu Button"
        onClick={props.clicked}
      ></img>
    </div>
  );
};

export default drawerToggle;
