import React from 'react';
import s from './Profileinfo.module.css';


class ProfileStatus extends React.Component {
	state = {
		editmode: false,
		state: this.props.status,
	}

	activateEditMode = () => {
		this.setState({
			editmode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editmode: false
		})
		this.props.updateStatus(this.state.status);
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	render() {
		return (
			<div>
				{ !this.state.editmode &&
					<div>
						<span onDoubleClick={ this.activateEditMode } > 
							{this.props.status || 'No status' } 
								</span>
					</div>
				}
				{ this.state.editmode &&
					<div >
						<input
							autoFocus={ true }
							onBlur={ this.deactivateEditMode }
							value={ this.state.status }
							onChange={this.onStatusChange}
							></input>
					</div>
				}
			</div >
		)
	}
}
export default ProfileStatus;


