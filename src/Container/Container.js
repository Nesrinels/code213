import React from 'react'

import Sidebarleft from '../component/Sidebarleft/Sidebarleft'

function Container(props) {
  return (
    <div className='Container'>
      {props.children}
    </div>
  )
}

export default Container