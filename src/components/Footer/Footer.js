import React, { Component } from "react";

import * as actions from "../../store/actions/index";

import Aux from "../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import FooterModal from "../../components/Footer/FooterModal/FooterModal";
import Cancel from "../../UI/Cancel/Cancel";
import { connect } from "react-redux";

import classes from "../Footer/Footer.module.css";
import UHost from "../../assets/images/icons/uhost-icon.png";

class Footer extends Component {
  // const [posLeft] = useState("87%");
  // const [posTop] = useState("0%");

  // useEffect(() => {
  //   console.log(props.credits);
  // })

  // const [showBackdrop, setShowBackdrop] = useState(false);
  // const [showCredits, setShowCredits] = useState(false);
  // const [showCancel, setShowCancel] = useState(false);
  // const [cancelClass, setCancelClass] = useState();

  render() {
    let showCredits = false;
    let showBackdrop = false;
    let showCancel = false;
    let cancelClass = null;

    const creditsClickedHandler = () => {
      showCredits = true;
      showBackdrop = true;
      showCancel = true;
      cancelClass = 'footer';

      this.props.onCredits(showCredits, showBackdrop, showCancel, cancelClass);
      console.log(this.props.backdrops);
    };
  
    // const cancelClickedHandler = () => {
    //   setShowCredits(false);
    //   setShowBackdrop(false);
    //   setShowCancel(false);
    //   setCancelClass(null);
    // };
    return(
      <Aux>
        <footer className={classes.Footer_Container}>
          <ul>
            <div className={classes.UHost_Container}>
              <li>Hosted By</li>
              <a href="/">
                <img src={UHost} alt="UHost"></img>
              </a>
            </div>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
            <li>
              <p className={classes.Credit} onClick={creditsClickedHandler}>
                Artwork Credit
              </p>
            </li>
          </ul>
        </footer>
        <Cancel
          cancel={this.props.cancel}
          cancelClass={this.props.cancelClass}
          clicked={this.props.onCredits}
        />
        <Backdrop backdropState={this.props.backdrops} />
        <FooterModal creditState={this.props.credits} />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backdrops: state.backdrop,
    credits: state.credits,
    cancel: state.cancel,
    cancelClass: state.cancelClass,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCredits: (credits, backdrop, cancel, cancelClassName) => dispatch(actions.creditsClickedHandler(credits, backdrop, cancel, cancelClassName)),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onServices: (services, testimonial, store) =>
//       dispatch(actions.servicesMouseOver(services, testimonial, store)),
//     onTestimonial: (services, testimonial, store) =>
//       dispatch(actions.testimonialMouseOver(services, testimonial, store)),
//     onStore: (services, testimonial, store) =>
//       dispatch(actions.storeMouseOver(services, testimonial, store)),
//   };

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
