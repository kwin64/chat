import react from 'react'
import { useNavigate } from 'react-router-dom'
import bgChat from '../../assets/bgChat.jpeg'
import avatar from '../../assets/man2.png'
import logout from '../../assets/logout.png'
import Header from '../../components/header/Header'
import Message from '../../components/message/Message'
import Profile from '../../components/profile/Profile'
import Settings from '../../components/settings/Settings'
import User from '../../components/user/User'
import { sidebarItems } from '../../utils/consts'
import './Main.scss'
import InputEmoji from 'react-input-emoji'
import { io } from 'socket.io-client'

const arrUsers = Array(10).fill({ name: 'John', avatar: avatar })
const arrMessages = Array(20).fill('messag;asldk ;laskd;l ks;lakd;l kasl;dk e')

export const Main = () => {
	const navigate = useNavigate()
	const [activeItemSidebar, setActiveItemSidebar] = react.useState(1)
	const [text, setText] = react.useState('')
	const [data, setData] = react.useState({})

	function handleOnEnter(text) {
		console.log('enter', text)
	}

	const handleActiveItemSidebar = item => {
		setActiveItemSidebar(item)
	}

	const socket = io('http://localhost:8000')
	const name = 'Admin'
	const room = 'All'

	react.useEffect(() => {
		socket.emit('join', { name, room })
	}, [name, room])

	react.useEffect(() => {
		socket.on('message', data => {
			setData(data)
		})
	}, [name, room])

	console.log(data)

	return (
		<div className='main__wrapper'>
			<div className='users__container'>
				<div className='users__sidebar'>
					{sidebarItems.map((item, index) => (
						<img
							key={index}
							onClick={() => handleActiveItemSidebar(index)}
							className={index === activeItemSidebar ? 'active__item' : item.title}
							src={item.icon}
							alt={item.title}
						/>
					))}
					<img
						onClick={() => navigate('/auth')}
						className={'logout'}
						src={logout}
						alt={'logout'}
					/>
				</div>
				<div className='users__main'>
					{activeItemSidebar === 0 && <Profile />}
					{activeItemSidebar === 1 && (
						<div className='chat__information'>
							<h1 className='chat__title'>Chat</h1>
							{arrUsers.map((user, index) => (
								<User
									key={index}
									user={user}
								/>
							))}
						</div>
					)}

					{activeItemSidebar === 2 && <Settings />}
				</div>
			</div>
			<div className='chat__container'>
				<div className='chat__header'>
					<Header />
				</div>
				<div
					className='chat__main'
					style={{
						backgroundImage: `url(${bgChat})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'cover'
					}}>
					{/* {arrMessages.map((message, index) => (
						<Message
							key={index}
							message={message}
						/>
					))} */}
				</div>
				<div className='chat__footer'>
					<InputEmoji
						value={text}
						onChange={setText}
						cleanOnEnter
						onEnter={handleOnEnter}
						placeholder='Type a message'
						borderRadius='2px'
						className='chat__input__form'
					/>
				</div>
			</div>
		</div>
	)
}
