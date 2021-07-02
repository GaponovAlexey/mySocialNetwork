import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from '../../Redux/profile-reducer';
import { compose } from 'redux';


class PofileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 17756;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }
  render() {
    return (
      <Profile { ...this.props }
        profile={ this.props.profile }
        status={ this.props.status }
        updateStatus={ this.props.updateStatus }
      />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(
  PofileContainer
)