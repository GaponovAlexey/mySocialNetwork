import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataNavbar } from '../../Redux/ayth-nav-reducer';
import Navbar from './Navbar';



class NavbarConteiner extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
		.then(response => {
			if (response.data.resultCode === 0) {
				let {id, email, login} = response.data.data
				this.props.setAuthUserDataNavbar(id, email, login)
			}		
		})
	}
	render() {
		return <Navbar {...this.props}/>
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.authTwo.isAuth,
	login: state.authTwo.login
})

export default connect(mapStateToProps, { setAuthUserDataNavbar}) (NavbarConteiner);