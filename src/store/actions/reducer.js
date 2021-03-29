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

// Login Modal

export const showLoginModal = (backdrop, modal, cancel, cancelClass) => {
  return {
    type: actionTypes.OPEN_LOGIN_MODAL,
    loginBackdrop: backdrop,
    loginModal: modal,
    loginCancel: cancel,
    loginCancelClass: cancelClass
  };
};

export const closeLoginModal = (backdrop, modal, cancel, cancelClass) => {
  return {
    type: actionTypes.CLOSE_LOGIN_MODAL,
    loginBackdrop: backdrop,
    loginModal: modal,
    loginCancel: cancel,
    loginCancelClass: cancelClass
  };
};

// Credits Modal

export const showCreditsModal = (backdrop, modal, cancel, cancelClass) => {
  return {
    type: actionTypes.OPEN_CREDITS_MODAL,
    creditsBackdrop: backdrop,
    creditsModal: modal,
    creditsCancel: cancel,
    creditsCancelClass: cancelClass
  };
};

export const closeCreditsModal = (backdrop, modal, cancel, cancelClass) => {
  return {
    type: actionTypes.CLOSE_CREDITS_MODAL,
    creditsBackdrop: backdrop,
    creditsModal: modal,
    creditsCancel: cancel,
    creditsCancelClass: cancelClass
  };
};