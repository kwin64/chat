import React from 'react'
import Profile from '../profile/Profile'
import Settings from '../settings/Settings'
import chat from '../../assets/chat.png'
import './Sidebar.scss'

const Sidebar = () => {
	return (
		<div>
			<Profile />
			<img
				className='chat'
				src={chat}
				alt=''
			/>
			<Settings />
		</div>
	)
}
export default Sidebar
