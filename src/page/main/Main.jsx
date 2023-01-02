import './Main.scss'
import bgChat from '../../assets/bgChat.jpeg'
import Message from '../../components/message/Message'

export const Main = () => {
	return (
		<div className='main__wrapper'>
			<div className='users__container'></div>
			<div className='chat__container'>
				<div className='chat__header'>header</div>
				<div
					className='chat__main'
					style={{
						backgroundImage: `url(${bgChat})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'cover'
					}}>
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
					<Message />
				</div>
				<div className='chat__footer'>footer</div>
			</div>
		</div>
	)
}
