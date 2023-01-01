import react from 'react'
import { useRef } from 'react'
import bgAuth from '../../assets/bgAuth.jpeg'
import './Auth.scss'

export const Auth = () => {
	const avatarUrl = useRef('')

	const [email, setEmail] = react.useState('')
	const [password, setPassword] = react.useState('')
	const [name, setName] = react.useState('')

	const handleSubmit = e => {
		e.preventDefault()
		console.log({ email, password, name })
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

					<button onClick={() => avatarUrl.current.click()}>image</button>
					<input
						ref={avatarUrl}
						type='file'
						hidden
						accept='.jpg, .jpeg, .png'
					/>

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
