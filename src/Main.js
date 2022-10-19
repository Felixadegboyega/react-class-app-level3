import React, {useState} from 'react'
import AddData from './AddData'
import Display from './Display'
import NewData from './NewData'

const Main = () => {
	const [users, setUsers] = useState([]);
	const [data, setData] = useState({
		firstname: "", lastname: ""
	})
	const addNewUser = () => {
		setUsers([...users, data]);
	}
	return (
		<div className='m-5 p-5 border rounded'>
			THis is the Main component
			<NewData data={data} setData={setData} />
			<AddData addNewUser={addNewUser} />
			<Display users={users} />
		</div>
	)
}

export default Main