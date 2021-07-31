import React from 'react';



let Form = props => {
	let userRole = props.userRole;
	if (userRole === 0 || userRole === '' || userRole === 'da4a') {
		return console.error('Error');
	} else {
		return console.log(userRole);
	};

}


let Study = () => {
	const userRole = 'goest';
	return (
		<>
			<div>
				<form>
					{/*<Form userRole={ userRole } />*/}
				</form>
			</div>
		</>
	)
}


export default Study;