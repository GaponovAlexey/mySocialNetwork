import React from 'react';


let Map = props => {
	const numbers = [1, 2, 3, 4, 5];
	//const doubled = numbers.map((number) => number * 2);
	
	let doubled = numbers.map(e => <li key={ e.toString() }>{e}</li>)
	console.log(doubled);
	return(
		<div>{ doubled }</div>
	)
}

export default Map;