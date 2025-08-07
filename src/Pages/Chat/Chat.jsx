import React from 'react'
import Sidemenu from '../../Components/Sidemenu/Sidemenu'
import FriendList from '../../Components/FriendList/FriendList'
import ChatBox from '../../Components/ChatBox/ChatBox'

const Chat = () => {
  return (
    <div className='flex'>
        <Sidemenu />
        <FriendList />
        <ChatBox />
    </div>
  )
}

export default Chat