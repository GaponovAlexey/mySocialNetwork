import { updateNewMessageText, sendMessge } from '../../../Redux/test-reducer';
import { connect } from 'react-redux';
import test from './test'

let onNewMessageChengeTest = (state) => {
	return {
		//test: state.target.value,
		state: state.testReducer,
		DatalogMan: state.testReducer,
	}
}

const testContainer = connect(onNewMessageChengeTest, { sendMessge, updateNewMessageText } )(test)

export default testContainer;