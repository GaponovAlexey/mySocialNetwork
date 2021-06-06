const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Alexey', status: "i'm a boss", location: { city: 'USA', country: 'Ukraine' } },
        { id: 2, followed: false, fullName: 'Viktor', status: "i'm a studen", location: { city: 'Russia', country: 'Korea' } },
        { id: 3, followed: false, fullName: 'Sergey', status: "i'm a politic", location: { city: 'Ukraine', country: 'USA' } },
        { id: 4, followed: true, fullName: 'Masha', status: "i'm a samurai", location: { city: 'UK', country: 'Unete Kindom' } },
        { id: 5, followed: false, fullName: 'Inokentiy', status: "i'm a cherry", location: { city: 'Moldowa', country: 'Russia' } },
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(callbackfn: u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(callbackfn: u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],

            }
        };

        default:
            return state;
    }
}

export const followAC = (userid) => ({ type: FOLLOW, userid });
export const unfollowAC = (userid) => ({ type: UNFOLLOW, userid });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;