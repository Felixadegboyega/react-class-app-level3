import axios from 'axios';
import React, {useEffect, useState} from 'react'
import loader from './ball.gif'
const Display = ({users}) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		fetch("https://jsonplaceholder.typicode.com/photos/", {
		})
			.then(res => res.json())
			.then(data => {
				setIsLoading(false);
				setImages(data);
				console.log(data);
			})
		// axios.get("https://jsonplaceholder.typicode.com/photos")
		// 	// .then(res => res.json())
		// 	.then(res => {
		// 		setIsLoading(false);
		// 		setImages(res.data);
		// 		console.log(res);
		// 	}).catch(err => {
		// 		console.log(err);
		// 	})
	}, [])

	return (
		<div>
			{
				isLoading &&
				<img src={loader} />
			}
			{/* {
				users.length == 0 ? "Empty" : users.map((each, i) => (
					<div>{each.firstname} {each.lastname}</div>
				))
			} */}
			{
				users.length == 0 && "Empty"
			}
			{
				users.length != 0 && users.map((each, i) => (
					<div>{each.firstname} {each.lastname}</div>
				))
			}
			{
				images.filter((each, i) => i <= 2).map((each, i) => (
					<div key={i}>
						{each.title}
						<img src={each.url} />
					</div>
				))
			}
		</div>
	)
}

export default Display