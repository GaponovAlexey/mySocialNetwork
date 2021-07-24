import React from 'react';

const MyMailBox = props => {
	const count = 0;
	return (
		<div>
			{ count && <h1>Количество сообщений: { count }</h1> }
		</div>
	);
}

export default MyMailBox;