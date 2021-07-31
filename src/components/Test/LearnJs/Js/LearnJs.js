import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, increment } from '../../../../Redux/jsreducer';
import { decrement, removeLastTodo } from './../../../../Redux/jsreducer';




let Study = () => {

	const count = useSelector(state => state.main.count)
	const todos = useSelector(state => state.main.todos)
	const dispatch = useDispatch()

	return (
		<>
			<div>
				<h1>Counting{ count }</h1>
				<button onClick={ () => dispatch(increment()) } >increment</button>
				<button onClick={ () => dispatch(decrement()) } >decrement</button>
				<button onClick={ () => dispatch(removeLastTodo()) } >removeLastTodo</button>
				<button onClick={ () => dispatch(addTodo()) } >addTodo</button>
				{/*<input value={payload} />*/}
				<ul>
					{ todos.map((to) =>
						<li>{ to }</li>
					) }
				</ul>
			</div>
		</>
	);
}




export default Study;