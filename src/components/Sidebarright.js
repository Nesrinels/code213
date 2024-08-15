import './Sidebarright.css'


function Sidebarright () {

    return (

        <div className="firstComponent">

        <div class="firstSmallDiv">

            <h4>
             Your Team
            </h4>

            <a href="#">
             See all
            </a>

            <hr></hr>
            
        </div>

        <div className="secondSmallDiv">

            <div className="firstmicroDiv">
        <img src="/user-1.png" alt="user1" >
        </img>
            </div>

            <div class="secondmicroDiv">

        <h4>
         Anthony Daugloi
        </h4>

        <h5>
        12 mutual friends
        </h5>

            </div>

        </div>

        <div class="thirdSmallDiv">

            <div class="firstMicroDiv">
        <img src="/images/user-2.png" alt="user2" >

        </img>
    </div>

    <div class="secondMicroDiv">
        <h4>
        Mohannad Zitoun
        </h4>

        <h5>
        12 mutual friends
        </h5>

    </div>

        </div>

        <div class="fourthSmallDiv">

            <div class="FirstmicroDiv">
        <img src="/images/user-3.avif" alt="user3" >

        </img>
        </div>
    <div class="SecondmicroDiv">
        <h4>
        Mohannad Zebar
        </h4>

        <h5>
        12 mutual friends
        </h5>
    </div>

        </div>

    );

}

export default Sidebarright;