import React from 'react';
import { addPostActionCreator, updatNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let PostsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    const action = updatNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea
          onChange={onPostChange} 
          ref={newPostElement} 
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {PostsElements}
      </div>
    </div>
  )

}

export default MyPosts;