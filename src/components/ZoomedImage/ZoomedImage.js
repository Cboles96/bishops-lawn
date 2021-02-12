import React from "react";

import classes from "../ZoomedImage/ZoomedImage.module.css";

const zoomedImage = (props) => {
  return (
    <div className={classes.Zoomed_Image_Container}>
      <img
        className={
          props.showImageState
            ? classes.Zoomed_Image
            : `${classes.ZoomedImage} ${classes.Zoomed_Image_Hidden}`
        }
        src={props.imageState}
        alt=""
        onClick={props.clicked}
      ></img>
    </div>
  );
};

export default zoomedImage;
