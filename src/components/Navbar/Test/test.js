import React from 'react';
import s from './test.module.css';

const test = (props) => {

	let Man = props.DatalogMan.ManData.map(m => <dataMan name={m.name} id={m.id} />);
	let Woman = props.DatalogWoman.WomanData.map(m => <dataWoman name={m.name} id={m.id} />);

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