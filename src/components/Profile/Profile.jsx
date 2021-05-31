import MyPosts from './MyPosts/MyPosts';
import dom from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import React from 'react';


const Profile = (props) => {
  debugger;
  return (
    <div>
      <Profileinfo />
      <MyPosts
        posts={props.profilePage}
        newPostText={props.newPostText}
        dispatch={props.dispatch} />
        
    </div>
  )
};

export default Profile;