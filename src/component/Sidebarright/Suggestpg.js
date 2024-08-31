import React from "react";
import "./Suggestpg.css";
import user5 from "../../assets/images/user-pic-1.png";
import user6 from "../../assets/images/user-pic-2.png";
import user7 from "../../assets/images/user-pic-3.png";
import { FaPlus } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Suggestpg = () => {
  return (
    <div className="SG_group">
      <div className="firstSmallDiv">
        <h4>Your Team</h4>
        <a href="#S">See all</a>
        {/* <hr></hr> */}
      </div>
      <div className="block_1">

        <div className="cmp1 ">
          <img src={user5} alt="user1"></img>
          <div className="secondmicroDiv">
            <h4>Anthony Daugloi</h4>
            <h5>12 mutual friends</h5>
          </div>
        </div>
        <button className="cmp2" >
        <FaAngleRight />
        </button>
      </div>

      <div className="block_2">
       
        <div className="cmp1 ">
          <img src={user6} alt="user2"></img>

          <div className="secondMicroDiv">
            <h4>Mohannad Zitoun</h4>

            <h5>12 mutual friends</h5>
          </div>
        </div>
        <button className="cmp2" >
        <FaPlus />
        </button>
      </div>

      <div className="block_3">
       
        <div className="cmp1 ">
          <img src={user7} alt="user3"></img>
          <div className="SecondmicroDiv">
            <h4>Mohannad Zebar</h4>

            <h5>12 mutual friends</h5>
          </div>
        </div>
        <button className= "cmp2" >
        <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default Suggestpg;
