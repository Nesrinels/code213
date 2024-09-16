import React from "react";
import Suggest from "./Suggest";
import Suggestpg from "./Suggestpg";
// import Sidebarrightbottom from './Sidebarrightbottom';
// import Event from "./Event/Event";
// import Suggestgrp from "./Suggestgrp/Suggestgrp";




function Sidebarright() {
  return (
    <div className="container_right">
    <Suggest/>
    <Suggestpg/>
    </div>
  );
}

export default Sidebarright;
