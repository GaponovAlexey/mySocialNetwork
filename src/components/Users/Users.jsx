import React from 'react';
import stules from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../asets/images/ilon.jpg';

class Users extends React.Component {
		componentDidMount () {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => {
			this.props.setUsers(response.data.items)
		})
	}

	render() {
		return <div>
			<div>
				<span>1</span>
				<span className={stules.SeletedPage}>2</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
			</div>
			{
				this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={stules.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>f
							<div>{u.uniqueUrlName}</div>
						</span>
						<span>
							<div>{u.id}</div>
							<div>{u.id}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	}
}



export default Users;