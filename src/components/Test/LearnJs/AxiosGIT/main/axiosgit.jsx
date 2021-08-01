import React, { useEffect } from "react";
import s from './main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Repo from './repos';
import { getRepos } from './api';


export const Main = () => {
	let dispatch = useDispatch()
	let repos = useSelector(state => state.repos.items)

	useEffect(()=> {
		dispatch(getRepos())
	}, [])

	return (
		<div>
			{repos.map(repo => 
				<Repo repo={repo} />
				)}
		</div>
	)

}