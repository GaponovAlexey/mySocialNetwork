import React from 'react';
import { updateNewMessageText, sendMessgeCreatorTest } from '../../../Redux/test-reducer';
import { connect } from 'react-redux';
import test from './test'

let onNewMessageChengeTest = (state) => {
	return {
		//test: state.target.value,
		state: state.testReducer,
		DatalogMan: state.testReducer,
	}
}


let onSendMessageDispatchTest = (dispatch) => {
	return {
		onSendMessageClickTest: () => {
			dispatch(sendMessgeCreatorTest())
		},
		updateNewMessageText: (test) => {
			dispatch(updateNewMessageText(test))
		},
	}
}


const testContainer = connect(onNewMessageChengeTest, onSendMessageDispatchTest)(test)
export default testContainer;