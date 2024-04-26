import React from 'react'
import dp from '../../Assets/user.jpeg'
import note from '../../Assets/note.jpeg'
import { FaCircleUser } from "react-icons/fa6";

const Header2 = () => {
  return (
    <div className='header2'>

    <div>
      
      <img src={note} alt="" className='note'/>
      <img src={dp} alt="" />
    </div>
    
</div>
  )
}

export default Header2