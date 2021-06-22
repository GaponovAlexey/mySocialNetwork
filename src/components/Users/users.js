import React from 'react';
import stules from './Users.module.css';
import userPhoto from '../../asets/images/ilon.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div>
		<div>
			{ pages.map(p => {
				return <span
					className={ props.currentPage === p && stules.SeletedPage }
					onClick={ (e) => { props.onPageChanged(p) } }
				>{ p }</span>
			}) }
		</div>
		{
			props.users.map(u => <div key={ u.id }>
				<span>
					<div>
						<NavLink to={ '/profile/' + u.id }>
							<img src={ u.photos.small != null ? u.photos.small : userPhoto } className={ stules.userPhoto } />
						</NavLink>
					</div>
					<div>
						{ u.followed
							? <button onClick={ () => {
								axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
									withCredentials: true,
									headers: {
										"API-KEY": "047f9a87-836b-4d5f-9fb8-73c0fc76332b"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.unfollow(u.id);
										}
									})
							} }>Unfollow</button>
							: <button onClick={ () => {
								axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
									withCredentials: true,
									headers: {
										"API-KEY": "047f9a87-836b-4d5f-9fb8-73c0fc76332b"
									}
								})
									.then(response => {
										if (response.data.resultCode === 0) {
											props.follow(u.id);
										}
									})
							} }>Follow</button> }
					</div>
				</span>
				<span>
					<span>
						<div>{ u.name }</div>f
						<div>{ u.uniqueUrlName }</div>
					</span>
					<span>
						<div>{ u.id }</div>
						<div>{ u.id }</div>
					</span>
				</span>
			</div>)
		}
		/</div>
}

export default Users;