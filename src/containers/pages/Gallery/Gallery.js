import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import Carousel from '../../../components/Carousel/Carousel';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import ZoomedImage from "../../../components/ZoomedImage/ZoomedImage";

import classes from "../Gallery/Gallery.module.css";

import galleryOne from "../../../assets/images/gallery-temp/gallery-1-temp.jpg";
import galleryTwo from "../../../assets/images/gallery-temp/gallery-2-temp.jpg";
import galleryThree from "../../../assets/images/gallery-temp/gallery-3-temp.png";
import galleryFour from "../../../assets/images/gallery-temp/gallery-4-temp.jpg";
import galleryFive from "../../../assets/images/gallery-temp/gallery-5-temp.jpg";
import gallerySix from "../../../assets/images/gallery-temp/gallery-6-temp.jpg";
import gallerySeven from "../../../assets/images/gallery-temp/gallery-7-temp.jpg";
import galleryEight from "../../../assets/images/gallery-temp/gallery-8-temp.jpg";
import galleryNine from "../../../assets/images/gallery-temp/gallery-9-temp.jpg";
import galleryTen from "../../../assets/images/gallery-temp/gallery-10-temp.jpg";
import photograph from '../../../assets/images/icons/photos.png';

class Gallery extends Component {
  state = {
    backdrop: false,
    showImage: false,
    image: null,
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const imageClickedHandler = (gallery) => {
      this.setState({ backdrop: true, showImage: true, image: gallery });
    };

    const backdropClickedHandler = () => {
      this.setState({ backdrop: false, showImage: false });
    };

    return (
      <Aux>
        <section className={classes.Welcome}>
          <img className={classes.Photograph_Left} src={photograph} alt="Photos"></img>
          <h1>Welcome to our Gallery!</h1>
          <img className={classes.Photograph_Right} src={photograph} alt="Photos"></img>
        </section>
        <Carousel />
        <Backdrop
          backdropState={this.state.backdrop}
          clicked={backdropClickedHandler}
        />
        <ZoomedImage
          imageState={this.state.image}
          showImageState={this.state.showImage}
          clicked={backdropClickedHandler}
        />
        <section className={classes.Grid_Container}>
          <div className={classes.Grid}>
            <img
              src={galleryOne}
              alt=""
              onClick={() => imageClickedHandler(galleryOne)}
            ></img>
            <img
              src={galleryTwo}
              alt=""
              onClick={() => imageClickedHandler(galleryTwo)}
            ></img>
            <img
              src={galleryThree}
              alt=""
              onClick={() => imageClickedHandler(galleryThree)}
            ></img>
            <img
              src={galleryFour}
              alt=""
              onClick={() => imageClickedHandler(galleryFour)}
            ></img>
            <img
              src={galleryFive}
              alt=""
              onClick={() => imageClickedHandler(galleryFive)}
            ></img>
            <img
              src={gallerySix}
              alt=""
              onClick={() => imageClickedHandler(gallerySix)}
            ></img>
            <img
              src={gallerySeven}
              alt=""
              onClick={() => imageClickedHandler(gallerySeven)}
            ></img>
            <img
              src={galleryEight}
              alt=""
              onClick={() => imageClickedHandler(galleryEight)}
            ></img>
            <img
              src={galleryNine}
              alt=""
              onClick={() => imageClickedHandler(galleryNine)}
            ></img>
            <img
              src={galleryTen}
              alt=""
              onClick={() => imageClickedHandler(galleryTen)}
            ></img>
          </div>
        </section>
      </Aux>
    );
  }
}

export default Gallery;
