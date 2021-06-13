import React from 'react';
import { updateNewMessageText, sendMessgeCreatorTest } from '../../../Redux/test-reducer';
import { connect } from 'react-redux';
import test from './test'

	let onNewMessageChengeTest = (state) => {
		return {
			//test: state.target.value,
			DatalogMan: state.testReducer,
			DatalogWoman: state.testReducer,
		}
	}


	let onSendMessageDispatchTest = (dispatch) => {
		return {
			sendMessgeCreatorTest: sendMessgeCreatorTest(dispatch),
			updateNewMessageText: updateNewMessageText(dispatch)
		}
	}


const testContainer = connect(onNewMessageChengeTest, onSendMessageDispatchTest)(test)
export default testContainer;