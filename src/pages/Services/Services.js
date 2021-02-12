import React, { Component } from "react";

import classes from "../Services/Services.module.css";

class Services extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className={classes.Services_Container}>
        <h1>Services</h1>
      </div>
    );
  }
}

export default Services;
