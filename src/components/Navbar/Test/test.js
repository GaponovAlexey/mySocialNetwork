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
		const path = '/test/' + props.id;
		return (
			<div className={s.tHeadClass}>
				<NavLink to={path}>
					{props.name}
				</NavLink>
			</div>
		)
	}

	let Man = props.state.ManData.map(m => <DatalogMan name={m.name} id={m.id} />);
	let Woman = props.state.WomanData.map(m => <DatalogWoman name={m.name} id={m.id} />);
	let newMessageBodyTest = props.GenderText;

	let updateNewMessageText = (e) => {
		let body = e.target.value
		props.updateNewMessageText(body)
	};
	let onSendMessageClickTest = () => {
		props.onSendMessageClickTest()
	};

	return (
		<div className={s.tHeadClass}>
			<div>
				<textarea
					value={newMessageBodyTest}
					onChange={updateNewMessageText}
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