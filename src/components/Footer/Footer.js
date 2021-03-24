import React, { useState } from "react";

import Aux from "../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import FooterModal from "../../components/Footer/FooterModal/FooterModal";
import Cancel from '../../UI/Cancel/Cancel';

import classes from "../Footer/Footer.module.css";
import UHost from "../../assets/images/icons/uhost-icon.png";

const Footer = () => {
  const [posLeft] = useState("87%");
  const [posTop] = useState("0%");

  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const creditClickedHandler = () => {
    setShowCredits(true);
    setShowBackdrop(true);
    setShowCancel(true);
  };

  const backdropClickedHandler = () => {
    setShowCredits(false);
    setShowBackdrop(false);
    setShowCancel(false);
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
            <p className={classes.Credit} onClick={creditClickedHandler}>
              Artwork Credit
            </p>
          </li>
        </ul>
      </footer>
      <Cancel posLeft={posLeft} posTop={posTop} cancel={showCancel} clicked={backdropClickedHandler} />
      <Backdrop backdropState={showBackdrop} />
      <FooterModal creditState={showCredits} />
    </Aux>
  );
};

export default Footer;
