import React from 'react'
import {useNavigate} from 'react-router'

export const Login = () => {
	const navigate = useNavigate();
	const login = () => {
		localStorage.setItem("loggedIn", JSON.stringify(true))
		navigate("/user/dashboard")
	}
	return (
		<div className='flex h-screen'>
			<button onClick={login} className='w-20 m-auto rounded border border-blue-300 hover:bg-blue-300 transition-all duration-300 p-2'>Login</button>
		</div>
	)
}
