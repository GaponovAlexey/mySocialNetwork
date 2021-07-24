import React from 'react';


class Two extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			time: [],
			dateD: []
		});
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 100)
	}
	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	tick() {
		this.setState({
			time: new Date().toLocaleTimeString(),
			dateD: new Date().toLocaleDateString()
		})
	}


	render() {
		return (
			<>
				<h2>сейчас { this.state.dateD }/
					{ this.state.time }
				</h2>
			</>
		)
	}
}

export default Two;