import React from 'react'

export const Timer = () => {
	return (
		<>
			<div className='m-5 w-64 py-5 mx-auto text-center shadow rounded'>
				<h3 className='text-6xl text-gray-500 font-bold'>12:36</h3>
			</div>
			<div className='w-64 mx-auto -mt-10 text-center'>
				<button className='bg-white shadow w-8 h-8 rounded-full mx-5'>+</button>
				<button className='bg-white shadow w-8 h-8 rounded-full mx-5'>+</button>
			</div>
		</>
	)
}
