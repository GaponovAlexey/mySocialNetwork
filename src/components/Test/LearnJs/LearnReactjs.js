import React from 'react';
import style from './LearnJs.module.css'
import One from './Learn/1one';
import Two from './Learn/2two-time';
import Three from './Learn/3form is submit';
import OffOn from './Learn/4off-on';
import LoginControl from './Learn/5login';
import Mailbox from './Learn/6myLogin';
import MyMailBox from './Learn/7count';
import Submit from './Learn/8Mailbox';
import WarningBanner from './Learn/9Warning';


const LearnJs = () => {

	let WelcomeFunction = (props) => {
		
		return <h2>Hello { props.name }</h2>
	}


	class WelcomeClass extends React.Component {
		constructor(props) {
			super(props);
			this.state = '';
		}

		
		render() {
			return (
				<>
					<h2>Hello { this.props.name }</h2>
				</>
			)
		}
	}


	




	return (<>
		<h1 className={ style.heading } >Hello React </h1>
		<WelcomeFunction name={ 'functions' } />
		<WelcomeClass name='classes' />
		<One />
		<Two />
		<Three />
		<OffOn />
		<LoginControl />


		<Mailbox />
		<MyMailBox />
		<Submit />
		<WarningBanner />
		



	</>)
}

export default LearnJs;