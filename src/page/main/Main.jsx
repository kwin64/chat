import bgChat from '../../assets/bgChat.jpeg'
import Header from '../../components/header/Header'
import Logout from '../../components/logout/Logout'
import Message from '../../components/message/Message'
import Sidebar from '../../components/sidebar/Sidebar'
import User from '../../components/user/User'
import './Main.scss'

const arrUsers = Array(10).fill('User')
const arrMessages = Array(20).fill('message')
const activeSidebar = '' //profile settings users 
export const Main = () => {
	return (
		<div className='main__wrapper'>
			<div className='users__container'>
				<div className='users__sidebar'>
					<Sidebar />
					<Logout/>
				</div>
				<div className='users__main'>

					{arrUsers.map((user, index) => (
						<User
							key={index}
							user={user}
						/>
					))}
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
					{arrMessages.map((message, index) => (
						<Message
							key={index}
							message={message}
						/>
					))}
				</div>
				<div className='chat__footer'>footer</div>
			</div>
		</div>
	)
}
