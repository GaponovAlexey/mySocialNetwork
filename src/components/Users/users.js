import React from 'react';
import Paginator from './Paginator';
import User from './user';
import BasicPagination from './mUIPaginator';


let Users = (props) => {
	return <div>
		<div>
			<BasicPagination 
				totalUsersCount={ props.totalUsersCount }
				pageSize={ props.pageSize }
				currentPage={ props.currentPage }
				onPageChanged={ props.onPageChanged } />
				
			<Paginator
				totalUsersCount={ props.totalUsersCount }
				pageSize={ props.pageSize }
				currentPage={ props.currentPage }
				onPageChanged={ props.onPageChanged } />
		</div>
		<div>
			{
				props.users.map(u =>
					<User
						user={ u }
						key={ u.id }
						followingInProgress={ props.followingInProgress }
						unfollow={ props.unfollow }
						follow={ props.follow }
					/>
				)
			}
		</div>
	</div>
}

export default Users;