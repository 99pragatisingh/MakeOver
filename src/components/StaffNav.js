import React from 'react'
import video from '../assets/staff.mp4'

const StaffNav= ({filterItem,menuList}) => {
    // passing the prop attribute filterItem which is used for filtering the category
    // passing the prop attribute menuList which is used for repeatedly use the navbar button
  return (
    <>
    <div className='our-story background'>
        <video src={video} autoPlay loop muted/>
        <div className="our-service">Our Staff</div>
        <div className='our-service-content'>Behind every great salon experience is a team dedicated to your beauty and well-being.</div>
    </div>
        <nav className='navbar'>
            <div className='btn-group'>
                {menuList.map((curElem)=>{
                    return(
                        <button className='btn-group__item' onClick={ ()=> filterItem(curElem)}>{curElem}</button>
                    )
                })}
                
            </div>
       </nav>
    </>
  )
}

export default StaffNav
