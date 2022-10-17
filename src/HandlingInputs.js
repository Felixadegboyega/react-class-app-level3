import react, {useState} from 'react';
import './styles.css'

const HandlingInputs = () => {
	const [info, setInfo] = useState({
		firstname: "", lastname: '', school: ""
	})
	const [usersArray, setUsersArray] = useState([]);

	// const [lastname, setLastname] = useState("")
	// const [school, setSchool] = useState("")
	// const [firstname, setFirstname] = useState("")
	// const handleLastnameChange = (e) => {
	// 	setLastname(e.target.value)
	// }
	// const handleSchoolChange = (e) => {
	// 	setSchool(e.target.value)
	// }
	const handleChange = (e) => {
		const inputName = e.target.name;
		const value = e.target.value;
		setInfo({...info, [inputName]: value})
	}

	const getInfo = () => {
		const newArray = [info, ...usersArray]
		setUsersArray(newArray);
	}
	const styles = {backgroundColor: 'blue', padding: '5px'}
	return (
		<div>
			HandlingInputs Here <br />
			<input className='my-input border rounded p-1 outline-none' value={info.firstname} onChange={handleChange} placeholder='Firstname' name="firstname" />
			<input value={info.lastname} onChange={handleChange} placeholder='Lastname' name="lastname" />
			<input value={info.school} onChange={handleChange} placeholder='School' name="school" />
			<button onClick={getInfo}>Get Info</button>
			{
				usersArray.map((each, i) => (
					<div key={i}>
						{each.firstname}
					</div>
				))
			}
		</div>
	)
}



export default HandlingInputs;