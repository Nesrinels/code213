import React from 'react'
import './Event.css';

const Event = () => {
  return (
    <div className='lastpart'>
      <div className='suppart'>
      <h4>Event</h4>
      <a > See all</a>
      </div>
      <hr/>
      <div className='A'>
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
  )
}

export default Event