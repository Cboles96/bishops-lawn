import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationItems from '../src/components/Navigation/NavigationItems';
import Footer from '../src/components/Footer/Footer';
import Layout from "./hoc/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';

import "./App.css";

function App() {
  let routes = null;

  routes = (
    <Switch>
      <Route path="/bishops-lawn" component={Homepage} />
      <Route path="/services" component={Services} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  );

  return (
    <Layout>
      <NavigationItems />
      {routes}
      <Footer />
    </Layout>
  );
}

export default App;
