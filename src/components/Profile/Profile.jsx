import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';
import React from 'react';




const Profile = (props) => {
  return (
    <div>
      <Profileinfo />
      <MyPosts 
      posts={props.profilePage.posts}
      newPostText={props.profilePage.Profileinfo}
      addPost={props.addPost}/>
    </div>
  )
}

export default Profile;