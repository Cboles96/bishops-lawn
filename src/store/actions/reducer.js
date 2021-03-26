import * as actionTypes from "./actionTypes";

// Homepage

export const servicesMouseOver = (services, testimonial, store) => {
  return {
    type: actionTypes.OPEN_SERVICES,
    services: services,
    testimonial: testimonial,
    store: store
  };
};

export const testimonialMouseOver = (services, testimonial, store) => {
  return {
    type: actionTypes.OPEN_TESTIMONIAL,
    services: services,
    testimonial: testimonial,
    store: store
  };
};

export const storeMouseOver = (services, testimonial, store) => {
  return {
    type: actionTypes.OPEN_STORE,
    services: services,
    testimonial: testimonial,
    store: store
  };
};

// Footer

export const creditsClickedHandler = (credits, backdrop, cancel, cancelClassName) => {
  return {
    type: actionTypes.OPEN_CREDITS,
    credits: credits,
    backdrop: backdrop,
    cancel: cancel,
    cancelClassName: cancelClassName
  };
};

export const cancelClickedHandler = () => {
  return {
    type: actionTypes.CLOSE_CREDITS,
  };
};