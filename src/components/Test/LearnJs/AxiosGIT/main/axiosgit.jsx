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


export const Main = () => {
	let dispatch = useDispatch()
	let repos = useSelector(state => state.repos.items)
	let isFetching = useSelector(state => state.repos.isFetching)
const [searchValue, setSearchValue] = useState('')


	useEffect(() => {
		dispatch(getRepos())
	}, [])

	let searchHandler = () => {
		dispatch(getRepos(searchValue))
	}

	return (
		<div>
			<div>
				<TextField value={ searchValue } onChange={ (e) => setSearchValue(e.target.value)} placeholder='search' />
				<StyledComponents onClick={() => searchHandler()} >Search</StyledComponents>
			</div><br />
			{
				isFetching === false ? 
				repos.map(repo => <Repo repo={ repo } />) : 
				<div>
						<LinearIndeterminate />
				</div>
			}


		</div>
	)

}