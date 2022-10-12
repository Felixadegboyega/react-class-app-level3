import react, {useState, useEffect} from 'react';
import HandlingInputs from './HandlingInputs';

export const MyComponent = () => {
	const myName = 'Felix Adegboyega'
	const department = "Software Engineering"
	const school = "Soft Quest Incoporated"

	// let comment = "";
	const [welcome, setWelcome] = useState("");
	const [comment, setComment] = useState("");
	let score = 30;

	const getComment = () => {
		if (score > 70) {
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
		getComment()
		setWelcome("You are welcome")
	}, []);

	return (
		<div>
			{welcome} <br />
			{comment} <br />
			My name is {myName} from the department of {department} at {school} <br />
			<input />
			I'm the parent component
			<SecondComponent />
			<HandlingInputs />
		</div>
	)
}

const SecondComponent = () => {
	return (
		<div>
			I'm the second component
		</div>
	)
}