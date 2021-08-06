import { createSlice } from "@reduxjs/toolkit";

const cliReduser = createSlice({
	name: 'countses',
	initialState: {
		id: 0,
		client_id: 0,

	},

	reducers: {
		setID(state, action) {
			state.client_id = action.payload
		}
	}
})

export default cliReduser.reducer
export const { setID } = cliReduser.actions
