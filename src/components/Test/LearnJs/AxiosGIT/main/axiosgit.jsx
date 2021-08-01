import React, { useEffect, useState } from "react";
import s from './main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Repo from './Repo';
import { getRepos } from './api';
import { Button, Input, TextField } from "@material-ui/core";
import StyledComponents from "../../../../utils/Validators/myButton";
import CircularStatic from "../../../../utils/Validators/CirculeProgres";
import LinearIndeterminate from "../../../../utils/Validators/CirculeProgresTwo";
import { setCurentPage } from "../../../../../Redux/axiosGit";


export const Main = () => {
	let dispatch = useDispatch()
	const [searchValue, setSearchValue] = useState('')

	let repos = useSelector(state => state.repos.items)
	let isFetching = useSelector(state => state.repos.isFetching)
	let curntPage = useSelector(state => state.repos.curntPage)
	let totalCount = useSelector(state => state.repos.totalCount)
	let perPage = useSelector(state => state.repos.perPage)

	const pages = [1, 2, 3, 4, 5, 6, 7, 8];





	useEffect(() => {
		dispatch(getRepos(searchValue, curntPage, perPage ))
	}, [curntPage])

	let searchHandler = () => {
		dispatch(setCurentPage(1))
		dispatch(getRepos(searchValue, curntPage, perPage))
	}

	return (
		<div>
			<div>
				<TextField value={ searchValue }
					onChange={ (e) => setSearchValue(e.target.value) }
					placeholder='search' />
				<StyledComponents onClick={ () => searchHandler() } >Search</StyledComponents>
			</div><br />
			{
				isFetching === false ?
					repos.map(repo => <Repo repo={ repo } />) :
					<div>
						<LinearIndeterminate />
					</div>
			}
			<div>
				{ pages.map((page, index) => <span
				id={curntPage === page ? "curentPage" : "page" }
				onClick={()=> dispatch(setCurentPage(page))}
				key={ index }>{ page }</span> )}
			</div>


		</div>
	)

}