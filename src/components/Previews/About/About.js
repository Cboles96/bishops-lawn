import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Tammy from "../../../assets/images/about/tammy.jpeg";
import Darrell from "../../../assets/images/about/darrell-cropped.jpeg";
import Lisa from "../../../assets/images/about/lisa-cropped.jpeg";

import classes from "../About/About.module.css";

const About = (props) => {
  return (
    <div
      className={
        props.aboutState
          ? classes.About_Container_Active
          : classes.About_Container_Inactive
      }
    >
      <section className={classes.Section_Header}>
        <h1>We like to be personal with our clients.</h1>
        <h2>Get to know the <span>Bishop Lawn Care</span> Family!</h2>
      </section>
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-3 col-sm-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "18rem", margin: "30px" }}>
            <Card.Img variant="top" src={Tammy} />
            <Card.Body>
              <Card.Title>Tammy Bishop</Card.Title>
              <Card.Text>Operates the leaf blower on most jobs.</Card.Text>
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(8, 185, 255), rgb(13, 104, 13)",
                }}
              >
                Visit Tammy's Profile
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-md-3 col-sm-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "18rem", margin: "30px" }}>
            <Card.Img variant="top" src={Darrell} />
            <Card.Body>
              <Card.Title>Darrell Bishop</Card.Title>
              <Card.Text>Operates the zero turn on most jobs.</Card.Text>
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(8, 185, 255), rgb(13, 104, 13)",
                }}
              >
                Visit Darrell's Profile
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-md-3 col-sm-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: "18rem", margin: "30px" }}>
            <Card.Img variant="top" src={Lisa} />
            <Card.Body>
              <Card.Title>Lisa Bishop</Card.Title>
              <Card.Text>Operates the push mower on most jobs.</Card.Text>
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(8, 185, 255), rgb(13, 104, 13)",
                }}
              >
                Visit Lisa's Profile
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
