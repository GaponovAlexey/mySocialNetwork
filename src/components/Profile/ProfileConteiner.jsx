import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Redux/profile-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


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

//compose (
//  withAuthRedirect,
//  withRouter(AuthRedirectComponent);
//) (
//  WithUrlDataContainerComponent
//)
//let AuthRedirectComponent = withAuthRedirect (PofileContainer);

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUserProfile })
) (
  PofileContainer
)