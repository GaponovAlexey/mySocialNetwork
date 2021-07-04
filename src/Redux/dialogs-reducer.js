const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
  dialogs: [
    { id: 1, name: 'Alexey' },
    { id: 2, name: 'Vika' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Alena' },
    { id: 4, name: 'Natasha' },
    { id: 6, name: 'Inokentiy' },
  ],
  message: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'you' },
    { id: 3, message: 'how are you mean' },
    { id: 4, message: 'how are you' },
    { id: 4, message: 'did you mean' },
    { id: 6, message: 'thank you man' },
  ],

};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        message: [...state.message, { id: 7, message: body }],
      };
    default:
      return state;
  }
};
export const sendMessgeCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export default dialogsReducer;