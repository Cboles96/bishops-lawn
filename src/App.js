import React, { useState } from "react";
import { Route, useHistory, Switch, withRouter } from "react-router-dom";

import NavigationItems from "../src/components/Navigation/NavigationItems";
import Footer from "./containers/Footer/Footer";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Services from "./pages/Services/Services";
import Gallery from "./pages/Gallery/Gallery";
import Backdrop from "../src/UI/Backdrop/Backdrop";

import DrawerToggle from "../src/UI/DrawerToggle/DrawerToggle";

import SideDrawer from "../src/UI/SideDrawer/SideDrawer";

import "./App.css";

function App() {

  const history = useHistory();

  if (history.location.pathname === "/" || history.location.pathname === "/#") {
    history.push("/home");
  }

  let routes = null;
  const [backdrop, showBackdrop] = useState(false);
  const [sidedrawer, showSideDrawer] = useState(false);

  const menuBtnClickedHandler = () => {
    showSideDrawer(true);
    showBackdrop(true);
  };

  const backdropClickedHandler = () => {
    showSideDrawer(false);
    showBackdrop(false);
  };

  routes = (
    <Switch>
      <Route path="/home" component={Homepage} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  );

  return (
    <Layout>
      <Backdrop
        backdropState={backdrop}
        clicked={backdropClickedHandler}
      ></Backdrop>
      <DrawerToggle clicked={menuBtnClickedHandler} />
      <SideDrawer sidedrawerState={sidedrawer}></SideDrawer>
      <NavigationItems />
      {routes}
      <Footer />
    </Layout>
  );
}

export default withRouter(App);
