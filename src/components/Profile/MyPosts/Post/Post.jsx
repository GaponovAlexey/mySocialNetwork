import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://www.block-chain24.com/sites/default/files/crypto/binance-coin-bnb-icon-dark-crey-256x256_0.svg' />
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