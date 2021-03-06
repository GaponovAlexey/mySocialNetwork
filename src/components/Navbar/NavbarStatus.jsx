import React from 'react';

class NavbarStatus extends React.Component {
	state = {
		editmode: false,
		state: this.props.status,
	}

	activateEditMode = () => {
		this.setState({ editmode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editmode: false, })
		this.props.updateStatus(this.state.status)}
	
		onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}
	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}
	render() {
		return (
			<div>
				{ !this.state.editmode &&
					<div>
						<span onDoubleClick={ this.activateEditMode } >
							{ this.props.status || 'No status' }
						</span>
					</div>
				}
				{ this.state.editmode &&
					<div >
						<input
							autoFocus={ true }
							onBlur={ this.deactivateEditMode }
							value={ this.state.status }
							onChange={ this.onStatusChange }
						></input>
					</div>
				}
			</div >
		)
	}
}
export default NavbarStatus;