import React from 'react'
import './Profile.scss'
import cat from '../../assets/cat.png'

const Profile = () => {
	return (
		<div className='profile__container'>
			<h1 className='profile__title'>Profile</h1>
			<img
				className='profile__img'
				src={cat}
				alt='avatar'
			/>
			<h2>Eugene</h2>
			<p>Front end developer</p>
		</div>
	)
}
export default Profile
