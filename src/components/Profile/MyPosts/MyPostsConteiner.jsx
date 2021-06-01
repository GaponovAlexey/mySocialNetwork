import React from 'react';
import { addPostActionCreator, updatNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts.jsx';

const MyPostsConteiner = (props) => {
  return (
    <StoreContext.Consumer> 
      { (store) => {
        let state = store.getState();

        let onaddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updatNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return <MyPosts
          posts={state.profileReducer.posts}
          addPost={onaddPost}
          updatNewPostText={onPostChange}
          newPostText={state.profileReducer.newPostText} />
      }
    }
    </StoreContext.Consumer>
  )
};

export default MyPostsConteiner;