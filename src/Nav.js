import React from 'react'
import {Link} from 'react-router-dom'

export const Nav = () => {
	return (
		<div className='h-screen space-x-2 text-blue-400 shadow p-2'>
			<span className='block p-2 text-left border rounded-lg my-3'>Nav Here</span>
			<Link className='block p-2 text-left border rounded-lg my-3 hover:bg-blue-600 hover:text-white transition-all duration-300' to="/home">Home</Link>
			<Link className='block p-2 text-left border rounded-lg my-3 hover:bg-blue-600 hover:text-white transition-all duration-300' to="/about">About</Link>
		</div>
	)
}
