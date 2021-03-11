import React from "react";

import classes from '../John/John.module.css';

import JohnPicture from "../../../../assets/images/avatars/testimonial-john.jpg";

const John = (props) => {
  return (
    <div className={classes.Testimonial_John}>
      <p>
        "I just moved to Nashville this past year and a buddy told me about
        Bishop's Lawn Care's services. A very friendly bunch they are! The
        pricing is fair and the result is exceptional!"
      </p>
      <div className={classes.Testimonial_John_Image}>
        <img src={JohnPicture} alt="John" onClick={props.clicked}></img>
        <h1>John</h1>
      </div>
    </div>
  );
};

export default John;