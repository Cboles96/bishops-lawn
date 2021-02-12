import React from "react";

import Aux from "../Aux";

const layout = (props) => (
  <Aux>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
