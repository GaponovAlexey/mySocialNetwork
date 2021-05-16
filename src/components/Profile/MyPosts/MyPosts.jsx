import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

import { NavLink } from 'react-router-dom';

const PostDa4as = (props) => {
  return (
    <div>
      <h3> {props.name} </h3>
    </div>
  )
}

const PostData = [
  { message: 'hi how are you Alexey' },
  { id: 2, message: 'you' },
  { id: 3, message: 'how are you mean' },
  { id: 4, message: 'how are you' },
  { id: 4, message: 'what did you mean' },
  { id: 6, message: 'thank you man' },
];
const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
        <PostDa4as name={PostData[4].message} />
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        <Post message='hi, how are you man' likesCount='100' />
        <Post message="it's my first post" likesCount='20' />
        <Post da4a="it's my first da4a" likesCount='2' />
        <Post message=" like" likesCount='100' />
      </div>
    </div>
  )

}

export default MyPosts;