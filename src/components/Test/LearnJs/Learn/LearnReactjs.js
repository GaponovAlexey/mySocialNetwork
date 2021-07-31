import React from 'react';
import style from './LearnJs.module.css'
import One from './study/1one';
import Two from './study/2two-time';
import Three from './study/3form is submit';
import OffOn from './study/4off-on';
import LoginControl from './study/5login';
import Mailbox from './study/6myLogin';
import MyMailBox from './study/7count';
import Submit from './study/8Mailbox';
import WarningBanner from './study/9Warning';
import Map from './study/10set';
import Blog from './study/11key';
import Form from './study/12forms';


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
		<Map />
		<Blog />
		<Form />



	</>)
}

export default LearnJs;