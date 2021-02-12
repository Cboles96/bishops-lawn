import React, { Component } from "react";

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
    services: false,
    testimonial: true,
    store: false,
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

    const servicesMouseOverHandler = () => {
      this.setState({ services: true, testimonial: false, store: false });
    };

    const testimonialMouseOverHandler = () => {
      this.setState({ services: false, testimonial: true, store: false });
    };

    const storeMouseOverHandler = () => {
      this.setState({ services: false, testimonial: false, store: true });
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

        {this.state.services ? <Services /> : null}

        {this.state.testimonial ? <Testimonial /> : null}

        {this.state.store ? <Store /> : null}
      </Aux>
    );
  }
}

export default Homepage;
