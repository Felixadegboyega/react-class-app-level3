import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react'
import {baseUrl} from './constants';

export const ConnectToBackend = () => {
	const nameRef = useRef();
	
	const [profile, setProfile] = useState(null);
	const [isloggedIn, setIsloggedIn] = useState(false);

	useEffect(() => {
		axios.get(`${baseUrl}get-profile`, {
			headers: {
			"Authorization" : localStorage.token
			}
		}).then(res => {
			if (res.data.data) {
				setProfile(res.data.data);
			}
			// console.log(res);
			// setProfile()
		})
	}, [isloggedIn])
	
	const [loginDetails, setLoginDetails] = useState({
		email: "",
		password: ""
	})

	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: ""
	})

	const handleLoginDetails = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setLoginDetails({...loginDetails, [name]: value});
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser({...user, [name]: value});
	}
	const handleRegister = () => {
		console.log(user);
		axios.post(`${baseUrl}new-user`, user)
			.then(res => {
				console.log(res);
			})
	}

	const handleLogin = () => {
		axios.post(`${baseUrl}login`, loginDetails)
			.then(res => {
				if (res.data.token) {
					setIsloggedIn(true);
					localStorage.setItem("token", `Bearer ${res.data.token}`)
				} else {
					localStorage.removeItem('token')
					setIsloggedIn(false);

			}
			})
	}
	return (
		<div>

			<div>
				SignUp
				<input className='block m-3 border rounded p-2 outline-none' placeholder='firstname' name='firstname' value={user.firstname} onChange={handleChange} />
				<input className='block m-3 border rounded p-2 outline-none' placeholder='lastname' name='lastname' value={user.lastname} onChange={handleChange} />
				<input className='block m-3 border rounded p-2 outline-none' placeholder='email' name='email' value={user.email} onChange={handleChange} />
				<input className='block m-3 border rounded p-2 outline-none' placeholder='password' name='password' value={user.password} onChange={handleChange} />
				<button onClick={handleRegister}>Submit</button>
			</div>
			<br />
			<div>
				SignIn
				<input className='block m-3 border rounded p-2 outline-none' placeholder='email' name='email' value={loginDetails.email} onChange={handleLoginDetails} />
				<input className='block m-3 border rounded p-2 outline-none' placeholder='password' name='password' value={loginDetails.password} onChange={handleLoginDetails} />
				<button onClick={handleLogin}>Submit</button>
			</div>

			{
				profile ? 
				<div>
						User Profile
						<div>{profile.firstname} {profile.lastname}</div>
				</div> : 'Not online'
			}
		</div>
	)
}

{/* <input ref={nameRef} className="border border-blue-300 outline-none" />
<button onClick={handleSubmit}>Submit</button> */}

			// const handleSubmit = () => {
			// 	axios.post(`${baseUrl}new-todo`, {todoName: nameRef.current.value}, {
			// 		headers: {
			// 			"Authorization": `Bearer anaon;oanvokg`
			// 		}
			// 	})
			// 		.then(result => {
			// 			console.log(result.data);
			// 		}).catch(err => {
		
			// 		})
			// 	// fetch("http://localhost:3200/new-todo", {
			// 	// 	method: "POST",
			// 	// 	body: JSON.stringify({todoName: nameRef.current.value})
			// 	// })
			// 	// 	.then(res => res.json())
			// 	// 	.then(data => {
			// 	// 		console.log(data);
			// 	// 	})
			// }