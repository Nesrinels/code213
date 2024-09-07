import React from 'react'
import Settings from '../component/Settings/Settings'
import Sidebarleft from '../component/Sidebarleft/Sidebarleft'

function Container(props) {
  return (
    <div className='Container'>
      {props.children}
    </div>
  )
}

export default Container