import '.components./Sidebarright.css'


function Sidebarright () {

    return (

        <div className="firstComponent">

        <div className="firstSmallDiv">

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

            <div className="secondmicroDiv">

        <h4>
         Anthony Daugloi
        </h4>

        <h5>
        12 mutual friends
        </h5>

            </div>

            </div>

        <div className="thirdSmallDiv">

            <div className="firstMicroDiv">
        <img src="/images/user-2.png" alt="user2" >

        </img>
    </div>

        </div>

    <div className="secondMicroDiv">

        <h4>
        Mohannad Zitoun
        </h4>

        <h5>
        12 mutual friends
        </h5>

    </div>

        <div className="fourthSmallDiv">

            <div className="FirstmicroDiv">


            <img src="/images/user-3.avif" alt="user3" >

            </img>

            </div>

        </div>


    <div className="SecondmicroDiv">
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

export default Sidebarright ;