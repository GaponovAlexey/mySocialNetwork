import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message='hi, how are you' />
        <Post message="it's my first post" />
        <Post da4a="it's my first da4a" />
        
      </div>
    </div>
  )

}

export default MyPosts;