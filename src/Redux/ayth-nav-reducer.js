const SET_USER_DATA_NAVBAR = 'SET_USER_DATA_NAVBAR';


let initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
	isAuth: false,
};


const authNAVReducer = (state = initialState, action) => {
	debugger;
	switch (action.type) {
		case SET_USER_DATA_NAVBAR:
			return {
				...state,
				...action.data,
				isAuth: true,

			}
		default:
			return state;
	}
}

export const setAuthUserDataNavbar = (id, email, login) => ({ type: SET_USER_DATA_NAVBAR, data: { id, email, login } });


export default authNAVReducer;