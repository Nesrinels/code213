import React from 'react'
import './Suggestgrp.css'
import image from '../assests/image.jpg'
import user1 from '../assests/user1.png'
import user2 from '../assests/user2.png'
import user3 from '../assests/user3.png'
import user4 from '../assests/user4.png'

const Suggestgrp = () => {
  return (
    <div className='thirdpart'>
      <div className='suppart'>
        <h4>Suggest groupes</h4>
        <a href='#'>See all</a>
      </div>
 
      <div className='suggprg'>
        <div className='bigimg'>
        <img src={image} alt='grp Suggestion' />
        </div>
        <div className='B'>
        <div className='images'>
          <img className='rms' id='a' src={user1} alt='user1' />
          <img className='rms' src={user2} alt='user2' />
          <img className='rms' src={user3} alt='user3' />
          <img className='rms' src={user4} alt='user4' />
          </div>
          <a href='#'>+2</a>
          <p>Member apply</p>
      </div>
      </div>

    </div>
  );
}

export default Suggestgrp;