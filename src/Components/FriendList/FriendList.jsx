import React from 'react'
import './Friendlist.css'
import { useDispatch, useSelector } from 'react-redux'
import { setShowChat } from '../../Slices/chatSlice'

const FriendList = () => {
    // Vars =>
    const dispatch = useDispatch()
  return (
    <div className='bg-white mt-[30px] lg:w-[330px] w-full rounded-tl-[20px] border-t-[1px] border-l-[1px] border-r-[2px] border-[#E9E9E9] '>
        <div className="pt-[20px] mb-[20px]">
            <h2 className='font-poppins font-semibold text-[20px] text-[#888888] px-[15px]'>Chats</h2>
        </div>
        <ul className="friendlist px-[15px]">
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend1.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Friend one</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend2.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Adam Brooks</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend3.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Mia Collins</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend4.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Ethan Clark</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend5.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Olivia Harris</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend6.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Liam Walker</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend7.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Sophia Adams</h3>
            </li>
            <li onClick={()=>dispatch(setShowChat(true))}>
                <img src="images/friend8.png" alt="friend" />
                <h3 className='font-poppins font-normal text-[15px] text-[#888888]'>Noah James</h3>
            </li>
        </ul>
    </div>
  )
}

export default FriendList