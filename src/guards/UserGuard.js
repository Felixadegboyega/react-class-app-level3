import React from 'react'
import {Navigate} from 'react-router';
import UserMainComponent from '../pages/UserMainComponent';

export const UserGuard = () => {
	// for logout
	// localStorage.removeItem("loggedIn")
	const loggedIn = localStorage.getItem("loggedIn");
	if (JSON.parse(loggedIn)) {
		return <UserMainComponent />
	} else {
		return <Navigate to="/login" />
	}

}
