import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';



class PofileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 17756;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile { ...this.props } profile={ this.props.profile} />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(PofileContainer);

export default connect(mapStateToProps, { 
  setUserProfile,
})(WithUrlDataContainerComponent);