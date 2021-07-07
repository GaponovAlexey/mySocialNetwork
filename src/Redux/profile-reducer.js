import { ProfileAPI, UserAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'hi how are you Alexey', likesCount: 12 },
    { id: 2, message: 'you', likesCount: 12 },
    { id: 3, message: 'how are you mean', likesCount: 12 },
    { id: 4, message: 'how are you', likesCount: 12 },
    { id: 5, message: 'what did you mean', likesCount: 12 },
    { id: 6, message: 'thank you man', likesCount: 12 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        newmessagebody: action.newmessagebody,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SET_STATUS:
      return { ...state, status: action.status}
    default:
      return state;
  }
}

export const addPostActionCreator = (newmessagebody) => ({ type: ADD_POST, newmessagebody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// Thunks

export const getUserProfile = (userId) => (dispatch) => {
  UserAPI.getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
  ProfileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  ProfileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
    })
}
export default profileReducer;