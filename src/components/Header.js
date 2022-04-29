import React from 'react'
import {GiWorld} from 'react-icons/gi'

const Header = () => {
  return (
    <div className='travel--header'>
        <GiWorld className='travel--world'/>
        <p className='travel--text'>my travel journal.</p>
    </div>
  )
}

export default Header