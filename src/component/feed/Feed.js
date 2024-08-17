import React from 'react'
import "./Feed.css";
import avatar from "../../assets/Avatar/63457.png"
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FiCamera } from "react-icons/fi";




function Feed() {
  return (
    <div>
    <div className="new_post">
        <button id="btn_1" ><img src={avatar}/></button>
      <input type="text" placeholder="what's on your mind?"></input>
    </div>
    <div className= "btns">
    <div>
    <IoVideocamOutline /> 
    <p> Live Video</p>
    </div>
    <div>
    <HiOutlinePhoto /> 
    <p> Photo/Video</p>
    </div>
    <div>
    <FiCamera />
    <p> Feeling/Activity</p>
    </div>
    </div>
    </div>
  )
}

export default Feed

