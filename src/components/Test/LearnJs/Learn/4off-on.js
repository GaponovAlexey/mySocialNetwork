import React from 'react';

class Off_On extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}


	render() {
		return (
			<button onClick={ this.handleClick }>{ this.state.isToggleOn ? 'on' : 'off' }</button>
		)
	}

}


export default Off_On;