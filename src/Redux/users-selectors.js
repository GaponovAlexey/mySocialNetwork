import { createSelector } from 'reselect';

// 1
const getUsersSelector = (state) => {
	return state.usersPage.users;
}

export const getUserse = createSelector(getUsersSelector, (users) => {
	return users;
})


export const getpageSize = (state) => {
	return state.usersPage.pageSize;
}
export const gettotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
}
export const getcurrentPage = (state) => {
	return state.usersPage.currentPage;
}
export const getisFetching = (state) => {
	return state.usersPage.isFetching;
}
export const getfollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}