import React from "react";

import classes from "../Testimonial/Testimonial.module.css";

const testimonial = (props) => {
  return (
    <div className={classes.Testimonial}>
      <div className={classes.Name_Image}>
        <img
          src={props.image}
          alt={props.alt}
          style={{ width: props.width, height: props.height }}
        ></img>
        <h1>{props.name}</h1>
      </div>
      <p
        style={{
          order: props.order,
          textAlign: props.textAlign,
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default testimonial;
