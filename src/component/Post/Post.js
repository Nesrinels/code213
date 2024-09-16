import React from "react";
import "./Post.css";
import { FcLikePlaceholder } from "react-icons/fc";
import user3 from "../../assests/user3.png";
import rose from "../../assests/rose.jpg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";

const Post = () => {
  return (
    <div className="post">
      <div className="debut">
        <div className="N">
          <img className="left" src={user3} alt="user3" />
            <div className="milieu">
            <h4 id="title">Anthony Daugloi </h4>
            <p id="para">2 hour ago</p>
          </div>
        </div>
        <h2>...</h2>
      </div>
      <div className="middle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at <br />
          commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.
          Proin blandit ac <br /> massa sed rhoncus <a> See more</a>{" "}
        </p>
      </div>
      <div className="photo">
        <img src={rose} alt="poste" />
      </div>
      <div className="icons">
        <div className="like">
          <AiOutlineLike
            style={{
              color: "white",
              backgroundColor: "#1E74FD",
              borderRadius: "50%",
              padding: "5px",
            }}
            size={18}
          />
          <FcLikePlaceholder
            iFillLike
            style={{ marginLeft: "5px", color: "#4d4e50" }}
            size={30}
          />
          <h5>2.8K Like</h5>
        </div>
        <div className="comment">
          <FaRegComment style={{ color: "#4d4e50" }} size={20} />
          <h5>22 Comment</h5>
        </div>
         
        <div className="share">
          <HiOutlineShare style={{ color: "#4d4e50" }} size={25} />
          <h5>Share</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
