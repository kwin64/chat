import React from 'react'
import './Message.scss'
import avatar from '../../assets/man2.png'

const Message = ({ message }) => {
	return (
		<div className='message__container'>
			<img
				className='message__avatar'
				src={avatar}
				alt='avatar'
			/>
			<span className='message__content'>{message}</span>
			<span className='message__createTime'>20:31</span>
		</div>
	)
}
export default Message
