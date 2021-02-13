import * as actionTypes from "./actionTypes";

export const servicesMouseOver = () => {
  return {
    type: actionTypes.OPEN_SERVICES,
  };
};

export const testimonialMouseOver = () => {
  return {
    type: actionTypes.OPEN_TESTIMONIAL,
  };
};

export const storeMouseOver = () => {
  return {
    type: actionTypes.OPEN_STORE,
  };
};
