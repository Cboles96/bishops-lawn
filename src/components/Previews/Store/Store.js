import React from "react";

import NavigationItem from "../../Navigation/NavigationItem/NavigationItem";

import classes from "../Store/Store.module.css";

import tshirt_white from "../../../assets/images/merchadise/t-shirt-white.png";
import hat_white from "../../../assets/images/merchadise/cap-white-front-logo.png";
import mug_white from "../../../assets/images/merchadise/mug-white-logo3.png";

const Store = () => {
  return (
    <div className={classes.Store_Container}>
      <h1>New low prices ahead of the holidays!</h1>
      <h2>
        <span className={classes.Percent}>%20</span> off for new members who use
        promo code: <span className={classes.Code}>bishop</span> at checkout
      </h2>
      <div className={classes.Store_Items}>
        <NavigationItem link="/store">
          <img className={classes.Tshirt} src={tshirt_white} alt="tshirt"></img>
        </NavigationItem>
        <h3 className={classes.Tshirt_Tag}>$10.00 Custom White T-Shirt</h3>
        <NavigationItem link="/store">
          <img className={classes.Hat} src={hat_white} alt="hat"></img>
        </NavigationItem>
        <h3 className={classes.Hat_Tag}>$5.00 Custom White Ball-Cap</h3>
        <NavigationItem link="/store">
          <img className={classes.Mug} src={mug_white} alt="mug"></img>
        </NavigationItem>
        <h3 className={classes.Mug_Tag}>$3.00 Custom White Mug</h3>
      </div>
    </div>
  );
};

export default Store;
