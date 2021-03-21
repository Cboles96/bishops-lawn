import React from "react";

import CancelBtn from "../../assets/images/icons/cancel.png";

import classes from "../Cancel/Cancel.module.css";

const Cancel = (props) => {
  return (
    <div
      className={classes.Cancel_Btn}
      style={{ left: props.posLeft, top: props.posTop }}
    >
      <img src={CancelBtn} alt="Cancel Button"></img>
    </div>
  );
};

export default Cancel;
