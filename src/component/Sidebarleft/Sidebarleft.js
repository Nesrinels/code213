import React from "react";
import Morepage from "./Component_left/Morepage";
import Account from "./Component_left/Account";
import Newfeeds from "./Component_left/Newfeeds";

function Sidebarleft() {
  return (
    <div className="Sidebarleft">
      <Newfeeds />
      <Morepage />
      <Account />
    </div>
  );
}
export default Sidebarleft;
