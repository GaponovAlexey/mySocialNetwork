import React from 'react';

//const Form = porps => {
//	return (
//		<form>
//			<label>
//				Имя:
//				<input type="text" name="name" />
//			</label>
//			<input type="submit" value="Отправить"/>
//		</form>
//	)
//}


class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		alert('sent name' + this.state.value);
		e.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<label>
					name:
					<input type='text' value={this.state.value}
					onChange={this.handleChange}
					/>
				</label>
				<input type='submit' value='send' />
			</form>
		)
	}

}




export default NameForm ;