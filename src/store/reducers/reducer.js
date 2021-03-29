import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  services: false,
  testimonial: true,
  store: false,
  loginBackdrop: false,
  loginModal: false,
  loginCancel: false,
  loginCancelClass: null,
  creditsBackdrop: false,
  creditsModal: false,
  creditsCancel: false,
  creditsCancelClass: null,
};

// Homepage

const servicesHandler = (state, action) => {
  return updateObject(state, {
    services: action.services,
    testimonial: action.testimonial,
    store: action.store,
  });
};

const testimonialHandler = (state, action) => {
  return updateObject(state, {
    services: action.services,
    testimonial: action.testimonial,
    store: action.store,
  });
};

const storeHandler = (state, action) => {
  return updateObject(state, {
    services: action.services,
    testimonial: action.testimonial,
    store: action.store,
  });
};

// Login Modal

const showLoginModal = (state, action) => {
  return updateObject(state, {
    loginBackdrop: action.loginBackdrop,
    loginModal: action.loginModal,
    loginCancel: action.loginCancel,
    loginCancelClass: action.loginCancelClass,
  });
};

const closeLoginModal = (state, action) => {
  return updateObject(state, {
    loginBackdrop: action.loginBackdrop,
    loginModal: action.loginModal,
    loginCancel: action.loginCancel,
    loginCancelClass: action.loginCancelClass,
  });
};

// Credits Modal

const showCreditsModal = (state, action) => {
  return updateObject(state, {
    creditsBackdrop: action.creditsBackdrop,
    creditsModal: action.creditsModal,
    creditsCancel: action.creditsCancel,
    creditsCancelClass: action.creditsCancelClass,
  });
};

const closeCreditsModal = (state, action) => {
  return updateObject(state, {
    creditsBackdrop: action.creditsBackdrop,
    creditsModal: action.creditsModal,
    creditsCancel: action.creditsCancel,
    creditsCancelClass: action.creditsCancelClass,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SERVICES:
      return servicesHandler(state, action);
    case actionTypes.OPEN_TESTIMONIAL:
      return testimonialHandler(state, action);
    case actionTypes.OPEN_STORE:
      return storeHandler(state, action);
    case actionTypes.OPEN_LOGIN_MODAL:
      return showLoginModal(state, action);
    case actionTypes.CLOSE_LOGIN_MODAL:
      return closeLoginModal(state, action);
    case actionTypes.OPEN_CREDITS_MODAL:
      return showCreditsModal(state, action);
    case actionTypes.CLOSE_CREDITS_MODAL:
      return closeCreditsModal(state, action);
    default:
      return state;
  }
};

export default reducer;
