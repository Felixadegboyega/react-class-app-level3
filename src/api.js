import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

export const ApiRevisionClass = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json()).then(res => {
				setUsers(res);
			})
	}, [])

	return (
		<div>
			{users.map(each => (
				<div className='shadow m-3 p-2 rounded'>{each.name} <small>{each.email}</small>
					<Link className='text-xs p-1 bg-blue-500 whitespace-nowrap m-2 rounded-lg text-white' to={'/user/' + each.id}>More Info</Link>
					<a target="blank" className='text-xs hover:text-blue-400 transition duration-300' href={'https://' + each.website}>{each.website}</a>
				</div>
			))}
		</div>
	)
}
