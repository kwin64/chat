import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './page/auth/Auth'
import { Chat } from './page/Chat'
import { NotFound } from './page/NotFound'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/chat'
					element={<Chat />}
				/>
				<Route
					path='/'
					element={
						<Navigate
							to='/chat'
							replace
						/>
					}
				/>
				<Route
					path='/auth'
					element={<Auth />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	)
}

export default App
