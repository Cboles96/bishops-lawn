import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import { updateObject } from "../../shared/utility";

import PreviewButton from "../../UI/PreviewButton/PreviewButton";
import Services from "../../components/Previews/Services/Services";
import Testimonial from "../../components/Previews/Testimonial/Testimonial";
import Store from "../../components/Previews/Store/Store";
import Backdrop from "../../UI/Backdrop/Backdrop";
import LoginModal from "../../components/Login-Modal/Login-Modal";

import classes from "../Homepage/Homepage.module.css";
import Aux from "../../hoc/Aux";

class Homepage extends Component {
  state = {
    backdrop: false,
    modal: false,
    validation: {
      email: "",
      password: "",
    },
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const loggedIn = true;
    if (loggedIn) {
      setTimeout(() => {
        this.setState({
          backdrop: !this.state.backdrop,
          modal: !this.state.modal,
        });
      }, 1500);
    }
  }

  render() {
    const servicesTag = "A Peek at our Services!";
    const testimonialTag = "What our Clients have to say...";
    const storeTag = "Check out our Virtual Store!";

    let services = null;
    let testimonial = null;
    let store = null;

    const servicesMouseOverHandler = () => {
      // this.setState({ services: true, testimonial: false, store: false });
      services = true;
      testimonial = false;
      store = false;
      this.props.onServices(services, testimonial, store);
    };

    const testimonialMouseOverHandler = () => {
      // this.setState({ services: false, testimonial: true, store: false });
      services = false;
      testimonial = true;
      store = false;
      this.props.onTestimonial(services, testimonial, store);
    };

    const storeMouseOverHandler = () => {
      // this.setState({ services: false, testimonial: false, store: true });
      services = false;
      testimonial = false;
      store = true;
      this.props.onStore(services, testimonial, store);
    };

    const backdropClickedHandler = () => {
      this.setState({ backdrop: false, modal: false });
    };

    const emailChangedHandler = (event) => {
      this.setState({ email: event.target.value });
    };

    const passwordChangedHandler = (event) => {
      this.setState({ password: event.target.value });
    };

    return (
      <Aux>
        <Backdrop
          clicked={backdropClickedHandler}
          backdropState={this.state.backdrop}
        />
        <LoginModal
          modalState={this.state.modal}
          emailState={this.state.email}
          passwordState={this.state.password}
          emailChanged={emailChangedHandler}
          passwordChanged={passwordChangedHandler}
        />
        <div className={classes.Background}>
          <h1>
            The go-to Lawn Care service for Middle Tennessee Residents and
            Business Owners
          </h1>
        </div>
        <div className={classes.Preview_Grid}>
          <PreviewButton
            mouseover={servicesMouseOverHandler}
            tag={servicesTag}
          />
          <PreviewButton
            mouseover={testimonialMouseOverHandler}
            tag={testimonialTag}
          />
          <PreviewButton mouseover={storeMouseOverHandler} tag={storeTag} />
        </div>

        {this.props.ser ? <Services /> : null}

        {this.props.test ? <Testimonial /> : null}

        {this.props.st ? <Store /> : null}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ser: state.services,
    test: state.testimonial,
    st: state.store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onServices: (services, testimonial, store) =>
      dispatch(actions.servicesMouseOver(services, testimonial, store)),
    onTestimonial: (services, testimonial, store) =>
      dispatch(actions.testimonialMouseOver(services, testimonial, store)),
    onStore: (services, testimonial, store) =>
      dispatch(actions.storeMouseOver(services, testimonial, store)),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuth: (email, password, isSignup) =>
//       dispatch(actions.auth(email, password, isSignup)),
//     onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
