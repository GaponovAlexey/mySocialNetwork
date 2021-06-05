const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    posts: [
        { id: 1, followed: false, fullName: 'Alexey', status: "i'm a boss", location: { city: 'USA', country: 'Ukraine' } },
        { id: 2, followed: false, fullName: 'Viktor', status: "i'm a studen", location: { city: 'Russia', country: 'Korea' } },
        { id: 3, followed: true, fullName: 'Sergey', status: "i'm a politic", location: { city: 'Ukraine', country: 'USA' } },
        { id: 4, followed: true, fullName: 'Masha', status: "i'm a samurai", location: { city: 'UK', country: 'Unete Kindom' } },
        { id: 5, followed: false, fullName: 'Inokentiy', status: "i'm a cherry", location: { city: 'Moldowa', country: 'Russia' } },
    ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const followAC = () => ({ type: FOLLOW });
export const unfollowAC = (text) => ({ type: UNFOLLOW, newText: text });

export default usersReducer;