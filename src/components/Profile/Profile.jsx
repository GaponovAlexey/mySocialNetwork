import MyPostsConteiner from './MyPosts/MyPostsConteiner.jsx';
import dom from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPostsConteiner  />
    </div>
  )
};

export default Profile;