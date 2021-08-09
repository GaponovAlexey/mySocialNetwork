import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from 'redux-form';
import { addTodo, decrement, increment, removeLastTodo } from './toolkitSlice';
import { useState } from 'react';




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
	const [name, setName] = useState('Mary')
	//const name = useSelector(state => state.sidebar.friend)
	function handleChange(e) {
		setName(e.target.value)
	}
	return (
		<>
					<section>
					<h1>Counting{ count }</h1>
					</section>
					<button onClick={ () => dispatch(increment()) } >increment</button>
				<button onClick={ () => dispatch(decrement()) } >decrement</button>
				<button onClick={ () => dispatch(removeLastTodo()) } >removeLastTodo</button>
				<button onClick={ () => dispatch(addTodo()) } >addTodo</button>
				<button onClick={ () => dispatch(addAsyncTodo()) } >Create Func</button>
				<div>
					<input value={ name } onChange={ handleChange } />
					<button onClick={ () => dispatch(handleChange()) } > push</button>
				</div>
				<div>

				</div>
				<ul>
					{ todos.map((to) =>
						<li>{ to }</li>
						) }
				</ul>
		</>
	);
}




export default Study;