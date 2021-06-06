import React from 'react';
import Users from './Users';
import { conncet } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}

export default conncet(mapStateToProps, MapDispatchToProps)(Users);