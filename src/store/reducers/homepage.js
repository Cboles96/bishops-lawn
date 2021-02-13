import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  services: false,
  testimonial: true,
  store: false,
};

const servicesHandler = (state, action) => {
  return updateObject(state, {
    services: true,
    testimonial: false,
    store: false,
  });
};

const testimonialHandler = (state, action) => {
  return updateObject(state, {
    services: false,
    testimonial: true,
    store: false,
  });
};

const storeHandler = (state, action) => {
  return updateObject(state, {
    services: false,
    testimonial: false,
    store: true,
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
    default:
      return state;
  }
};

export default reducer;
