import React from 'react';
import style from './LearnJs.module.css'


const LearnJs = () => {

	let WelcomeFunction = (props) => {
		return <h2>Hello {props.name}</h2>
	}

	
	class WelcomeClass extends React.Component {

		render () {
			return <h2>Hello {this.props.name}</h2>
		}
	}

	
	return (<>
		<h1 className={ style.heading} >Hello React </h1>
		<WelcomeFunction name={'functions'} />
		<WelcomeFunction name={'functions'} />
		<WelcomeFunction name={'functions'} />
		<WelcomeClass mame={'classes'} />
	</>)
}

export default LearnJs;