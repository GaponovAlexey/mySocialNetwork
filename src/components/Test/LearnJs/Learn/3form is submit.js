import React from 'react';

let Three = () => {

	function handleSubmit(e) {
		e.preventDefault();
		console.log('form is submited');
		alert('form is submited');
	}

	return (<>
		<form onSubmit={ handleSubmit } >
			<button type='submit' > you</button>
		</form>

	</>)
}

//function Three() {
//	function handleSubmit(e) {
//		e.preventDefault();
//		alert('form is submited');
//	}

//	return (
//		<form onSubmit={ handleSubmit }>
//			<button type="submit">Отправить</button>
//		</form>
//	);
//}

export default Three;