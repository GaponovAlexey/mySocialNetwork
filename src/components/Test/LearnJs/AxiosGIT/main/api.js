import axios from "axios";
import { setIsFetching, setRepos } from "../../../../../Redux/axiosGit";

export const getRepos = (searchQuery = "stars:%3E1", curentPage, perPage) => {
	if (searchQuery === '' || searchQuery === null) {
		searchQuery = "stars:%3E1"
	}


	return async (dispatch) => {
		dispatch(setIsFetching(true))
		const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${curentPage}`)
		dispatch(setRepos(response.data))
	}
}