import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


    let postData = [
        { id: 1, message: 'hi how are you' },
        { id: 2, message: 'you' },
        { id: 3, message: 'how are you mean' },
        { id: 4, message: 'how are you' },
        { id: 4, message: 'did you mean' },
        { id: 6, message: 'thank you man' },
    ]

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>
        My posts
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
        <Post message='hi, how are you' likesCount='100' />
        <Post message="it's my first post" likesCount='20' />
        <Post da4a="it's my first da4a" likesCount='2' />
        <Post message=" like" likesCount='100' />
      </div>
    </div>
  )

}

export default MyPosts;