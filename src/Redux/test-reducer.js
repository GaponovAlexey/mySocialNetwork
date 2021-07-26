const UPDATE_NEW_MESSAGE_TEST = 'UPDATE-NEW-MESSAGE-TEST';
const SEND_MESSAGE_TEST = 'SEND_MESSAGE_TEST';
let initialState = {
  ManData: [
    { id: 1, name: 'Aleksey' },
    { id: 2, name: 'Sergey' },
    { id: 3, name: 'Churik' },
  ],
  WomanData: [
    { name: 'Viktoria', id: 1 },
    { name: 'Vikusya', id: 2 },
    { name: 'Vika', id: 3 },
  ],
  GenderText: '',
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEST:
      return {
        ...state,
        GenderText: action.body,
      }
    case SEND_MESSAGE_TEST:
      let text = state.GenderText;
      return {
        ...state,
        GenderText: "",
        WomanData: [ ...state.WomanData, { id: 4, name: text }]
        
      }
    default:
      return state;
  }
};
export const sendMessge = () => ({ type: SEND_MESSAGE_TEST, });
export const updateNewMessageText = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEST, body: body
});

export default testReducer;