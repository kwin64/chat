import react from 'react'
import bgAuth from '../../assets/bgAuth.jpeg'
import AuthService from '../../services/AuthService'
import { avatars } from '../../utils/consts'

import './Auth.scss'

export const Auth = () => {
	const [email, setEmail] = react.useState('')
	const [password, setPassword] = react.useState('')
	const [name, setName] = react.useState('')
	const inputAvatarRef = react.useRef(avatars[0])

	const [imageUrl, setImageUrl] = react.useState(avatars[0])

	const [activeAvatar, setActiveAvatar] = react.useState(0)

	const handleChangeImg = async e => {
		try {
			const formData = new FormData()
			const file = e.target.files[0]
			console.log(file)
			// formData.append('image', file)
			// const { data } = await AuthService.uploadImageForUser(formData)
			setImageUrl(data.url)
		} catch (error) {
			console.log(error)
			alert('Error uploading image')
		}
	}

	const handleSubmit = async e => {
		try {
			e.preventDefault()
			const fields = {
				email: email,
				password: password,
				name: name,
				avatarUrl: imageUrl
			}
			console.log(fields)
		} catch (error) {}
	}

	const handleActiveAvatar = (index, avatar) => {
		setActiveAvatar(index)
		setImageUrl(avatar)
		inputAvatarRef.current.click()
	}

	return (
		<div
			className='auth__wrapper'
			style={{
				backgroundImage: `url(${bgAuth})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: 'cover'
			}}>
			<div className='auth__container'>
				<h1 className='auth__title'>Create a new account</h1>
				<form
					className='auth__form'
					onSubmit={handleSubmit}>
					<input
						className='auth__input'
						type='email'
						placeholder='email'
						required
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>

					<input
						className='auth__input'
						type='password'
						placeholder='password'
						required
						minLength='5'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>

					<input
						className='auth__input'
						type='text'
						placeholder='name'
						required
						minLength='2'
						onChange={e => setName(e.target.value)}
						value={name}
					/>

					<div className='auth__avatars'>
						{avatars.map((avatar, index) => (
							<img
								key={index}
								className={
									activeAvatar === index ? 'auth__avatar__img--active' : 'auth__avatar__img'
								}
								src={avatar}
								alt='avatar'
								onClick={() => handleActiveAvatar(index, avatar)}
							/>
						))}
					</div>

					<input
						ref={inputAvatarRef}
						type='file'
						// onChange={handleChangeImg}
						hidden={true}
					/>

					<button
						className='auth__button'
						type='submit'
						value='Submit'>
						submit
					</button>
				</form>
			</div>
		</div>
	)
}
