import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './users';
import Preolader from '../common/Preloader/Preloader';
import { UserAPI } from '../../api/api.js';


class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    UserAPI.getUsers2(pageNumber, this.props.pageSize)
      .then(data=> {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
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
        follow={ this.props.follow }
        unfollow={ this.props.unfollow }
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
  }
}


export default connect(mapStateToProps, {
  follow, unfollow, setUsers,
  setCurrentPage, setTotalUsersCount,
  toggleIsFetching,
})(UsersConteiner);


