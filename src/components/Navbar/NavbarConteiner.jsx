import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getAuthUserData } from '../../Redux/auth-Reducer';
import { updateStatus } from '../../Redux/profile-reducer';
import Navbar from './Navbar';



class NavbarConteiner extends React.Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}


	render() {
		return (
			<>
				<Navbar
					{ ...this.props }
					profile={ this.props.profile }
					status={ this.props.status }
					updateStatus={ this.props.updateStatus } />
			</>
		)
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	profile: state.profilePage.profile,
	status: state.profilePage.status,
})


export default compose(
	//withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getAuthUserData, updateStatus})
)(
	NavbarConteiner
)