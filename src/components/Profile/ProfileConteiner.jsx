import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Redux/profile-reducer';


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
  profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(PofileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);