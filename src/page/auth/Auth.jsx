import react from 'react'
import bgAuth from '../../assets/bgAuth.jpeg'
import cat from '../../assets/cat.png'
import girl1 from '../../assets/girl1.png'
import girl2 from '../../assets/girl2.png'
import man1 from '../../assets/man1.png'
import man2 from '../../assets/man2.png'
import './Auth.scss'

const avatars = [girl1, girl2, man1, man2, cat]

export const Auth = () => {
	const [email, setEmail] = react.useState('')
	const [password, setPassword] = react.useState('')
	const [name, setName] = react.useState('')

	const [activeAvatar, setActiveAvatar] = react.useState(0)

	const handleSubmit = e => {
		e.preventDefault()

		console.log({ email, password, name })
	}

	const handleActiveAvatar = avatar => {
		setActiveAvatar(avatar)
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

					<div className='auth_avatars'>
						{avatars.map((avatar, index) => (
							<img
								key={index}
								className={activeAvatar === index ? 'auth_avatar_img--active' : 'auth_avatar_img'}
								src={avatar}
								alt='avatar'
								onClick={() => handleActiveAvatar(index)}
							/>
						))}
					</div>
					<button
						type='submit'
						value='Submit'>
						submit
					</button>
				</form>
			</div>
		</div>
	)
}
