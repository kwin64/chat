import React from 'react'
import Logout from '../logout/Logout'
import Profile from '../profile/Profile'
import Settings from '../settings/Settings'

const Sidebar = () => {
	return (
		<div>
			<Profile />
      <div>Users</div>
			<Settings />
		</div>
	)
}
export default Sidebar
