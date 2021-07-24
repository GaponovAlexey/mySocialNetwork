import React from 'react';

function Mailbox(props) {
	const unreadMessages = ['React', 'neReact', 'Re: React', 'Re:Re: React'];
	return (
		<div>
			<h1>Здравствуйте!</h1>
			{ unreadMessages.length > 0 &&
				<h2>
					У вас { unreadMessages.length } непрочитанных сообщений.
				</h2>
			}
		</div>
	);
}

//const messages = ['React', 'Re: React', 'Re:Re: React'];


	


export default Mailbox;