import React from "react";

import unavailable from "../../../assets/images/icons/controls/officexs/cancel.png";
import back from "../../../assets/images/icons/controls/officexs/back.png";
import next from "../../../assets/images/icons/controls/officexs/next.png";

import classes from "../ImageContainer/ImageContainer.module.css";

const ImageContainer = (props) => {
  return (
    <div className={props.changeSlide}>
      {props.currentSlide === "Slide One" ? (
        <img
          className={classes.Slide_One_Unavailable}
          src={unavailable}
          alt=""
        ></img>
      ) : (
        <img
          className={classes.Back_Button}
          src={back}
          alt=""
          onClick={props.changeBackClicked}
        ></img>
      )}
      <img className={props.changeClass} src={props.currentImage} alt=""></img>
      {props.currentSlide === "Slide Ten" ? (
        <img
          className={classes.Last_Slide_Unavailable}
          src={unavailable}
          alt=""
        ></img>
      ) : (
        <img
        className={classes.Next_Button}
        src={next}
        alt=""
        onClick={props.changeNextClicked }
      ></img>
      )}
    </div>
  );
};

export default ImageContainer;
