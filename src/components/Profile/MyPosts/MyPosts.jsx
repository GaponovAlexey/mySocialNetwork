import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
  let PostsElements = props.posts.map(m => <Post message={m.message} id={m.id} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }


  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
      </h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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