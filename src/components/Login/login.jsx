import React from 'react';
import { Form, Field } from 'react-final-form'

var onSubmit = () => {
	
}

const LoginForm = (props) => (
	<Form onSubmit={ onSubmit }
		render={ ({ handleSubmit, form, submitting, pristine, values }) => ( 
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
					<button type={ 'submit' }>Login</button>
				</div>
			</form>
		)
		}
	/>
)



const Login = (props) => {
	return <div>
		<h1>Login</h1>
		<LoginForm />
	</div>
}

export default Login;