import React from 'react'
import {Outlet} from 'react-router'

const UserMainComponent = () => {
	return (
		<div className='flex'>
			<div className='border-r h-screen p-2'>
				Nav here
			</div>

			<Outlet />
		</div>
	)
}

export default UserMainComponent