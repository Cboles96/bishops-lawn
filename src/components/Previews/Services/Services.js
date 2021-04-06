import React from "react";

import Mower from "../../../assets/images/services/mower.png";
import LeafBlower from "../../../assets/images/services/leaf-blower.png";
import WeedEater from "../../../assets/images/services/weed-eater.png";

import classes from "../Services/Services.module.css";

const Services = (props) => {
  return (
    <div
      className={
        props.servicesState
          ? classes.Services_Container_Active
          : classes.Services_Container_Inactive
      }
    >
      <div className={classes.Mower}>
        <img src={Mower} alt="Lawn Mower"></img>
      </div>
      <div className={classes.LeafBlower}>
        <img src={LeafBlower} alt="LeafBlower"></img>
      </div>
      <div className={classes.WeedEater}>
        <img src={WeedEater} alt="Weed Eater"></img>
      </div>
    </div>
  );
};

export default Services;
