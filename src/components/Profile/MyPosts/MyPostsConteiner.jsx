import React from 'react';
import { addPostActionCreator, updatNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts.jsx';
import { connect } from 'react-redux';

//const MyPostsConteiner = (props) => {
//  return (
//    <StoreContext.Consumer> 
//      { (store) => {
//        let state = store.getState();

//        let onaddPost = () => {
//          store.dispatch(addPostActionCreator());
//        };

//        let onPostChange = (text) => {
//          let action = updatNewPostTextActionCreator(text);
//          store.dispatch(action);
//        };

//        return <MyPosts
//          posts={state.profileReducer.posts}
//          addPost={onaddPost}
//          updatNewPostText={onPostChange}
//          newPostText={state.profileReducer.newPostText} />
//      }
//    }
//    </StoreContext.Consumer>
//  )
//};

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatNewPostText: (text) => {
      let action = updatNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
      
      
    },
  }

}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;