import React from 'react'
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, toggleIsfollowingProgress, requestUsers } from '../../Redux/users-reducer';
import Users from './users';
import Preolader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getcurrentPage, getUserse, getfollowingInProgress, getpageSize, getisFetching, gettotalUsersCount, } from '../../Redux/users-selectors';


class UsersConteiner extends React.Component {
  componentDidMount() {
    let { currentPage, pageSize, requestUsers } = this.props
    requestUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let { pageSize, requestUsers} = this.props
    requestUsers(pageNumber, pageSize)
  }
  render() {
    return <>
      { this.props.isFetching ? <Preolader /> : null }
      <Users
        totalUsersCount={ this.props.totalUsersCount }
        pageSize={ this.props.pageSize }
        currentPage={ this.props.currentPage }
        onPageChanged={ this.onPageChanged }
        users={ this.props.users }
        follow={ this.props.followSuccess }
        unfollow={ this.props.unfollowSuccess }
        followingInProgress={ this.props.followingInProgress }
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUserse(state),
    pageSize: getpageSize(state),
    totalUsersCount: gettotalUsersCount(state),
    currentPage: getcurrentPage(state),
    isFetching: getisFetching(state),
    followingInProgress: getfollowingInProgress(state),
  }
}


export default compose(
  connect(mapStateToProps, { followSuccess, unfollowSuccess, toggleIsfollowingProgress, requestUsers }),
)(UsersConteiner);