
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	count: 0
}

const countRedus = createSlice({
	name: 'da4a',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		}
	}
})

export const { increment, decrement } = countRedus.actions

export default countRedus.reducer
