import React, { useEffect } from "react";

import CancelBtn from "../../assets/images/icons/cancel.png";

import classes from "../Cancel/Cancel.module.css";

const Cancel = (props) => {

  return (
    <div
      className={props.cancel ? classes.Cancel_Btn : `${classes.Cancel_Btn} ${classes.Hidden}`}
      onClick={props.clicked}
      style={{ left: props.posLeft, top: props.posTop }}
    >
      <img src={CancelBtn} alt="Cancel Button"></img>
    </div>
  );
};

export default Cancel;
