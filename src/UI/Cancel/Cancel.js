import React from "react";

import CancelBtn from "../../assets/images/icons/cancel.png";

import classes from "../Cancel/Cancel.module.css";

const Cancel = (props) => {

  const switchClass = () => {
    switch(props.cancelClass) {
      case "footer":
        return classes.Footer_Class;
      case "login":
        return classes.Login_Class;
      default: return classes.Hidden;
    }
  }

  return (
    <div
      className={switchClass()}
      onClick={props.clicked}
    >
      <img src={CancelBtn} alt="Cancel Button"></img>
    </div>
  );
};

export default Cancel;
