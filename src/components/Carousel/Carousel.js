import React, { useState } from "react";

import ImageContainer from "../Carousel/ImageContainer/ImageContainer";

import classes from "../Carousel/Carousel.module.css";

import galleryOne from "../../assets/images/gallery-temp/gallery-1-temp.jpg";
import galleryTwo from "../../assets/images/gallery-temp/gallery-2-temp.jpg";
import galleryThree from "../../assets/images/gallery-temp/gallery-3-temp.png";
import galleryFour from "../../assets/images/gallery-temp/gallery-4-temp.jpg";
import galleryFive from "../../assets/images/gallery-temp/gallery-5-temp.jpg";
import gallerySix from "../../assets/images/gallery-temp/gallery-6-temp.jpg";
import gallerySeven from "../../assets/images/gallery-temp/gallery-7-temp.jpg";
import galleryEight from "../../assets/images/gallery-temp/gallery-8-temp.jpg";
import galleryNine from "../../assets/images/gallery-temp/gallery-9-temp.jpg";
import galleryTen from "../../assets/images/gallery-temp/gallery-10-temp.jpg";

const Carousel = () => {
  const [currentSlide, changeCurrentSlide] = useState("Slide One");
  const [currentImage, changeCurrentImage] = useState(galleryOne);
  const [currentImageClass, changeCurrentImageClass] = useState("galleryOne");
  const [currentBackBtn, changeCurrentBackBtn] = useState("Slide Two Back");
  const [currentNextBtn, changeCurrentNextBtn] = useState("Slide One Next");

  const changeSlide = () => {
    switch (currentSlide) {
      case "Slide One":
        return classes.Slide_One;
      case "Slide Two":
        return classes.Slide_Two;
      case "Slide Three":
        return classes.Slide_Three;
      case "Slide Four":
        return classes.Slide_Four;
      case "Slide Five":
        return classes.Slide_Five;
      case "Slide Six":
        return classes.Slide_Six;
      case "Slide Seven":
        return classes.Slide_Seven;
      case "Slide Eight":
        return classes.Slide_Eight;
      case "Slide Nine":
        return classes.Slide_Nine;
      case "Slide Ten":
        return classes.Slide_Ten;
      default:
        return null;
    }
  };

  const changeImageClass = () => {
    switch (currentImageClass) {
      case "galleryOne":
        return classes.Slide_One_Image;
      case "galleryTwo":
        return classes.Slide_Two_Image;
      case "galleryThree":
        return classes.Slide_Three_Image;
      case "galleryFour":
        return classes.Slide_Four_Image;
      case "galleryFive":
        return classes.Slide_Five_Image;
      case "gallerySix":
        return classes.Slide_Six_Image;
      case "gallerySeven":
        return classes.Slide_Seven_Image;
      case "galleryEight":
        return classes.Slide_Eight_Image;
      case "galleryNine":
        return classes.Slide_Nine_Image;
      case "galleryTen":
        return classes.Slide_Ten_Image;
      default:
        return null;
    }
  };

  const changeBackClicked = () => {
    switch (currentBackBtn) {
      case "Slide Two Back":
        return backImageTwoClickedHandler();
      case "Slide Three Back":
        return backImageThreeClickedHandler();
      case "Slide Four Back":
        return backImageFourClickedHandler();
      case "Slide Five Back":
        return backImageFiveClickedHandler();
      case "Slide Six Back":
        return backImageSixClickedHandler();
      case "Slide Seven Back":
        return backImageSevenClickedHandler();
      case "Slide Eight Back":
        return backImageEightClickedHandler();
      case "Slide Nine Back":
        return backImageNineClickedHandler();
      case "Slide Ten Back":
        return backImageTenClickedHandler();
      default:
        return null;
    }
  };

  const changeNextClicked = () => {
    switch (currentNextBtn) {
      case "Slide One Next":
        return nextImageOneClickedHandler();
      case "Slide Two Next":
        return nextImageTwoClickedHandler();
      case "Slide Three Next":
        return nextImageThreeClickedHandler();
      case "Slide Four Next":
        return nextImageFourClickedHandler();
      case "Slide Five Next":
        return nextImageFiveClickedHandler();
      case "Slide Six Next":
        return nextImageSixClickedHandler();
      case "Slide Seven Next":
        return nextImageSevenClickedHandler();
      case "Slide Eight Next":
        return nextImageEightClickedHandler();
      case "Slide Nine Next":
        return nextImageNineClickedHandler();
      default:
        return null;
    }
  };

  const nextImageOneClickedHandler = () => {
    changeCurrentSlide("Slide Two");
    changeCurrentImage(galleryTwo);
    changeCurrentImageClass("galleryTwo");
    changeCurrentBackBtn("Slide Two Back");
    changeCurrentNextBtn("Slide Two Next");
  };

  const backImageTwoClickedHandler = () => {
    changeCurrentSlide("Slide One");
    changeCurrentImage(galleryOne);
    changeCurrentImageClass("galleryOne");
    changeCurrentBackBtn("Slide One Back");
    changeCurrentNextBtn("Slide One Next");
  };

  const nextImageTwoClickedHandler = () => {
    changeCurrentSlide("Slide Three");
    changeCurrentImage(galleryThree);
    changeCurrentImageClass("galleryThree");
    changeCurrentBackBtn("Slide Three Back");
    changeCurrentNextBtn("Slide Three Next");
  };

  const backImageThreeClickedHandler = () => {
    changeCurrentSlide("Slide Two");
    changeCurrentImage(galleryTwo);
    changeCurrentImageClass("galleryTwo");
    changeCurrentBackBtn("Slide Two Back");
    changeCurrentNextBtn("Slide Two Next");
  };

  const nextImageThreeClickedHandler = () => {
    changeCurrentSlide("Slide Four");
    changeCurrentImage(galleryFour);
    changeCurrentImageClass("galleryFour");
    changeCurrentBackBtn("Slide Four Back");
    changeCurrentNextBtn("Slide Four Next");
  };

  const backImageFourClickedHandler = () => {
    changeCurrentSlide("Slide Three");
    changeCurrentImage(galleryThree);
    changeCurrentImageClass("galleryThree");
    changeCurrentBackBtn("Slide Three Back");
    changeCurrentNextBtn("Slide Three Next");
  };

  const nextImageFourClickedHandler = () => {
    changeCurrentSlide("Slide Five");
    changeCurrentImage(galleryFive);
    changeCurrentImageClass("galleryFive");
    changeCurrentBackBtn("Slide Five Back");
    changeCurrentNextBtn("Slide Five Next");
  };

  const backImageFiveClickedHandler = () => {
    changeCurrentSlide("Slide Four");
    changeCurrentImage(galleryFour);
    changeCurrentImageClass("galleryFour");
    changeCurrentBackBtn("Slide Four Back");
    changeCurrentNextBtn("Slide Four Next");
  };

  const nextImageFiveClickedHandler = () => {
    changeCurrentSlide("Slide Six");
    changeCurrentImage(gallerySix);
    changeCurrentImageClass('gallerySix');
    changeCurrentBackBtn("Slide Six Back");
    changeCurrentNextBtn("Slide Six Next");
  };

  const backImageSixClickedHandler = () => {
    changeCurrentSlide("Slide Five");
    changeCurrentImage(galleryFive);
    changeCurrentImageClass("galleryFive");
    changeCurrentBackBtn("Slide Five Back");
    changeCurrentNextBtn("Slide Five Next");
  };

  const nextImageSixClickedHandler = () => {
    changeCurrentSlide("Slide Seven");
    changeCurrentImage(gallerySeven);
    changeCurrentImageClass('gallerySeven');
    changeCurrentBackBtn("Slide Seven Back");
    changeCurrentNextBtn("Slide Seven Next");
  };

  const backImageSevenClickedHandler = () => {
    changeCurrentSlide("Slide Six");
    changeCurrentImage(gallerySix);
    changeCurrentImageClass("gallerySix");
    changeCurrentBackBtn("Slide Six Back");
    changeCurrentNextBtn("Slide Six Next");
  };

  const nextImageSevenClickedHandler = () => {
    changeCurrentSlide("Slide Eight");
    changeCurrentImage(galleryEight);
    changeCurrentImageClass('galleryEight');
    changeCurrentBackBtn("Slide Eight Back");
    changeCurrentNextBtn("Slide Eight Next");
  };

  const backImageEightClickedHandler = () => {
    changeCurrentSlide("Slide Seven");
    changeCurrentImage(gallerySeven);
    changeCurrentImageClass("gallerySeven");
    changeCurrentBackBtn("Slide Seven Back");
    changeCurrentNextBtn("Slide Seven Next");
  };

  const nextImageEightClickedHandler = () => {
    changeCurrentSlide("Slide Nine");
    changeCurrentImage(galleryNine);
    changeCurrentImageClass('galleryNine');
    changeCurrentBackBtn("Slide Nine Back");
    changeCurrentNextBtn("Slide Nine Next");
  };

  const backImageNineClickedHandler = () => {
    changeCurrentSlide("Slide Eight");
    changeCurrentImage(galleryEight);
    changeCurrentImageClass("galleryEight");
    changeCurrentBackBtn("Slide Eight Back");
    changeCurrentNextBtn("Slide Eight Next");
  };

  const nextImageNineClickedHandler = () => {
    changeCurrentSlide("Slide Ten");
    changeCurrentImage(galleryTen);
    changeCurrentImageClass("galleryTen");
    changeCurrentBackBtn("Slide Ten Back");
    changeCurrentNextBtn("Slide Ten Next");
  };

  const backImageTenClickedHandler = () => {
    changeCurrentSlide("Slide Nine");
    changeCurrentImage(galleryNine);
    changeCurrentImageClass("galleryNine");
    changeCurrentBackBtn("Slide Nine Back");
    changeCurrentNextBtn("Slide Nine Next");
  };

  return (
    <div className={classes.Carousel}>
      <ImageContainer
        currentSlide={currentSlide}
        currentImage={currentImage}
        changeSlide={changeSlide()}
        changeClass={changeImageClass()}
        changeBackClicked={() => {
          changeBackClicked();
        }}
        changeNextClicked={() => {
          changeNextClicked();
        }}
      />
    </div>
  );
};

export default Carousel;
