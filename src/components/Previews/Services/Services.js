import React from "react";

import classes from "../Services/Services.module.css";

const Services = (props) => {
  return (
    <div
      className={
        props.servicesState
          ? classes.Services_Container_Active
          : classes.Services_Container_Inactive
      }
    ></div>
  );
};

export default Services;
