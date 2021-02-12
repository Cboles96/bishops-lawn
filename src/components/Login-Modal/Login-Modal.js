import React from "react";

import Logo from "../../assets/images/icons/logo2.png";

import classes from "../Login-Modal/Login-Modal.module.css";

const LoginModal = (props) => {
  return (
    <div
      className={
        props.modalState
          ? classes.Modal_Container
          : `${classes.Modal_Container} ${classes.Modal_Hidden}`
      }
    >
      <div className={classes.Modal_Content}>
        <img className={classes.Logo} src={Logo} alt="Logo"></img>
        <h2>
          In order to use our virtual store you must log in or continue as guest
        </h2>
        <form>
          <input
            type="email"
            placeholder="Email Address"
            onChange={props.emailChanged}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={props.passwordChanged}
          ></input>
          <button
            type="submit"
            disabled={props.emailState && props.passwordState ? false : true}
          >
            <span>Log-in</span>
          </button>
          <a href="/signup">New here? Click here to signup!</a>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
