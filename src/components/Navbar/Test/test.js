import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';

const test = (props) => {

	const DatalogMan = (props) => {
		const path = '/test/' + props.id;
		return (
			<div className={s.tHeadClass}>
				<NavLink to={path}>
					{props.name}
				</NavLink>
			</div>
		)
	}
	const DatalogWoman = (props) => {
		return (
			<div className={s.tHeadClass}>
				{props.name}
			</div>
		)
	}

	let Man = props.DatalogMan.ManData.map(m => <DatalogMan name={m.name} id={m.id} />);
	let Woman = props.DatalogWoman.WomanData.map(m => <DatalogWoman name={m.name} id={m.id} />);

	let newMessageBodyTest = props.GenderText;

	let onNewMessageChengeTest = (e) => {
		let test = e.target.value
		props.sendMessgeCreatorTest(e)
	};
	let onSendMessageClickTest = () => {
		props.updateNewMessageText()
	};

	return (
		<div className={s.tHeadClass}>
			<div>
				<textarea
					value={newMessageBodyTest}
					onChange={onNewMessageChengeTest}
					placeholder='you man'
				/>
			</div>
			<div>
				<button
					onClick={onSendMessageClickTest}
				>
					clic
				</button>
			</div>
			<div className={s.one}>
				{Man}
			</div>
			<div>
				{Woman}
			</div>
			<div>
				{Woman}
			</div>
		</div>
	)
}
export default test;