import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  const PostData = [
    { id: 1, message: 'hi how are you Alexey', likesCount: 12 },
    { id: 2, message: 'you', likesCount: 12 },
    { id: 3, message: 'how are you mean', likesCount: 12 },
    { id: 4, message: 'how are you', likesCount: 12 },
    { id: 4, message: 'what did you mean', likesCount: 12 },
    { id: 6, message: 'thank you man', likesCount: 12 },
  ];
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
        <Post message={PostData[0].message} likesCount={PostData[0].likesCount} />
        <Post message={PostData[1].message} likesCount={PostData[1].likesCount} />
        <Post message={PostData[2].message} likesCount={PostData[2].likesCount} />
        <Post message={PostData[3].message} likesCount={PostData[3].likesCount} />
        <Post message={PostData[4].message} likesCount={PostData[4].likesCount} />
        <Post message={PostData[5].message} likesCount={PostData[5].likesCount} />
      </div>
    </div>
  )

}

export default MyPosts;