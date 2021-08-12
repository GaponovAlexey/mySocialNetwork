import React from 'react';
import { useContext } from 'react';
import stules from './Users.module.css';
import userPhoto from '../../asets/images/ilon.jpg';
import { NavLink } from 'react-router-dom';


let User = ({ Clock, user, followingInProgress, unfollow, follow }) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={ '/profile/' + user.id }>
						<img alt='yes' src={ user.photos.small != null ? user.photos.small : userPhoto } className={ stules.userPhoto } />
					</NavLink>
				</div>
				<div>
					{ user.followed
						? <button disabled={ followingInProgress.some(id => id === user.id) }
							onClick={ () => { unfollow(user.id) } }>Unfollow</button>
						: <button disable={ followingInProgress.some(id => id === user.id) }
							onClick={ () => { follow(user.id) } }>follow</button>
					}</div>
			</span>
			<span>
				<span>
					<div>{ user.name }</div>f
					<div>{ user.uniqueUrlName }</div>
					<div>{ user.status }</div>
				</span>
				<span>
					<div>{ user.id }</div>
				</span>
			</span>
		</div>
	)
}

export default User;