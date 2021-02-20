import React from "react";

import classes from "../Testimonial/Testimonial.module.css";
import John from "../../../assets/images/avatars/testimonial-john.jpg";
import Mackenzie from "../../../assets/images/avatars/testimonial-mackenzie.jpeg";

const testimonial = (props) => {
  return (
    <div className={classes.Testimonial_Wrapper}>
      <div className={classes.Testimonial_John}>
        <p>
          "I just moved to Nashville this past year and a buddy told me about
          Bishop's Lawn Care's services. A very friendly bunch they are! The
          pricing is fair and the result is exceptional!"
        </p>
        <div className={classes.Testimonial_John_Image}>
          <img src={John} alt="John" onClick={props.clicked}></img>
          <h1>John</h1>
        </div>
      </div>
      <div className={classes.Testimonial_Mackenzie}>
        <div className={classes.Testimonial_Mackenzie_Image}>
          <h1>Mackenzie</h1>
          <img src={Mackenzie} alt="Mackenzie"></img>
        </div>
        <p>
          "I live a busy lifestyle and lawn care has never been my specialty. I
          was relieved to find a team in Bishop's Lawn Care who take their work
          seriously and aim to please everytime!"
        </p>
      </div>
    </div>
  );
};

export default testimonial;
