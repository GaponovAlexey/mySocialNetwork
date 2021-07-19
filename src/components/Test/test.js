import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';
import poKaifu from '../../asets/music/mp3/poKaifu.mp3';
import video from '../../asets/images/video.mp4';

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
					<table>
						<textarea
							value={ newMessageBodyTest }
							onChange={ updateNewMessageText }
							placeholder='you man' />
							<button onClick={ sendMessge }>clic</button>
					</table>
				</div>
				<div>
					{ Man }
					{ Woman }
				</div>
				<div className={ s.one }>
					<iframe width="700"
						height="300" src='http://localhost:3000/one' srcdoc />
				</div>
				<div>
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
				<audio src={ poKaifu } controls preload="metadata"></audio>
				<article className='gif'>
					<video autoplay='on' loop src={ video } width="475"></video>
					<video autoplay='on' loop src={ video } width="475"></video>
				</article>
				<article>
					<div>
						<h3 id="1">Заголовок<th></th>
							<a href="#1">Перейти к элементу 1 </a><br></br></h3>
						<p id="2">Текст абзаца<th></th>
							<a href="#2"> Перейти к элементу 2</a></p>
					</div>
				</article>
				<article>
					<input type="checkbox" checked></input>
				</article>
				<article>
					<p>
						<span>dogecoin dogecoin dogecoin dogecoin dogecoin </span>
					</p>
				</article>
				<article >
					<span>
						<div>
							what about mean
						</div>
					</span>
				</article>
				<div className={ s.spisok } >
					<ul>
						<li>
					spisok
						</li>
					</ul>
				</div>
				<div>
					<p>
						<table>
							<tr>
								<td>Animal</td>
								<td>Tigre</td>
								<td>python</td>
							</tr>
						</table>
					</p>
				</div>
			</body>

		</>
	)
}
export default test;