
const MAPKEY = 'MAPKEY/VERSTKA';


let initialState = {
	count: 0
	
};


const OneR = (state = initialState, action) => {
	switch (action.type) {
		case MAPKEY:

			return { ...state, count: action.count };

		default:
			return state;
	};
};


export const OneRAc = () => ({ type: MAPKEY });

//Thunks

export default OneR;