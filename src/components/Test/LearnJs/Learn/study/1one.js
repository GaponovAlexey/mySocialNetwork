function formatDate(date) {
	return date.toLocaleDateString();
}


//function Comment(props) {
//	return (
//		<div className="Comment">
//			<div className="UserInfo">
//				<img
//					className="Avatar"
//					src={ 'https://placekitten.com/g/64/64' }
//					alt={ 'Hello Kitty' }
//				/>
//				<div className="UserInfo-name">
//					{ 'Hello Kitty' }
//				</div>
//			</div>
//			<div className="Comment-text">{ 'I hope you enjoy learning React!' }</div>
//			<div className="Comment-date">
//				{ formatDate( new Date()) }
//			</div>
//		</div>
//	);
//}

function Avatar(props) {
	return (
		<img
			className="Avatar"
			src={ 'https://placekitten.com/g/64/64' }
			alt={ 'Hello Kitty' }
		/>
	);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={ 'Hello Kitty' } />
			<div className="UserInfo-name">{ 'Hello Kitty' }</div>
		</div>
	);
}

function One(props) {
	return (
		<div className="Comment">
			<UserInfo user={ 'Hello Kitty' } />
			<div className="Comment-text">{ 'I hope you enjoy learning React!' }</div>
			<div className="Comment-date">
				{ formatDate(new Date()) }
			</div>
		</div>
	);
}



export default One;