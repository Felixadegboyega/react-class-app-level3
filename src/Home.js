import react, {useState} from 'react';

export const MyComponent = () => {
	const myName = 'Felix Adegboyega'
	const department = "Software Engineering"
	const school = "Soft Quest Incoporated"

	// let comment = "";
	const [comment, setComment] = useState("");
	let score = 100;

	const getComment = () => {
		if (score > 70) {
			setComment("Excellent");
		} else if (score > 60) {
			setComment("Very Good");
			// comment = "Very Good";
		} else if (score > 55) {
			// comment = "Good";
		} else if (score > 50) {
			// comment = "Fair";
		} else {
			// comment = "Fail"
		}
	}

	return (
		<div>
			{comment}
			My name is {myName} from the department of {department} at {school} <br />
			<input />
			I'm the parent component
			<SecondComponent />
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