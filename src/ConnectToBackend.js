import axios from 'axios';
import React, {useRef} from 'react'

export const ConnectToBackend = () => {
	const nameRef = useRef();
	const handleSubmit = () => {
		axios.post(
			"http://localhost:3200/new-todo",
			{
				todoName: nameRef.current.value
			})
			.then(result => {
				console.log(result.data);
			})
		// fetch("http://localhost:3200/new-todo", {
		// 	method: "POST",
		// 	body: JSON.stringify({todoName: nameRef.current.value})
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log(data);
		// 	})
	}
	return (
		<div>
			<input ref={nameRef} className="border border-blue-300 outline-none" />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}
