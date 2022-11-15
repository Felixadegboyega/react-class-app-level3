import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'
import {HomePage} from './pages/HomePage'
import {Profile} from './pages/Profile'
import Transfer from './pages/Transfer'
import UserDashboard from './pages/UserDashboard'
import {Login} from './pages/Login'
import {UserGuard} from './guards/UserGuard'
import {Counter} from './pages/Counter'
import {Timer} from './pages/Timer'

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<div className=' '>
				{/* <Nav /> */}
				<Routes>
					<Route key="index" path='/' element={<Navigate to="/home" />} />
					<Route key="home" path='/home' element={<HomePage />} />
					<Route key="about" path='/about/' element={<About />} />
					<Route key="profile" path='/profile/:username' element={<Profile />} />
					<Route key="timer" path='/timer' element={<Timer />} />
					<Route key="user" path='/user' element={<UserGuard />} children={
						[
							<Route key="counter" path="counter" element={<Counter />} />,
							<Route key="dashboard" path="dashboard" element={<UserDashboard />} />,
							<Route key="transfer" path="transfer" element={<Transfer />} />
						]
					} />
					<Route key="login" path="login" element={<Login />} />
					<Route key="all" path='*' element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
