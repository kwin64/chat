import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './page/auth/Auth'
import { Main } from './page/main/Main'
import { NotFound } from './page/NotFound'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/chat'
					element={<Main />}
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
