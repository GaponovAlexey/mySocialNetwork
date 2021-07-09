<<<<<<< HEAD
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
=======
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
>>>>>>> 5d8ed189fc67b2c3c6ca9a56fc16377df793047f


let initialState = {
	initialized: false,
<<<<<<< HEAD

};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,

=======
	
};

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
>>>>>>> 5d8ed189fc67b2c3c6ca9a56fc16377df793047f
			}
		default:
			return state;
	}
}

<<<<<<< HEAD
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
	let dispatchResult = dispatch(getAuthUserData());
	debugger;

	dispatch(initializedSuccess())




}



export default appReducer;
=======
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
		});
		return 'it-inkubator'
}

export const login = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthUserData())
			} else {
				let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
				dispatch(stopSubmit("login", {
					_error: message }));
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

export default AppReducer;
>>>>>>> 5d8ed189fc67b2c3c6ca9a56fc16377df793047f
