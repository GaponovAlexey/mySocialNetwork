const UPDATE_NEW_MESSAGE_TEST = 'UPDATE-NEW-MESSAGE-TEST';
const SEND_MESSAGE_TEST = 'SEND_MESSAGE_TEST';

const testReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEST:
      state.GenderText = action.test;
      return state;
    case SEND_MESSAGE_TEST:
      let test = state.GenderText;
      state.GenderText = '';
      state.WomanData.push({ id: 4, name: test },)
      return state;
    default:
      return state;
  }
}
export const sendMessgeCreatorTest = () => ({ type: SEND_MESSAGE_TEST });
export const updateNewMessageText = (test) => ({
  type: UPDATE_NEW_MESSAGE_TEST, test: test
});

export default testReducer;