const UPDATE_NEW_MESSAGE_TEST = 'UPDATE-NEW-MESSAGE-TEST';
const SEND_MESSAGE_TEST = 'SEND_MESSAGE_TEST';

const testReducer = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEST) {
        state.GenderText = action.test;
    } else if (action.type === SEND_MESSAGE_TEST) {
        let test = state.GenderText;
        state.GenderText = '';
        state.WomanData.push({ id: 4, name: test },)
    }
    return state
}

export default testReducer;