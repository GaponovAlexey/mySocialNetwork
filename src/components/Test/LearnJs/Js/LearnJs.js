import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from 'redux-form';
import { addTodo, decrement, increment, removeLastTodo } from './toolkitSlice';




const addAsyncTodo = () => {
	return addTodo('ASYNC TODO');
}


const addForm = () => {
	return
}

let Study = () => {

	const count = useSelector(state => state.toolkit.count)
	const todos = useSelector(state => state.toolkit.todos)
	const dispatch = useDispatch()



	return (
		<>
			<div>
				<h1>Counting{ count }</h1>
				<button onClick={ () => dispatch(increment()) } >increment</button>
				<button onClick={ () => dispatch(decrement()) } >decrement</button>
				<button onClick={ () => dispatch(removeLastTodo()) } >removeLastTodo</button>
				<button onClick={ () => dispatch(addTodo()) } >addTodo</button>
				<button onClick={ () => dispatch(addAsyncTodo()) } >Create Func</button>
				<form>
					<input />
					<button onClick={ () => dispatch(addForm()) } > push</button>
				</form>
				{/*<input value={payload} />*/ }
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