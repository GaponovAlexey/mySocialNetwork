import React from 'react';
//etap one
//function UserGreeting(props) {
//	return <h1>С возвращением!</h1>;
//}

//function GuestGreeting(props) {
//	return <h1>Войдите, пожалуйста.</h1>;
//}
//etap two
//function LoginButton(props) {
//	return (
//		<button onClick={ props.onClick }>
//			Войти
//		</button>
//	);
//}
//function LogoutButton(props) {
//	return (
//		<button onClick={ props.onClick }>
//			Выйти
//		</button>
//	);
//}

//function Greeting(props) {
//	const isLoggedIn = props.isLoggedIn;
//	if (isLoggedIn) {
//		return <UserGreeting />;
//	}
//	return <GuestGreeting />;
//}



//etap three//
//class LoginControl extends React.Component {
//	constructor(props) {
//		super(props);
//		this.handleLoginClick = this.handleLoginClick.bind(this);
//		this.handleLogoutClick = this.handleLogoutClick.bind(this);
//		this.state = { isLoggedIn: false };
//	}

//	handleLoginClick() {
//		this.setState({ isLoggedIn: true });
//	}

//	handleLogoutClick() {
//		this.setState({ isLoggedIn: false });
//	}

//	render() {
//		const isLoggedIn = this.state.isLoggedIn;
//		let button;
//		if (isLoggedIn) {
//			button = <LogoutButton onClick={ this.handleLogoutClick } />;
//		} else {
//			button = <LoginButton onClick={ this.handleLoginClick } />;
//		}

//		return (
//			<div>
//				<Greeting isLoggedIn={ isLoggedIn } />
//				{ button }
//			</div>
//		);
//	}
//}
//end 


//one
//let User = porps => { return <h1> hello user</h1> }
//let Guest = porps => { return <h1> hello Guest</h1> }
//const Greeting = props => {
//	const isLoggedIn = props.isLoggedIn;
//	if (isLoggedIn) { return <User /> }
//	return <Guest />
//}

// two
//let LoginButton = porps => {
//	return (<button onClick={ porps.onClick }>login</button>)
//}
//let LogoutButton = porps => {
//	return (<button onClick={ porps.onClick }>logout</button>)
//}
//three
//class LoginControl extends React.Component {
//	constructor(props) {
//		super(props);
//		this.isloginon = this.isloginon.bind(this)
//		this.islogoutoff = this.islogoutoff.bind(this)
//		this.state = ({ isLoggedIn: false })
//	}

//	isloginon() { this.setState({ isLoggedIn: true }) }
//	islogoutoff() { this.setState({ isLoggedIn: false }) }

//	render() {
//		let isLoggedIn = this.state.isLoggedIn;
//		let button;
//		if (isLoggedIn) {
//			button = <LogoutButton onClick={ this.islogoutoff } />;
//		} else {
//			button = <LoginButton onClick={ this.isloginon } />;
//		}
//		return (
//			<div>
//				<Greeting isLoggedIn={ isLoggedIn } />
//				{ button }
//			</div>
//		)
//	}

//}

const User = props => {
	return <h1>hello User</h1>
}
const Guest = props => {
	return <h1>hello Guest</h1>
}

const UserStatus = props => {
	let islog = props.islog;
	if (islog) { return <User /> }
	return <Guest />
}

const LoginButton = props => {
	return <button onClick={ props.onClick }>Login</button>
}
const LogoutButton = props => {
	return <button onClick={ props.onClick }>logout</button>
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.Islogins = this.Islogins.bind(this)
		this.Islogout = this.Islogout.bind(this)
		this.state = { islog: false };
	}

	Islogins() {
		this.setState({islog: true})
	}

	Islogout() {
		this.setState({islog: false})
	}

	render() {
		let islog = this.state.islog;
		let button;
		if (islog) {
			button = <LogoutButton onClick={ this.Islogout } />
		} else {
			button = <LoginButton onClick={ this.Islogins } />
		}

		return (
			<div>
				<UserStatus islog={ islog } />
				{ button }
			</div>
		)
	}

}









export default LoginControl;