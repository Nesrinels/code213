import React from "react";
import Sidebarright from "./../Components/Sidebarright.css";

function sidebarright() {
  return (
    // the whole component

    <div className="firstComponent">
      {/* the first small div  --> start  */}

      <div className="firstSmallDiv">
        <h4>Your Team</h4>

        <a href="#">See all</a>

        <hr></hr>
      </div>

      {/* the first small div  --> end */}

      {/* second small div --> start  */}

      <div className="secondSmallDiv">
        {/* first micro div --> start  */}

        <div className="firstmicroDiv">
          <img src="/user-1.png" alt="user1"></img>
        </div>

        {/* first micro div --> end  */}

        {/* second micro div --> start  */}

        <div className="secondmicroDiv">
          <h4>Anthony Daugloi</h4>

          <h5>12 mutual friends</h5>
        </div>

        {/* second micro div --> end  */}
      </div>

      {/* second small div --> end */}

      {/* third small div --> start  */}

      <div className="thirdSmallDiv">
        {/* first micro div --> start  */}

        <div className="firstMicroDiv">
          <img src="/images/user-2.png" alt="user2"></img>
        </div>

        {/* first micro div --> end  */}

        {/* second micro div --> start  */}

        <div className="secondMicroDiv">
          <h4>Mohannad Zitoun</h4>

          <h5>12 mutual friends</h5>
        </div>

        {/* second micro div --> end  */}
      </div>

      {/* third small div --> end  */}

      {/* fourth small div --> start  */}

      <div className="fourthSmallDiv">
        {/* first micro div --> start  */}

        <div className="FirstmicroDiv">
          <img src="/images/user-3.avif" alt="user3"></img>
        </div>

        {/* first micro div --> end  */}

        <div className="SecondmicroDiv">
          <h4>Mohannad Zebar</h4>

          <h5>12 mutual friends</h5>
        </div>
      </div>
    </div>
  );
}

export default sidebarright;
