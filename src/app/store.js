import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import profileReducer from '../features/user/profileSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		profile: profileReducer
	},
})