import React from "react";

import classes from "../Mackenzie/Mackenzie.module.css";

import MackenziePicture from "../../../../assets/images/avatars/testimonial-mackenzie.jpeg";

const Mackenzie = () => {
  return (
    <div className={classes.Testimonial_Mackenzie}>
      <div className={classes.Testimonial_Mackenzie_Image}>
        <h1>Mackenzie</h1>
        <img src={MackenziePicture} alt="Mackenzie"></img>
      </div>
      <p>
        "I live a busy lifestyle and lawn care has never been my specialty. I
        was relieved to find a team in Bishop's Lawn Care who take their work
        seriously and aim to please everytime!"
      </p>
    </div>
  );
};

export default Mackenzie;
