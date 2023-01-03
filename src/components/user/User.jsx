import React from 'react'

const User = ({ user }) => {
	return (
		<div className='user__container'>
			<img
				className='user__avatar'
				src={user.avatar}
				alt='avatar'
			/>
			<span className='user__name'>{user.name}</span>
		</div>
	)
}
export default User
