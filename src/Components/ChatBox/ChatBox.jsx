import EmojiPicker from 'emoji-picker-react'
import React, { useEffect, useRef, useState } from 'react'
import { CgAttachment } from 'react-icons/cg'
import { FaPaperPlane, FaRegSmile } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const ChatBox = () => {
    // State Vars =>
    const showChat = useSelector(state=>state.showChat.value)
    const [message, setMessage] = useState('')
    const [showPicker,setShowPicker] = useState(false)
    // Functions =>
    const handleEmojiClick = (emojiObject) => {
        setMessage(prev => prev + emojiObject.emoji)
    }
  return (
    <div className={`flex flex-col w-[calc(100%-62px)] lg:w-full fixed ${showChat? "left-0" : "left-[100%]"} top-0 lg:ml-0 ml-[62px] lg:static lg:h-[calc(100vh-30px)] h-full bg-white lg:mt-[30px] transition-all duration-400`}>
        {/* Friend Info */}
        <div className="w-full h-[51px] py-[8px] bg-[#FBFFFF] flex items-center px-[28px] border-y-[1px] border-[#E9E9E9]">
            <div className='flex items-center gap-2'>
                <img className='rounded-full w-[35px]' src="images/friend7.png" alt="Name" />
                <div className="flex flex-col">
                    <h2 className='font-poppins font-normal text-[15px] text-[#888888]'>Sophia Adams</h2>
                    <h4 className='font-poppins font-normal text-[8px] text-[#298221]'>Online</h4>
                </div>
            </div>
        </div>
        {/* ChatBox */}
        {/* Message er design ta onk faltu, tai change korsi */}
        <div className="overflow-y-auto h-full px-4 py-2 flex flex-col-reverse space-y-reverse space-y-[8px]">
            <div className="self-end bg-[#48a7ff] text-white px-[15px] py-[7px] rounded-lg max-w-xs">hello how are you</div>
            <div className="self-start bg-[#DADADA]/70 text-[#000] px-[15px] py-[7px] rounded-lg max-w-xs">hi.........</div>
        </div>
        {/* Input Field */}
        <div className='py-[18px] flex gap-[8px] lg:gap-[17px] items-center mx-[10px] lg:mx-[23px] mt-[20px] relative'>
        {
            showPicker &&
            <div className="absolute top-[-220px] left-[120px] lg:left-[160px] translate-x-[-50%] translate-y-[-50%]">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
        }
            <button className='cursor-pointer text-[15px] transition-all duration-[300ms] text-[#DADADA] hover:text-[#48B7FF]'>
                <CgAttachment />
            </button>
            <button onClick={()=>setShowPicker(!showPicker)} className='cursor-pointer text-[15px] transition-all duration-[300ms] text-[#DADADA] hover:text-[#48B7FF]'>
                <FaRegSmile />
            </button>
            <input onChange={(e)=>setMessage(e.target.value)} type="text" value={message} className='w-full rounded-full border-[2px] border-[#DADADA] py-[5px] px-[20px] font-poppins font-normal text-[12px] text-[#5c5c5c] focus-visible:border-[#48B7FF]/80' placeholder='Text...' />
            <button className='py-[7px] px-[15px] flex items-center gap-[5px] bg-[#48b6ff]/90 hover:bg-[#48a7ff] rounded-md font-poppins font-semibold text-[12px] text-white cursor-pointer transition-all duration-300'>Send <FaPaperPlane /></button>
        </div>
    </div>
  )
}

export default ChatBox