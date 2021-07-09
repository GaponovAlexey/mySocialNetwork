import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { maxLenghtCreator, required } from '../utils/Validators/validators';
import { login } from '../../Redux/auth-Reducer'
import style from './../../components/common/FormsControl/FormsControl.module.css'


let max = maxLenghtCreator(50);


const LoginForm = (props) => {
	return (
		<form onSubmit={ props.handleSubmit } >
			<div>
				<Field placeholder={ "Email" } name={ 'email' } component={ Input }
					validate={ [required, max] } />
			</div>
			<div>
				<Field placeholder={ "Password" } type={ 'password' } name={ 'password' } component={ Input } validate={ [required, max] } />
			</div>
			<div>
				<Field type={ "checkbox" } name={ 'rememberMe' } component={ Input } /> remember me
			</div>
			{ props.error && <div className={ style.formSummaryError }>
			{props.error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);



const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"}/>
	}


	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={ onSubmit } />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login }) (Login);