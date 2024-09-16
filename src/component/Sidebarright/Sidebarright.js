import React from "react";
import Suggest from "../Sidebarright/Suggest/Suggest";
import Suggestpg from "../Sidebarright/suggestPage/Suggestpg";
// import Sidebarrightbottom from './Sidebarrightbottom';
import Event from "../Sidebarright/Event/Event";
// import Suggestgrp from "./Suggestgrp/Suggestgrp";




function Sidebarright() {
  return (
    <div className="container_right">
    <Suggest/>
    <Suggestpg/>
    <Event/>
    </div>
  );
}

export default Sidebarright;