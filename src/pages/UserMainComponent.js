import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet} from 'react-router'

const UserMainComponent = () => {
	const state = useSelector((state) => state)

	return (
		<div className='flex'>
			<div className='border-r h-screen p-2'>
				Nav here ({state.counter.value})
				{state.profile.firstname}
				<img src={state.profile.profilePictureLink} />
			</div>

			<Outlet />
		</div>
	)
}

export default UserMainComponent