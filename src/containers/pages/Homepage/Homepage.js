import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

import PreviewButton from "../../../UI/PreviewButton/PreviewButton";
import Services from "../../../components/Previews/Services/Services";
// import Testimonial from "../../../components/Previews/Testimonial-Container/Testimonial-Container";
import Testimonial from '../../../components/Previews/Testimonial-Container/Testimonial-Container';
import Store from "../../../components/Previews/Store/Store";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import LoginModal from "../../../components/Login-Modal/Login-Modal";
import Jumbo from "../../../components/Jumbo/Jumbo";
import Cancel from "../../../UI/Cancel/Cancel";

import classes from "../Homepage/Homepage.module.css";
import Aux from "../../../hoc/Aux";

class Homepage extends Component {
  state = {
    servicesActive: false,
    testimonialActive: true,
    storeActive: false,
    backdrop: false,
    modal: false,
    validation: {
      email: "",
      password: "",
    },
    johnClicked: false,
    mackenzieClicked: false,
  };

  componentDidMount() {
    let backdrop = false;
    let modal = false;
    let cancel = false;
    let cancelClass = null;

    const loggedIn = true;
    if (!loggedIn) {
      setTimeout(() => {
        backdrop = true;
        modal = true;
        cancel = true;
        cancelClass = "login";

        this.props.onShowLogin(backdrop, modal, cancel, cancelClass);
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

    let backdrop = false;
    let modal = false;
    let cancel = false;
    let cancelClass = null;

    const servicesMouseOverHandler = () => {
      // this.setState({ services: true, testimonial: false, store: false });
      services = true;
      testimonial = false;
      store = false;
      this.setState({
        servicesActive: true,
        testimonialActive: false,
        storeActive: false,
      });
      this.props.onServices(services, testimonial, store);
    };

    const testimonialMouseOverHandler = () => {
      // this.setState({ services: false, testimonial: true, store: false });
      services = false;
      testimonial = true;
      store = false;
      this.setState({
        servicesActive: false,
        testimonialActive: true,
        storeActive: false,
      });
      this.props.onTestimonial(services, testimonial, store);
    };

    const storeMouseOverHandler = () => {
      // this.setState({ services: false, testimonial: false, store: true });
      services = false;
      testimonial = false;
      store = true;
      this.setState({
        servicesActive: false,
        testimonialActive: false,
        storeActive: true,
      });
      this.props.onStore(services, testimonial, store);
    };

    const closeModal = () => {
      backdrop = false;
      modal = false;
      cancel = false;
      cancelClass = null;

      this.props.onCloseLogin(backdrop, modal, cancel, cancelClass);
    };

    const emailChangedHandler = (event) => {
      this.setState({ email: event.target.value });
    };

    const passwordChangedHandler = (event) => {
      this.setState({ password: event.target.value });
    };

    const johnClickedHandler = () => {
      this.setState({ johnClicked: true });
    };

    const mackenzieClickedHandler = () => {
      this.setState({ mackenzieClicked: true });
    };

    return (
      <Aux>
        <Backdrop clicked={closeModal} backdropState={this.props.backdrop} />
        <LoginModal
          modalState={this.props.modal}
          emailState={this.state.email}
          passwordState={this.state.password}
          emailChanged={emailChangedHandler}
          passwordChanged={passwordChangedHandler}
        />
        <Cancel
          cancel={this.props.cancel}
          cancelClass={this.props.cancelClass}
          clicked={closeModal}
        />
        <Jumbo />
        <div className={classes.Preview_Grid}>
          <PreviewButton
            mouseover={servicesMouseOverHandler}
            servicesState={this.state.servicesActive}
            tag={servicesTag}
          />
          <PreviewButton
            mouseover={testimonialMouseOverHandler}
            testimonialState={this.state.testimonialActive}
            tag={testimonialTag}
          />
          <PreviewButton
            mouseover={storeMouseOverHandler}
            storeState={this.state.storeActive}
            tag={storeTag}
          />
        </div>

        {this.props.ser ? (
          <Services servicesState={this.state.servicesActive} />
        ) : null}

        {this.props.test ? (
          <Testimonial
            testimonialState={this.state.testimonialActive}
            johnClicked={johnClickedHandler}
            mackenzieClicked={mackenzieClickedHandler}
          />
        ) : null}

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
    backdrop: state.loginBackdrop,
    modal: state.loginModal,
    cancel: state.loginCancel,
    cancelClass: state.loginCancelClass,
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
    onShowLogin: (backdrop, modal, cancel, cancelClass) =>
      dispatch(actions.showLoginModal(backdrop, modal, cancel, cancelClass)),
    onCloseLogin: (backdrop, modal, cancel, cancelClass) =>
      dispatch(actions.closeLoginModal(backdrop, modal, cancel, cancelClass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
