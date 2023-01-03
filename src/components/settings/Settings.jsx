import React from 'react'
import cat from '../../assets/cat.png'
import './Settings.scss'

const Settings = () => {
	return (
		<div className='settings__container'>
			<h1 className='settings__title'>Settings</h1>
			<img
				className='settings__img'
				src={cat}
				alt='avatar'
			/>
			<button>change</button>
			<input value={'Eugene'} />
			<input value={'Front end developer'} />

			<button>save</button>
		</div>
	)
}
export default Settings
