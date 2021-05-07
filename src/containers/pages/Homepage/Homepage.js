import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

import 'bootstrap/dist/css/bootstrap.min.css';

import PreviewButton from "../../../UI/PreviewButton/PreviewButton";
import About from "../../../components/Previews/About/About";
import Testimonial from "../../../components/Previews/Testimonial-Container/Testimonial-Container";
import Store from "../../../components/Previews/Store/Store";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import LoginModal from "../../../components/Login-Modal/Login-Modal";
import Jumbo from "../../../components/Jumbo/Jumbo";
import Cancel from "../../../UI/Cancel/Cancel";

import classes from "../Homepage/Homepage.module.css";
import Aux from "../../../hoc/Aux";

class Homepage extends Component {
  state = {
    aboutActive: false,
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
    const aboutTag = "A Peek at our about!";
    const testimonialTag = "What our Clients have to say...";
    const storeTag = "Check out our Virtual Store!";

    let about = null;
    let testimonial = null;
    let store = null;

    let backdrop = false;
    let modal = false;
    let cancel = false;
    let cancelClass = null;

    const aboutMouseOverHandler = () => {
      // this.setState({ about: true, testimonial: false, store: false });
      about = true;
      testimonial = false;
      store = false;
      this.setState({
        aboutActive: true,
        testimonialActive: false,
        storeActive: false,
      });
      this.props.onAbout(about, testimonial, store);
    };

    const testimonialMouseOverHandler = () => {
      // this.setState({ about: false, testimonial: true, store: false });
      about = false;
      testimonial = true;
      store = false;
      this.setState({
        aboutActive: false,
        testimonialActive: true,
        storeActive: false,
      });
      this.props.onTestimonial(about, testimonial, store);
    };

    const storeMouseOverHandler = () => {
      // this.setState({ about: false, testimonial: false, store: true });
      about = false;
      testimonial = false;
      store = true;
      this.setState({
        aboutActive: false,
        testimonialActive: false,
        storeActive: true,
      });
      this.props.onStore(about, testimonial, store);
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
            mouseover={aboutMouseOverHandler}
            aboutState={this.state.aboutActive}
            tag={aboutTag}
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

        {this.props.about ? (
          <About
            aboutState={this.props.about}
          />
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
    about: state.about,
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
    onAbout: (about, testimonial, store) =>
      dispatch(actions.aboutMouseOver(about, testimonial, store)),
    onTestimonial: (about, testimonial, store) =>
      dispatch(actions.testimonialMouseOver(about, testimonial, store)),
    onStore: (about, testimonial, store) =>
      dispatch(actions.storeMouseOver(about, testimonial, store)),
    onShowLogin: (backdrop, modal, cancel, cancelClass) =>
      dispatch(actions.showLoginModal(backdrop, modal, cancel, cancelClass)),
    onCloseLogin: (backdrop, modal, cancel, cancelClass) =>
      dispatch(actions.closeLoginModal(backdrop, modal, cancel, cancelClass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
