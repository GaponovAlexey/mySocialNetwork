import React from 'react';

const LoginForm = (props) => {
	return (
		<form>
			<div>
				<input placeholder={ "Login" } />
			</div>
			<div>
				<input placeholder={ "Login" } />
			</div>
			<div>
				<input type={ "checkbox" } /> remember me

			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const login = (props) => {
	return <div>
		<h1>Login</h1>
		<LoginForm />
	</div>
}

export default login;