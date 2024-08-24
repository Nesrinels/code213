import "./Suggest.css";
import React from "react";
import image from "../../assets/images/image.jpg";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user2.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user4.png";


function Suggest() {
  return (
   <div className="thirdpart">
    <div className="suppart">
      <h4>Suggest groupes</h4>
      <a href="#">See all</a>
    </div>

    <div className="suggprg">
    <hr id="hr"/>
      <div className="bigimg">
      <img src={image} alt='grp Suggestion' />
      </div>
      <div className="A">
        <div className="images">
        <img className='rms' id='a' src={user1} alt='user1' />
        <img className='rms' src={user2} alt='user2' />
        <img className='rms' src={user3} alt='user3' />
        <img className='rms' src={user4} alt='user4' />
        </div>
        <a href="#">+2</a>
        <p>Member apply</p>
      </div>
    </div>
  </div>
  )
}

export default Suggest