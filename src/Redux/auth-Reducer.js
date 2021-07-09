import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
	email: null,
	login: null,
	isAuth: false,
	id: null,
	isFetching: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

export const setAuthUserData = (id, login, email, isAuth) => ({
	type: SET_USER_DATA, payload:
		{ id, login, email, isAuth }
});


export const getAuthUserData = () => (dispatch) => {
	authAPI.me()
		.then(response => {
			if (response.data.resultCode === 0) {
				let { id, login, email } = response.data.data
				dispatch(setAuthUserData(id, login, email, true))
			}
		})
}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
				dispatch(stopSubmit("login", {
					_error: message
				}));
			}
		})
}
export const logout = () => (dispatch) => {
	authAPI.logout()
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setAuthUserData(null, null, null, false))
			}
		})
}

export default authReducer;