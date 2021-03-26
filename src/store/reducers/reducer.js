import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  services: false,
  testimonial: true,
  store: false,
  backdrop: false,
  credits: false,
  cancel: false,
  cancelClass: null,
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

// Footer

const creditsClickedHandler = (state, action) => {
  return updateObject(state, {
    backdrop: action.backdrop,
    credits: action.credits,
    cancel: action.cancel,
    cancelClass: action.cancelClassName,
  });
};

const cancelClickedHandler = (state, action) => {
  return updateObject(state, {
    credits: false,
    backdrop: false,
    cancel: false,
    cancelClass: null,
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
    case actionTypes.OPEN_CREDITS:
      return creditsClickedHandler(state, action);
    case actionTypes.CLOSE_CREDITS:
      return cancelClickedHandler(state, action);
    default:
      return state;
  }
};

export default reducer;
