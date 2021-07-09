import React from 'react'
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, toggleIsfollowingProgress, getUsers } from '../../Redux/users-reducer';
import Users from './users';
import Preolader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getcurrentPage, getfollowingInProgress, getpageSize, getUserse, getisFetching, gettotalUsersCount } from '../../Redux/users-selectors';


class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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
  connect(mapStateToProps, { followSuccess, unfollowSuccess, toggleIsfollowingProgress, getUsers }),
    //withAuthRedirect,
  ) (UsersConteiner);