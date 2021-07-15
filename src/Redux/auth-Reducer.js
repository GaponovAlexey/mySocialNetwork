import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'mysocial/Network/Set_user_data';


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


export const getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.me()

	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data
		dispatch(setAuthUserData(id, login, email, true))
	}
};


export const login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)

	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
		dispatch(stopSubmit("login", {
			_error: message
		}));
	}
}

export const logout = () => async (dispatch) => {
	let response = authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}


export default authReducer;