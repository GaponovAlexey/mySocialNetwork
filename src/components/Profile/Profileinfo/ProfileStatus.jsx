import React from 'react';
import s from './Profileinfo.module.css';


class ProfileStatus extends React.Component {
	state = {
		editmode: false
	}

	activateEditMode ( ) {
		this.setState( {
			editmode: true
		})
	}


	render() {
		return (
			<div>
				{ !this.state.editmode &&
					<div>
						<span onDoubleClick={this.activateEditMode.bind(this)}>{ this.props.status }</span>
					</div>
				}
				{ this.state.editmode &&
					<div>
						<input value={ this.props.status } ></input>
					</div>
				}
			</div>
		)
	}
}
export default ProfileStatus;