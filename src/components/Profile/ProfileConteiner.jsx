import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class PofileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 17756;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <Profile { ...this.props } profile={ this.props.profile } />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})
let AuthRedirectComponent = withAuthRedirect (PofileContainer);



//let mapStateToPropsForRedirect = (state) => ({
  //isAuth: state.auth.isAuth,
//})
//AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)




let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);