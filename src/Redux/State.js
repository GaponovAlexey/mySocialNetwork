
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi how are you Alexey', likesCount: 12 },
        { id: 2, message: 'you', likesCount: 12 },
        { id: 3, message: 'how are you mean', likesCount: 12 },
        { id: 4, message: 'how are you', likesCount: 12 },
        { id: 5, message: 'what did you mean', likesCount: 12 },
        { id: 6, message: 'thank you man', likesCount: 12 },
      ],
      newPostText: 'it-kamasutra$',
    },
    dialogsPage: {
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
      newMessageBody: ''
    },
    sidebar: {
      friend: [
        { id: 1, name: 'Alexey', butget: 500000, avans: 10000 },
        { id: 2, name: 'Inokentuy', butget: 2000, avans: 1100 },
        { id: 3, name: 'Saha', butget: 59999, avans: 2000 },
        { id: 4, name: 'Masha', butget: 40000, avans: 3000 },
        { id: 5, name: 'Serg', butget: 5000, avans: 100 },
        { id: 6, name: 'Petro', butget: 300000, avans: 1000 },
        { id: 7, name: 'Lida', butget: 200000, avans: 2000 },
        { id: 8, name: 'Igor', butget: 100000, avans: 1000 },
        { id: 9, name: 'Maksim', butget: 2000, avans: 10000 },
        { id: 10, name: 'Denis', butget: 500, avans: 1000 },
      ],
    },
    forTest: {
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
    }
  },
  _callSubscriber() {
    console.log('Добавило что то');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody = action.body;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.message.push({ id: 6, message: body });
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessgeCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});



export default store;
window.store = store;