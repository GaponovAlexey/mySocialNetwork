import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}
	
	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick()
		}, 1000);
	}
	
	tick() {
		this.setState({
			date: new Date()
		})
	}

	
	render() {
		return (
			<div>
				{ new Date().toLocaleTimeString() }
			</div>
		)
	}
}
setInterval(Clock, 1000);

export default Clock;