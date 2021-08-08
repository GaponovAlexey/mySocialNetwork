import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../Redux/countReduxThink';




const CounterDiv = () => {
	const count = useSelector(state => state.counter.count)
	const dispatch = useDispatch()
	return (
		<div>
			<button
				onClick={ () => dispatch(increment()) }
			>+</button>
			{ count }
			<button
				onClick={ () => dispatch(decrement()) }
			>-</button>
		</div>
	)
}


export default CounterDiv;