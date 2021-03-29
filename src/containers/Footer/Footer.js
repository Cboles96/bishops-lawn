import React, { Component } from "react";

import * as actions from "../../store/actions/index";

import Aux from "../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import FooterModal from "./FooterModal/FooterModal";
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
    let modal = false;
    let backdrop = false;
    let cancel = false;
    let cancelClass = null;

    const showModal = () => {
      modal = true;
      backdrop = true;
      cancel = true;
      cancelClass = "footer";

      this.props.onShowCredits(backdrop, modal, cancel, cancelClass);
    };

    const closeModal = () => {
      modal = false;
      backdrop = false;
      cancel = false;
      cancelClass = null;

      this.props.onCloseCredits(backdrop, modal, cancel, cancelClass);
    };
    return (
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
              <p className={classes.Credit} onClick={showModal}>
                Artwork Credit
              </p>
            </li>
          </ul>
        </footer>
        <Cancel
          cancel={this.props.cancel}
          cancelClass={this.props.cancelClass}
          clicked={closeModal}
        />
        <Backdrop backdropState={this.props.backdrop} />
        <FooterModal creditState={this.props.modal} />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    backdrop: state.creditsBackdrop,
    modal: state.creditsModal,
    cancel: state.creditsCancel,
    cancelClass: state.creditsCancelClass,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowCredits: (backdrop, modal, cancel, cancelClass) =>
      dispatch(
        actions.showCreditsModal(
          backdrop,
          modal,
          cancel,
          cancelClass
        )
      ),
    onCloseCredits: (backdrop, modal, cancel, cancelClass) =>
      dispatch(
        actions.closeCreditsModal(backdrop, modal, cancel, cancelClass)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
