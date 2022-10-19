import React from 'react'

const NewData = ({data, setData}) => {
	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setData({...data, [name]: value});
	}
	return (
		<div>
			<input name='firstname' onChange={handleChange} value={data.firstname} className='w-56 p-1 border rounded outline-none block my-1' />
			<input name='lastname' onChange={handleChange} value={data.lastname} className='w-56 p-1 border rounded outline-none block my-1' />
		</div>
	)
}

export default NewData