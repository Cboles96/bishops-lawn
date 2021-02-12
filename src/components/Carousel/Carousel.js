import React, { useState } from "react";

import classes from "../Carousel/Carousel.module.css";

import unavailable from "../../assets/images/icons/controls/officexs/cancel.png";
import back from "../../assets/images/icons/controls/officexs/back.png";
import next from "../../assets/images/icons/controls/officexs/next.png";

import galleryOne from "../../assets/images/gallery-temp/gallery-1-temp.jpg";
import galleryTwo from "../../assets/images/gallery-temp/gallery-2-temp.jpg";
import galleryThree from "../../assets/images/gallery-temp/gallery-3-temp.png";
import galleryFour from "../../assets/images/gallery-temp/gallery-4-temp.jpg";
import galleryFive from "../../assets/images/gallery-temp/gallery-5-temp.jpg";

const Carousel = () => {
  const [showImageOne, setShowImageOne] = useState(true);
  const [showImageTwo, setShowImageTwo] = useState(false);
  const [showImageThree, setShowImageThree] = useState(false);
  const [showImageFour, setShowImageFour] = useState(false);
  const [showImageFive, setShowImageFive] = useState(false);

  const [slideLeftOne, setSlideLeftOne] = useState(false);
  const [slideRightOne, setSlideRightOne] = useState(false);

  const [slideLeftTwo, setSlideLeftTwo] = useState(false);
  const [slideRightTwo, setSlideRightTwo] = useState(false);

  const [slideLeftThree, setSlideLeftThree] = useState(false);
  const [slideRightThree, setSlideRightThree] = useState(false);

  const [slideLeftFour, setSlideLeftFour] = useState(false);
  const [slideRightFour, setSlideRightFour] = useState(false);

  const [slideLeftFive, setSlideLeftFive] = useState(false);
  const [slideRightFive, setSlideRightFive] = useState(false);

  const nextImageOneClickedHandler = () => {
    setShowImageOne(false);
    setShowImageTwo(true);
    setSlideLeftOne(true);
    setSlideRightOne(false);
  };

  const backImageTwoClickedHandler = () => {
    setShowImageTwo(false);
    setShowImageOne(true);
    setSlideLeftTwo(false);
    setSlideRightTwo(true);
  };

  const nextImageTwoClickedHandler = () => {
    setShowImageTwo(false);
    setShowImageThree(true);
    setSlideLeftTwo(true);
    setSlideRightTwo(false);
  };

  const backImageThreeClickedHandler = () => {
    setShowImageThree(false);
    setShowImageTwo(true);
    setSlideLeftThree(false);
    setSlideRightThree(true);
  };

  const nextImageThreeClickedHandler = () => {
    setShowImageThree(false);
    setShowImageFour(true);
    setSlideLeftThree(true);
    setSlideRightThree(false);
  };

  const backImageFourClickedHandler = () => {
    setShowImageFour(false);
    setShowImageThree(true);
    setSlideLeftFour(false);
    setSlideRightFour(true);
  };

  const nextImageFourClickedHandler = () => {
    setShowImageFour(false);
    setShowImageFive(true);
    setSlideLeftFour(true);
    setSlideRightFour(false);
  };

  const backImageFiveClickedHandler = () => {
    setShowImageFive(false);
    setShowImageFour(true);
    setSlideLeftFive(false);
    setSlideRightFive(true);
  };

  return (
    <div className={classes.Carousel}>
      <div
        className={
          showImageOne
            ? classes.Slide_One
            : !showImageOne && slideRightOne
            ? `${classes.Slide_One} ${classes.Slide_One_Right}`
            : !showImageOne && slideLeftOne
            ? `${classes.Slide_One} ${classes.Slide_One_Left}`
            : null
        }
      >
        <img
          className={classes.Slide_One_Unavailable}
          src={unavailable}
          alt=""
        ></img>
        <img className={classes.Slide_One_Image} src={galleryOne} alt=""></img>
        <img
          className={classes.Next_Button}
          src={next}
          alt=""
          onClick={nextImageOneClickedHandler}
        ></img>
      </div>
      <div
        className={
          !showImageTwo && !slideLeftTwo && !slideRightTwo
            ? classes.Slide_Two_Hidden
            : !showImageTwo && slideRightTwo
            ? `${classes.Slide_Two} ${classes.Slide_Two_Right}`
            : !showImageTwo && slideLeftTwo
            ? `${classes.Slide_Two} ${classes.Slide_Two_Left}`
            : showImageTwo
            ? classes.Slide_Two
            : null
        }
      >
        <img
          className={classes.Back_Button}
          src={back}
          alt=""
          onClick={backImageTwoClickedHandler}
        ></img>
        <img className={classes.Slide_Two_Image} src={galleryTwo} alt=""></img>
        <img
          className={classes.Next_Button}
          src={next}
          alt=""
          onClick={nextImageTwoClickedHandler}
        ></img>
      </div>
      <div
        className={
          !showImageThree && !slideLeftThree && !slideRightThree
            ? classes.Slide_Three_Hidden
            : !showImageThree && slideRightThree
            ? `${classes.Slide_Three} ${classes.Slide_Three_Right}`
            : !showImageThree && slideLeftThree
            ? `${classes.Slide_Three} ${classes.Slide_Three_Left}`
            : showImageThree
            ? classes.Slide_Three
            : null
        }
      >
        <img
          className={classes.Back_Button}
          src={back}
          alt=""
          onClick={backImageThreeClickedHandler}
        ></img>
        <img
          className={classes.Slide_Three_Image}
          src={galleryThree}
          alt=""
        ></img>
        <img
          className={classes.Next_Button}
          src={next}
          alt=""
          onClick={nextImageThreeClickedHandler}
        ></img>
      </div>
      <div
        className={
          !showImageFour && !slideLeftFour && !slideRightFour
            ? classes.Slide_Four_Hidden
            : !showImageFour && slideRightFour
            ? `${classes.Slide_Four} ${classes.Slide_Four_Right}`
            : !showImageFour && slideLeftFour
            ? `${classes.Slide_Four} ${classes.Slide_Four_Left}`
            : showImageFour
            ? classes.Slide_Four
            : null
        }
      >
        <img
          className={classes.Back_Button}
          src={back}
          alt=""
          onClick={backImageFourClickedHandler}
        ></img>
        <img
          className={classes.Slide_Four_Image}
          src={galleryFour}
          alt=""
        ></img>
        <img
          className={classes.Next_Button}
          src={next}
          alt=""
          onClick={nextImageFourClickedHandler}
        ></img>
      </div>
      <div
        className={
          !showImageFive && !slideLeftFive && !slideRightFive
            ? classes.Slide_Five_Hidden
            : !showImageFive && slideRightFour
            ? `${classes.Slide_Five} ${classes.Slide_Five_Right}`
            : !showImageFive && slideRightFive
            ? `${classes.Slide_Five} ${classes.Slide_Five_Right}`
            : showImageFive
            ? classes.Slide_Five
            : null
        }
      >
        <img
          className={classes.Back_Button}
          src={back}
          alt=""
          onClick={backImageFiveClickedHandler}
        ></img>
        <img
          className={classes.Slide_Five_Image}
          src={galleryFive}
          alt=""
        ></img>
        <img
          className={classes.Slide_Five_Unavailable}
          src={unavailable}
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Carousel;
