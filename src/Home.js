import react, {useState, useEffect} from 'react';
import HandlingInputs from './HandlingInputs';
import appstyles from './styles.module.css';

export const MyComponent = () => {
	const myName = 'Felix Adegboyega'
	const department = "Software Engineering"
	const school = "Soft Quest Incoporated"
	const user = {
		firstname: "Felix",
		lastname: "Adegboyega",
		school: "KWASU",
	}

	// let comment = "";
	const [welcome, setWelcome] = useState("");
	const [comment, setComment] = useState("");

	const getComment = (score) => {
		if (score >= 70) {
			setComment("Excellent");
		} else if (score > 60) {
			setComment("Very Good");
		} else if (score > 55) {
			setComment("Good");
		} else if (score > 50) {
			setComment("Fair");
		} else {
			setComment("Fail");
		}
	}

	useEffect(() => {
		setWelcome("You are welcome")
	}, []);

	return (
		<div className={`text-xl ${appstyles.text} ${appstyles.main}`}>
			{welcome} <br />
			{comment} <br />
			My name is {myName} from the department of {department} at {school} <br />
			<input />
			I'm the parent component
			<SecondComponent getComment={getComment} mySchool={school} user={user} />
			<HandlingInputs />
		</div>
	)
}

const SecondComponent = ({getComment, user, mySchool}) => {
	const getResult = () => {
		getComment(60)
	}
	return (
		<div className='border'>
			<button onClick={getResult} className='p-1 bg-blue-300 rounded text-white'>Get comment</button>

			<input />
			{user.firstname} <br />
			{user.lastname} <br />
			{user.school} <br />
			{mySchool} <br />
			I'm the second component
		</div>
	)
}