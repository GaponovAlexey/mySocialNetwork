import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
	todos: ['create movie', 'redacted movie', 'tell about tollkid']
}

export const increment = createAction('INCRTMENT')
export const decrement = createAction('DECREMENT')

export default createReducer( initialState, {
	[increment]: function (state) {
		state.count = state.count + 1
	},
	[decrement]: function(state) {
		state.count = state.count - 1
	},
})


