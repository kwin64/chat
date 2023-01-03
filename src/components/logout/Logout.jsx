import React from 'react'
import logout from '../../assets/logout.png'
import './Logout.scss'

const Logout = () => {
	return (
		<img
			className='logout'
			src={logout}
			alt='logout'
		/>
	)
}
export default Logout
