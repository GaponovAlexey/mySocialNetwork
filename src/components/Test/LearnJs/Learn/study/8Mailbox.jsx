import React from "react";

function Mailbox(props) {
	const isLoggedIn = true;
	return (
		<div>
			Пользователь <b>{ isLoggedIn ? 'сейчас' : 'не' }</b> на сайте.
		</div>
	);
}

export default Mailbox;