import * as axios from "axios";

const instanse = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: { "API-KEY": "047f9a87-836b-4d5f-9fb8-73c0fc76332b" }
})

export const UserAPI = {

	getUsers(currentPage, pageSize) {
		return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	follow(userId) {
		return instanse.post(`follow/${userId}`,)
	},
	unfollow(userId) {
		return instanse.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.log('Obsolete method. Please profileAPI object')
		return ProfileAPI.getProfile(userId)
	},
}

export const ProfileAPI = {
	getProfile(userId) {
		return instanse.get('profile/' + userId)
	},
	getStatus(userId) {
		return instanse.get('profile/status/' + userId)
	},
	updateStatus(status) {
		return instanse.put('profile/status/', { status })
	},
}

export const authAPI = {
	me() {
		return instanse.get(`auth/me`)
	},
}