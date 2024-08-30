import "./Suggest.css";
import React from "react";
import image from "../../assets/images/image.jpg";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user2.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user4.png";
import user5 from "../../assets/images/user-pic-1.png"
import user6 from "../../assets/images/user-pic-2.png"
import user7 from "../../assets/images/user-pic-3.png"

function Suggest() {
  return (
    <>


      <div className="firstComponent">
      {/* the first small div  --> start  */}

      <div className="firstSmallDiv">
        <h4>Your Team</h4>

        <a href="#S">See all</a>

        <hr></hr>
      </div>

      {/* the first small div  --> end */}

      {/* second small div --> start  */}

      <div className="secondSmallDiv">
        {/* first micro div --> start  */}

        <div className="firstmicroDiv">
          <img src={user5} alt="user1"></img>
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
          <img src={user6} alt="user2"></img>
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
          <img src={user7} alt="user3"></img>
          
        </div>

        {/* first micro div --> end  */}

        <div className="SecondmicroDiv">
          <h4>Mohannad Zebar</h4>

          <h5>12 mutual friends</h5>
        </div>
      </div>
    </div>



      <div className="thirdpart">
        <div className="suppart">
          <h4>Suggest groupes</h4>
          <a href="#S">See all</a>
        </div>

        <div className="suggprg">
          <hr id="hr" />
          <div className="bigimg">
            <img src={image} alt="grp Suggestion" />
          </div>
          <div className="A">
            <div className="images">
              <img className="rms1" id="a" src={user1} alt="user1" />
              <img className="rms2" src={user2} alt="user2" />
              <img className="rms3" src={user3} alt="user3" />
              <img className="rms4" src={user4} alt="user4" />
            </div>
            <a href="#S">+2</a>
            <p>Member apply</p>
          </div>
        </div>
      </div>

      <div className='lastpart'>
      <div className='suppart2'>
      <h4>Event</h4>
      <a href="#S" > See all</a>
      </div>
      <div className='A2'>
        <div className='a'>
          FEB <br />22
        </div>
        <div className='b'>
          <h4>Meeting with clients</h4>
          <p>41 madison ave, floor 24 new york, NY 10010</p>
        </div>
      </div>
      <div className='B'>
        <div className='c'>
          APR <br />30
        </div>
        <div className='d'>
          <h4>Developer Program</h4>
          <p>41 madison ave, floor 24 new york, NY 10010</p>
        </div>
      </div>
      <div className='C'>
        <div className='e'>
          APR <br />23
        </div>
        <div className='f'>
          <h4>Developer Program</h4>
          <p>41 madison ave, floor 24 new york, NY 10010</p>
        </div>
      </div>


    </div>

</>
  );
}


export default Suggest;
