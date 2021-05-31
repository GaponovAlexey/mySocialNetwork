import React from 'react';
import { addPostActionCreator, updatNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts.jsx';

const MyPostsConteiner = (props) => {
  let state = props.store.getState();

  let onaddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updatNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      posts={state.profileReducer.posts}
      addPost={onaddPost}
      updatNewPostText={onPostChange}
      newPostText={state.profileReducer.newPostText} />
  )
};

export default MyPostsConteiner;