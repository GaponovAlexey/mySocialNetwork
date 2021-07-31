import React from 'react';

//class Off_On extends React.Component {
//	constructor(props) {
//		super(props);
//		this.state = { isToggleOn: true };
//		this.handleClick = this.handleClick.bind(this);
//	}

//	handleClick() {
//		this.setState(prevState => ({
//			isToggleOn: !prevState.isToggleOn
//		}));
//	}


//	render() {
//		return (
//			<button onClick={ this.handleClick }>{ this.state.isToggleOn ? 'on' : 'off' }</button>
//		)
//	}

//}




//class Off_On extends React.Component {
//	constructor(props) {
//		super(props);
//		this.state = { isonoff: true };
//		this.handleClick = this.handleClick.bind(this);
//	}

//	handleClick() {
//		this.setState(prevState => ({
//			isonoff: !prevState.isonoff
//		}))
//	}

//	render() {
//		return (
//			<button onClick={ this.handleClick }>{ this.state.isonoff ? 'on' : 'off' }</button>
//		)
//	}
//}



class Off_On extends React.Component {
	constructor(props) {
		super(props);
		this.state = { buttonoffOn: true };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prev => ({
			buttonoffOn: !prev.buttonoffOn
		}))
	}

	render() {
		return (
			<button onClick={ this.handleClick }>{this.state.buttonoffOn ? 'on' : 'off'}</button>
		)
	}
}



export default Off_On;