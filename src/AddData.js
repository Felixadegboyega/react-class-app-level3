import React from 'react'

const AddData = ({addNewUser}) => {
	return (
		<div>
			<button onClick={addNewUser} className='w-56 p-1 bg-slate-400 text-white border rounded outline-none block my-1'>Add</button>
		</div>
	)
}

export default AddData