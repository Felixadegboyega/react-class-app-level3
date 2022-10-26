import React from 'react'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import {About} from './About'
import {HomePage} from './HomePage'
import {Nav} from './Nav'

export const MainRouter = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}
