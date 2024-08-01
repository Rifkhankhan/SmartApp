import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		storedUsers: {},
		usersIsLoading: false
	},
	reducers: {
		setStoredUsers: (state, action) => {
			const newUsers = action.payload.newUsers
			const existingUsers = state.storedUsers

			const usersArray = Object.values(newUsers)
			for (let i = 0; i < usersArray.length; i++) {
				const userData = usersArray[i]
				existingUsers[userData.userId] = userData
			}

			state.storedUsers = existingUsers
		},
		setUsersLoading: state => {
			state.isLoading = !state.isLoading
		}
	}
})
export const { setStoredUsers, setUsersLoading } = userSlice.actions
export default userSlice.reducer
