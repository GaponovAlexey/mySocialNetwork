import React from 'react'
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, toggleIsfollowingProgress, getUsers } from '../../Redux/users-reducer';
import Users from './users';
import Preolader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom';


class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize );
    
  }
  
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() {
    if (!this.props.isAuth) return <Redirect to='login' />
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
        followingInProgress={ this.props.followingInProgress}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  followSuccess, unfollowSuccess,
  toggleIsfollowingProgress,
  getUsers,
})(UsersConteiner);


