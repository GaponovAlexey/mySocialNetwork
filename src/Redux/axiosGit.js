//import { createSlice } from "@reduxjs/toolkit";

//const counterSlice = createSlice({
//	name: 'countses',
//	initialState: {
//		items: [],
//		isFetching: true,
//	},





//	reducers: {
//		setCount(state, action) {
//			state.count = action.payload
//		},
//		setRepos(state, action) {
//			state.items = action.payload.items 
//		},
//	}
//})

//export default counterSlice.reducer
//export const { setCount, setRepos } = counterSlice.actions


const SET_REPOS = 'SET_REPOS'

const defaulfState = {
	items: [],
	isFetching: true,
}

export default function reposReducer(state = defaulfState, action) {
	switch (action.type) {
		case SET_REPOS:
			return {
				...state,
				items: action.payload.items
			}
			default:
				return state
	}
}

export const setRepos = (repos) => ({ type: SET_REPOS, payload:repos})
