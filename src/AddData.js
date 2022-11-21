import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setProfile} from './features/user/profileSlice';

const AddData = ({addNewUser}) => {
	const profile = useSelector((state) => state.profile.details);
	const dispatch = useDispatch();
	useEffect(() => {
		const data = {firstname: "Ade", lastname: "Ade"};
		dispatch(setProfile(data));
	}, [dispatch])

	const updateUser = () => {
		const data = {firstname: "Ade", lastname: "Ade"};
		dispatch(setProfile(data));
	}

	return (
		<div>
			{profile.firstname}
			{profile.lastname}
			<button onClick={addNewUser} className='w-56 p-1 bg-slate-400 text-white border rounded outline-none block my-1'>Add</button>
			<button onClick={updateUser} className='w-56 p-1 bg-slate-400 text-white border rounded outline-none block my-1'>Update</button>
		</div>
	)
}

export default AddData