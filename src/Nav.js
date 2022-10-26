import React from 'react'
import {Link} from 'react-router-dom'

export const Nav = () => {
	return (
		<div className='flex space-x-2 text-blue-400 shadow p-2'>
			<span>			Nav Here</span>
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
		</div>
	)
}
