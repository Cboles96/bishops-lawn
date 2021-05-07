import React from "react";

import Dropdown from "../Dropdown/Dropdown";
import classes from "../PreviewButton/PreviewButton.module.css";

const PreviewButton = (props) => {
  // const classSwitcher = () => {
  //   let classId;
  //   switch (props.tag) {
  //     case "A Peek at our Services!":
  //       if (props.servicesState) {
  //         classId = classes.Services_Preview_Active;
  //       } else {
  //       classId = classes.Services_Preview_Inactive;
  //       }
  //       return classId;
  //     case "What our Clients have to say...":
  //       if (props.testimonialState) {
  //         classId = classes.Testimonial_Preview_Active;
  //       } else {
  //       classId = classes.Testimonial_Preview_Inactive;
  //       }
  //       return classId;
  //     case "Check out our Virtual Store!":
  //       if (props.storeState) {
  //         classId = classes.Store_Preview_Active;
  //       } else {
  //       classId = classes.Store_Preview_Inactive;
  //       }
  //       return classId;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <div className={classes.Preview_Button_Container}>
      <div
        className={
          props.aboutState || props.testimonialState || props.storeState
            ? classes.Preview_Button_Active
            : classes.Preview_Button_Inactive
        }
        onMouseOver={props.mouseover}
      >
        <h2 onMouseOver={props.mouseover}>{props.tag}</h2>
        <Dropdown onMouseOver={props.mouseover} />
      </div>
    </div>
  );
};

export default PreviewButton;
