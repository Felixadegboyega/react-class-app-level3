import react, {useState} from 'react';

export default () => {
	const [info, setInfo] = useState({
		firstname: "", lastname: '', school: ""
	})
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
		console.log(info);
	}
	return (
		<div>
			HandlingInputs Here <br />
			<input value={info.firstname} onChange={handleChange} placeholder='Firstname' name="firstname" />
			<input value={info.lastname} onChange={handleChange} placeholder='Lastname' name="lastname" />
			<input value={info.school} onChange={handleChange} placeholder='School' name="school" />

			<button onClick={getInfo}>Get Info</button>
		</div>
	)
}

//  export default HandlingInputs;