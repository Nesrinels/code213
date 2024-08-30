import React from 'react'
import './Suggestpg.css'
import pht from '../assests/pht.jpg'
import { FiExternalLink } from "react-icons/fi";

const Suggestpg  = () => {
  return (
    <div className='fourthpart'>
        <div className='suppart'> 
         <h4>Suggest pages</h4> 
         <a href='#'>See all</a> 
       </div> 
      <div className='suggpg'>
      <img src={pht} alt='page Suggestion' /> 
      <a href='#'><FiExternalLink />Like Page</a> 
      </div>

    </div>
  )
}

export default Suggestpg