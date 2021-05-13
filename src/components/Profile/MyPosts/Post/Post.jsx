import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://ru.bitcoinwiki.org/upload/ru/images/1/1d/Dogecoin-logo.jpg' />
      {props.message}
      {props.da4a}
      <div>
        <span>
          like {props.likesCount}
        </span>
      </div>
    </div>
  )
}

export default Post;