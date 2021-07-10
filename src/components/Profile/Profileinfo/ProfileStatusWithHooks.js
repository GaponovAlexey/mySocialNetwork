import React, { useState } from 'react';
import s from './Profileinfo.module.css';


const ProfileStatusWithHooks = (props) => {

	let [editmode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}
	
	return (
		<div>
			{ !editmode &&
				<div>
					<span onDoubleClick={ activateEditMode } >
						{ props.status || 'No status' }</span>
				</div>
			}
			{ editmode &&
				<div >
					<input onBlur={ deactivateEditMode }
						autoFocus={ true }
						onChange={ onStatusChange }
						value={status}
					/>
				</div>
			}
		</div >
	)
}

export default ProfileStatusWithHooks;


