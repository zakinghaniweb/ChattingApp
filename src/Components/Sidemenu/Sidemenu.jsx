import React, { useState } from 'react'
import { FaEdit, FaPhoneAlt, FaSearch, FaUserAlt, FaUserFriends } from 'react-icons/fa'
import { FaBars, FaMessage } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { NavLink } from 'react-router'
import './Sidemenu.css'
import { ImBlocked } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { setShowChat } from '../../Slices/chatSlice'

const Sidemenu = () => {
  // Vars =>
  const [showProfile, setShowProfile] = useState(false)
  const dispatch = useDispatch()
  const showChat = useSelector(state=>state.showChat.value)
  return (
    <div className='sidemenu-wrapper flex flex-col justify-between items-center'>
        <div>
            <button className='mb-[30px]' onClick={()=>dispatch(setShowChat(!showChat))} to={"#"}><FaBars /></button>
            <div className="flex flex-col gap-[20px]">
                <NavLink className={({ isActive })=>isActive && "!text-[#48B7FF]"} to={"/"}><FaMessage /></NavLink>
                <NavLink className={({ isActive })=>isActive && "!text-[#48B7FF]"} to={"/friends"}><FaUserFriends /></NavLink>
                <NavLink className={({ isActive })=>isActive && "!text-[#48B7FF]"} to={"/block"}><ImBlocked /></NavLink>
                <NavLink className={({ isActive })=>isActive && "!text-[#48B7FF]"} to={"/search"}><FaSearch /></NavLink>
                <NavLink className={({ isActive })=>isActive && "!text-[#48B7FF]"} to={"/settings"}><IoMdSettings /></NavLink>
            </div>
        </div>
        <div className="self-end relative">
          <button onClick={()=>setShowProfile(!showProfile)} className='w-[30px] h-[30px] rounded-full mr-[-5px]'><img src="images/me.png" alt="me" /></button>
          {
            showProfile &&
            <div className="py-[22px] pr-[14px] pl-[24px] absolute w-[330px] h-[336px] top-[-300px] z-[99] left-[45px] border-[2px] border-[#E2E2E2] rounded-lg bg-white">
              <img className='w-[150px] h-[150px] rounded-full' src="images/me.png" alt="me" />
              <h2 className='flex gap-[13px] font-poppins font-medium text-[18px] text-[#656565] items-center mt-[23px]'><FaUserAlt className='text-[#A1A1A1] text-xl' /><span>Adam brooks</span></h2>
              <h3 className='flex gap-[13px] font-poppins font-normal text-[14px] text-[#656565] items-center mt-[15px]'><FaMessage className='text-[#A1A1A1] text-lg' /><span>demo@gmail.com</span></h3>
              <h4 className='flex gap-[13px] font-poppins font-normal text-[14px] text-[#656565] items-center mt-[15px]'><FaPhoneAlt className='text-[#A1A1A1] text-lg' /><span>018**********</span></h4>
              <button className='top-[10px] right-[10px] absolute'><FaEdit className='text-[#A1A1A1] text-lg' /></button>
            </div>
          }
        </div>
    </div>
  )
}

export default Sidemenu