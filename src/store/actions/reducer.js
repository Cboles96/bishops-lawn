import * as actionTypes from "./actionTypes";

// Homepage

export const aboutMouseOver = (about, testimonial, store) => {
  return {
    type: actionTypes.OPEN_ABOUT,
    about: about,
    testimonial: testimonial,
    store: store
  };
};

export const testimonialMouseOver = (about, testimonial, store) => {
  return {
    type: actionTypes.OPEN_TESTIMONIAL,
    about: about,
    testimonial: testimonial,
    store: store
  };
};

export const storeMouseOver = (about, testimonial, store) => {
  return {
    type: actionTypes.OPEN_STORE,
    about: about,
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