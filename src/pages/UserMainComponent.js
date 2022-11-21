import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router'

const UserMainComponent = () => {
	const state = useSelector((state) => state)

	return (
		<div className='flex'>
			<div className='border-r h-screen p-2'>
				Nav here ({state.counter.value})
				{state.profile.details.firstname}
				<img className='w-40 animate-pulse' alt='imgI' src={state.profile.details.profilePictureLink} />
			</div>

			<Outlet />
		</div>
	)
}

export default UserMainComponent