import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import {About} from './About'
import {HomePage} from './HomePage'
import {Nav} from './Nav'
import {Profile} from './Profile'
import Transfer from './Transfer'
import UserDashboard from './UserDashboard'
import UserMainComponent from './UserMainComponent'

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<div className='flex '>
				{/* <Nav /> */}
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/about/' element={<About />} />
					<Route path='/profile/:username' element={<Profile />} />
					<Route path='/user' element={<UserMainComponent />} children={
						[
							<Route path="dashboard" element={<UserDashboard />} />,
							<Route path="transfer" element={<Transfer />} />
						]
					} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
