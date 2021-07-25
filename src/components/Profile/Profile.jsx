import MyPostsConteiner from './MyPosts/MyPostsConteiner.jsx';
//import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo
        profile={ props.profile }
        status={ props.status }
        updateStatus={ props.updateStatus } />
      <MyPostsConteiner />
    </div>
  )
};

export default Profile;