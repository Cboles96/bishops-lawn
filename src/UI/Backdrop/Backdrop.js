import React from "react";

import classes from "../Backdrop/Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div
      className={
        props.backdropState
          ? classes.Backdrop
          : `${classes.Backdrop} ${classes.Backdrop_Hidden}`
      }
      onClick={props.clicked}
    >
    </div>
  );
};

export default Backdrop;
