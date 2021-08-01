import { Button } from '@material-ui/core';
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Zapros = () => {
	const dispatch = useDispatch();
	const count = useSelector(state => state.repos.count)

	//let onCountClick = () => {dispatch(getCount(5))}

	return (
		<div className='app'>
			{/*<button onClick={ () => onCountClick() }>click</button>*/}
			<div>{count}</div>
		</div>

	)
	
}