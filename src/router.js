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

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<div className='flex '>
				{/* <Nav /> */}
				<Routes>
					<Route path='/' element={<Navigate to="/home" />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/about/' element={<About />} />
					<Route path='/profile/:username' element={<Profile />} />
					<Route path='/user' element={<UserGuard />} children={
						[
							<Route path="dashboard" element={<UserDashboard />} />,
							<Route path="transfer" element={<Transfer />} />
						]
					} />
					<Route path="login" element={<Login />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
