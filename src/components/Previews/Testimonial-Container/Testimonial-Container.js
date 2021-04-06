import React from "react";

import Aux from "../../../hoc/Aux";

import John from "../../../assets/images/avatars/testimonial-john.jpg";
import Mackenzie from "../../../assets/images/avatars/testimonial-mackenzie.jpeg";
import David from "../../../assets/images/avatars/testimonial-david.jpeg";
import Mallory from "../../../assets/images/avatars/testimonial-mallory.jpeg";

import Testimonial from "./Testimonial/Testimonial";

import classes from "../Testimonial-Container/Testimonial-Container.module.css";

const testimonialContainer = () => {
  const testimonials = {
    john: {
      name: "John",
      text:
        `"I just moved to Nashville this past year and a buddy told me about Bishop's Lawn Care's services. A very friendly bunch they are! The pricing is fair and the result is exceptional!"`,
      image: John,
      order: "-1",
      textAlign: "right",
    },
    mackenzie: {
      name: "Mackenzie",
      text:
        `"I live a busy lifestyle and lawn care has never been my specialty. I was relieved to find a team in Bishop's Lawn Care who take their work seriously and aim to please everytime!"`,
      image: Mackenzie,
      textAlign: "left",
    },
    david: {
      name: "David",
      text:
        `"My yard was getting really out of hand last summer and after some research I came across Bishop's Lawn Care.  I have no complaints!  Always on time and very nice people as well."`,
      image: David,
      order: "-1",
      textAlign: "right",
    },
    mallory: {
      name: "Mallory",
      text:
        `"I've personally recommended Bishop's Lawn Care to many of my friends.  The service is impeccable and my lawn has never looked greater!"`,
      image: Mallory,
      textAlign: "left",
    },
  };

  return (
    <Aux>
      <div className={classes.Testimonial_Container}>
        <Testimonial
          name={testimonials.john.name}
          text={testimonials.john.text}
          image={testimonials.john.image}
          order={testimonials.john.order}
          align={testimonials.john.align}
          justify={testimonials.john.justify}
          textAlign={testimonials.john.textAlign}
        />
        <Testimonial
          name={testimonials.mackenzie.name}
          text={testimonials.mackenzie.text}
          image={testimonials.mackenzie.image}
          align={testimonials.mackenzie.align}
          justify={testimonials.mackenzie.justify}
          textAlign={testimonials.mackenzie.textAlign}
        />
        <Testimonial
          name={testimonials.david.name}
          text={testimonials.david.text}
          image={testimonials.david.image}
          order={testimonials.david.order}
          textAlign={testimonials.david.textAlign}
        />
        <Testimonial
          name={testimonials.mallory.name}
          text={testimonials.mallory.text}
          image={testimonials.mallory.image}
          textAlign={testimonials.mallory.textAlign}
        />
      </div>
    </Aux>
  );
};

export default testimonialContainer;
