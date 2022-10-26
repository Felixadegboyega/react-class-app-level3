import React from 'react'

export const useFetch = () => {

	const get = async (url) => {
		let result;
		await fetch(url)
			.then(res => res.json())
			.then(data => {
				result = data;
			})
		return result;
	}

	return {get}
}
