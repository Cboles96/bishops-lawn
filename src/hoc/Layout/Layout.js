import React from "react";

import Background from '../../assets/images/background/grass2.png';

import Aux from "../Aux";

const layout = (props) => (
  <Aux>
    <main
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {props.children}
    </main>
  </Aux>
);

export default layout;
