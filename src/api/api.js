import * as axios from "axios";

const instanse = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: { "API-KEY": "047f9a87-836b-4d5f-9fb8-73c0fc76332b" }
})


export const UserAPI = {

	getUsers: (currentPage, pageSize) => {
		return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	getUsers2: (currentPage, pageSize) => {
		return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	
}