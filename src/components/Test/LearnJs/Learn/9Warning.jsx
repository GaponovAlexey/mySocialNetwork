import React from 'react';


//function WarningBanner(props) {
//	if (!props.warn) {
//		return null;
//	}
//	return (
//		<div className="warning">
//			Предупреждение!
//		</div>
//	);
//}

//class Page extends React.Component {
//	constructor(props) {
//		super(props);
//		this.state = { showWarning: true };
//		this.handleToggleClick = this.handleToggleClick.bind(this);
//	}



//	handleToggleClick() {
//		this.setState(state => ({
//			showWarning: !state.showWarning
//		}));
//	}

//	render() {
//		return (
//			<div>
//				<WarningBanner warn={ this.state.showWarning } />
//				<button onClick={ this.handleToggleClick }>
//					{ this.state.showWarning ? 'Спрятать' : 'Показать' }
//				</button>
//			</div>
//		);
//	}
//}




//let WarningBanner = props => {
//	if (!props.warn) {
//		return null
//	}

//	return (
//		<p>something show up</p>
//	)
//}

//class Page extends React.Component {
//	constructor(props) {
//		super(props);
//		this.state = { showWarning: true }
//		this.handleToggleClick = this.handleToggleClick.bind(this)
//	}

//	handleToggleClick() {
//		this.setState(p => ({
//			showWarning: !p.showWarning
//		}))
//	}


//	render() {
//		return (
//			<div>
//				<WarningBanner warn={this.state.showWarning}/>
//				<button onClick={ this.handleToggleClick }>clock</button>
//			</div>
//		)
//	}
//}




let Show = props => {
	if(!props.showUP) {
		return null
	}
	return <p>Something show up</p>
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
		this.handleToggleClick = this.handleToggleClick.bind(this)
	}

	handleToggleClick() {
		this.setState(p => ({
			show: !p.show
		}))
	}

	render() {
		return(
			<div>
				<Show showUP={this.state.show}/>
				<button onClick={this.handleToggleClick}>Show UP</button>
			</div>
		)
	}
}




export default Page;