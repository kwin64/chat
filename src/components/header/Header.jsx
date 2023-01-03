import React from 'react'
import profile from '../../assets/profile.png'
import './Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<img
				className='header__user__avatar'
				src={profile}
				alt='avatar'
			/>
			<div className='header__user__info'>
				<h3 className='header__user__name'>User name</h3>
				<p className='header__user__activity'>online</p>
			</div>
		</div>
	)
}
export default Header
