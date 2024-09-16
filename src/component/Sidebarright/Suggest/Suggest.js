import "./Suggest.css";
import React from "react";
import image from "../../../assets/images/image.jpg";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user2.png";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user4.png";




function Suggest() {
  return (
    <div className="suggest">
      <div className="block1">
        <h4>Suggest groupes</h4>
        <a href="#">See all</a>
      </div>

      <div className="block2">
        <hr id="hr" />
        <img src={image} alt="grp Suggestion" />
      </div>

      <div className="block3">
        <img  src={user1} alt="user1" />
        <img  src={user2} alt="user2" />
        <img  src={user3} alt="user3" />
        <img  src={user4} alt="user4" />
        <a href="#"><p>+2</p></a>
        <p>Member apply</p>
      </div>
    </div>
  );
}

export default Suggest;
