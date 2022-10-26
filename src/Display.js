import React, {useEffect, useState} from 'react'
import loader from './ball.gif'
import {useFetch} from './useFetch';
import UsingRef from './UsingRef';
const Display = ({users}) => {
	const [images, setImages] = useState([]);
	const [image, setImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [anImageIsLoading, setAnImageIsLoading] = useState(false);
	const {get} = useFetch();

	const getAnImage = async (id) => {
		setAnImageIsLoading(true);
		const result = await get(`https://jsonplaceholder.typicode.com/photos/${id}`);
		if (result) {
			setImage(result);
			setAnImageIsLoading(false);
		}
	}
	const getImages = async () => {
		setIsLoading(true);
		const result = await get("https://jsonplaceholder.typicode.com/photos/");
		if (result) {
			setImages(result);
			setIsLoading(false)
			console.log(result);
		}

		// const jsonImg = fetchedImages.json();

		// axios.get("https://jsonplaceholder.typicode.com/photos")
		// 	// .then(res => res.json())
		// 	.then(res => {
		// 		setIsLoading(false);
		// 		setImages(res.data);
		// 		console.log(res);
		// 	}).catch(err => {
		// 		console.log(err);
		// 	})
	}
	useEffect(() => {
		getImages();
	}, [])

	return (
		<div className='flex'>
			<div>
				{
					isLoading &&
					<img src={loader} alt="loader" />
				}
				{/* {
				users.length == 0 ? "Empty" : users.map((each, i) => (
					<div>{each.firstname} {each.lastname}</div>
				))
			} */}
				{
					users.length === 0 && "Empty"
				}
				{
					users.length !== 0 && users.map((each, i) => (
						<div>{each.firstname} {each.lastname}</div>
					))
				}
				{
					images.filter((each, i) => i <= 2).map((each, i) => (
						<div key={i} className="cursor-pointer" onClick={() => getAnImage(each.id)}>
							{each.title}
							<img src={each.url} alt="loader" />
						</div>
					))
				}

			</div>
			<div>
				{
					anImageIsLoading &&
					<img src={loader} alt="loader" />
				}
				{
					image?.url
				}
			</div>
			<div>
				<UsingRef />
			</div>
		</div>
	)
}

export default Display
