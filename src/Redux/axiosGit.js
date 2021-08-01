import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: 'countses',
	initialState: {
		items: [],
		isFetching: true,
		curntPage: 1,
		perPage: 10,
		totalCount: 0

	},

	reducers: {
		setRepos(state, action) {
			state.items = action.payload.items
			state.isFetching = false
			state.totalCount = action.payload.totalCount
		},
		setIsFetching(state, action) {
			state.isFetching = action.payload
		},
		setCurentPage(state, action) {
			state.curntPage = action.payload
		},
	}
})

export default counterSlice.reducer
export const { setRepos, setIsFetching, setCurentPage } = counterSlice.actions


//const SET_REPOS = 'SET_REPOS'

//const defaulfState = {
//	items: [],
//	isFetching: true,
//}

//export default function reposReducer(state = defaulfState, action) {
//	switch (action.type) {
//		case SET_REPOS:
//			return {
//				...state,
//				items: action.payload.items
//			}
//			default:
//				return state
//	}
//}

//export const setRepos = (repos) => ({ type: SET_REPOS, payload:repos})
