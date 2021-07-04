import React from 'react';
//import { Form, Field } from 'react-final-form'
import { Field, reduxForm } from 'redux-form';





const LoginForm = (props) => {
	return (
		<form onSubmit={ props.handleSubmit } >
			<div>
				<Field placeholder={ "Login" } name={ 'logins' } component={ "input" } />
			</div>
			<div>
				<Field placeholder={ "Login" } name={ 'password' } component={ 'input' } />
			</div>
			<div>
				<Field type={ "checkbox" } name={ 'Rremember me' } component={ 'input' } /> remember me
			</div>
			<div>
				<button type={ 'submit' } name={ 'login' } component={ 'button' }>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}
	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={ onSubmit } />
	</div>
}

export default Login;