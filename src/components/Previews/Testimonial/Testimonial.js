import React from "react";

import John from '../Testimonial/John/John';
import Mackenzie from '../Testimonial/Mackenzie/Mackenzie';

import classes from "../Testimonial/Testimonial.module.css";

const testimonial = (props) => {
  return (
    <div className={classes.Testimonial_Wrapper}>
      <John />
      <Mackenzie />
    </div>
  );
};

export default testimonial;
