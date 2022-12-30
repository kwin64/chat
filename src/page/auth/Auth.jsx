import { useRef } from 'react'
import bgAuth from '../../assets/bgAuth.jpeg'
import iconChat from '../../assets/iconChat.png'
import './Auth.scss'

export const Auth = () => {
	const avatarUrl = useRef('')

	return (
		<div
			className='auth__wrapper'
			style={{
				backgroundImage: `url(${bgAuth})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center center',
				backgroundSize: 'cover'
			}}>
			<div className='title__container'>
				<div
					className='title__logo'
					style={{
						backgroundImage: `url(${iconChat})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'cover'
					}}
				/>
				<h1 className='title__title'>Chat</h1>
			</div>

			<div className='auth__container'>
				<h1 className='auth__title'>Create a new account</h1>
				<form className='auth__form'>
					<input
						className='auth__input'
						type='email'
						placeholder='email'
					/>
					<span className='auth__error'>error</span>

					<input
						className='auth__input'
						type='password'
						placeholder='password'
					/>
					<span className='auth__error'>error</span>

					<input
						className='auth__input'
						type='text'
						placeholder='name'
					/>
					<span className='auth__error'>error</span>
					<button>image</button>
					<input
						ref={avatarUrl}
						type='file'
						hidden
						accept='.jpg, .jpeg, .png'
					/>
				</form>
			</div>
		</div>
	)
}
