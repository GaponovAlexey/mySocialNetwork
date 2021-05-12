import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://ru.bitcoinwiki.org/upload/ru/images/1/1d/Dogecoin-logo.jpg' />
      post 2
          <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;