import React from 'react'
import {useParams} from 'react-router'

export const Profile = () => {
	const {username} = useParams();
	const users = [
		{username: "licode", firstname: "Felix", lastname: "Adegboyega"},
		{username: "love", firstname: "Love", lastname: "Adeniran"},
		{username: "blacky", firstname: "Goodness", lastname: "Blacky"},
		{username: "peace", firstname: "Peace", lastname: "Afolabi"},
	];
	const user = users.find(each => each.username === username);
	return (
		<div>This is {user.firstname} {user.lastname} profile</div>
	)
}
