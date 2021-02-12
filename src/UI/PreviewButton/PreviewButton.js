import React from "react";

import Dropdown from "../Dropdown/Dropdown";
import classes from "../PreviewButton/PreviewButton.module.css";

const PreviewButton = (props) => {
  const classSwitcher = () => {
    switch (props.tag) {
      case "A Peek at our Services!":
        const classServices = classes.Services_Preview;
        return classServices;
      case "What our Clients have to say...":
        const classTestimonial = classes.Testimonial_Preview;
        return classTestimonial;
      case "Check out our Virtual Store!":
        const classStore = classes.Store_Preview;
        return classStore;
      default: return null;
    }
  };

  return (
    <div className={classes.Preview_Button_Container}>
      <div className={classSwitcher()} onMouseOver={props.mouseover}>
        <h2 onMouseOver={props.mouseover}>{props.tag}</h2>
        <Dropdown onMouseOver={props.mouseover} />
      </div>
    </div>
  );
};

export default PreviewButton;
