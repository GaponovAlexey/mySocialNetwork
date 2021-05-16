import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import React from 'react';

const Profile = () => {
  return (
    <div>
      <Profileinfo />
      <MyPosts />
    </div>
  )
}

export default Profile;