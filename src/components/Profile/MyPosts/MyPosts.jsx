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
        <Post message='hi, how are you' likesCount='100' />
        <Post message="it's my first post" likesCount='25' />
        <Post da4a="it's my first da4a"  likesCount='2'/>
        <Post message=" like" likesCount='100'/>
      </div>
    </div>
  )

}

export default MyPosts;