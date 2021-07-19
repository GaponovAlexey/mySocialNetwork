import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';
import poKaifu from '../../asets/music/mp3/poKaifu.mp3'

const test = (props) => {

	const DatalogMan = (props) => {
		const path = '/test/' + props.id;
		return (
			<div className={ s.tHeadClass }>
				<NavLink to={ path }>
					{ props.name }
				</NavLink>
			</div>
		)
	}
	const DatalogWoman = (props) => {
		const path = '/test/' + props.id;
		return (
			<div className={ s.tHeadClass }>
				<NavLink to={ path }>
					{ props.name }
				</NavLink>
			</div>
		)
	}

	let Man = props.state.ManData.map(m => <DatalogMan name={ m.name } id={ m.id } />);
	let Woman = props.state.WomanData.map(m => <DatalogWoman name={ m.name } id={ m.id } />);
	let newMessageBodyTest = props.GenderText;

	let updateNewMessageText = (e) => {
		let body = e.target.value
		props.updateNewMessageText(body)
	};
	let sendMessge = () => { props.sendMessge() };




	return (
		<>
			<div className={ s.tHeadClass }>
				<div>
					<div>
					</div>
					<table>
						<textarea
							value={ newMessageBodyTest }
							onChange={ updateNewMessageText }
							placeholder='you man' />
						<tr>
							<button onClick={ sendMessge }>clic</button>
						</tr>
					</table>
				</div>
				<div>
					{ Man }
					{ Woman }
				</div>
				<div className={ s.one }>
				</div>
				<div>
					<iframe width="700"
						height="400" src='http://localhost:3000/one' srcdoc />
				</div>
			</div>
			<div>
			</div>
			<body>
				<fieldset>
					<legend>Пол</legend>
					Муж. <input type="radio" name="sex" value="1" />
					Жен. <input type="radio" name="sex" value="2" />
					Иное. <input type="radio" name="sex" value="3" />
					анимешник. <input type="radio" name="sex" value="3" />
					транс. <input type="radio" name="sex" value="3" />
				</fieldset>
				<audio src={ poKaifu } controls preload="metadata">
					<p>Ваш Web-браузер не поддерживает элемент audio</p>
				</audio>

			</body>

		</>
	)
}
export default test;