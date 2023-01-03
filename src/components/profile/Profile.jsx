import React from 'react'
import profile from '../../assets/profile.png'
import './Profile.scss'

const Profile = () => {
	return (
		<img
			className='profile'
			src={profile}
			alt='profile'
		/>
	)
}
export default Profile
