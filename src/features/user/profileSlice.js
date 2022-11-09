import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	firstname: "Felix",
	lastname: "",
	profilePictureLink: "https://images.unsplash.com/photo-1667819576336-e78d61b5f2e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state = {...state, ...action.payload}
		},
	},
})

export const {setProfile} = profileSlice.actions

export default profileSlice.reducer