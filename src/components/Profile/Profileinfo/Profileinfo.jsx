import React from 'react';
import Preolader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css';
import ProfileStatus from './ProfileStatus'


const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preolader />
  }
  return (
    <div>
      <div className={ s.descriptionBlock }>
        <ProfileStatus  status={'hello my friends'}/>
        <h2>Имя: { props.profile.fullName }</h2>
        <h2>{ props.profile.aboutMe }</h2>
        <h2>Цель: { props.profile.lookingForAJobDescription }</h2>
        <h2>Работа: { props.profile.lookingForAJob }> работы</h2>
        <h2>Вк: <a href="https://vk.com/dimych">{ props.profile.contacts.vk }</a></h2>
        <h2>Twiter: <a href="https://twitter.com/@sdf">{ props.profile.contacts.twitter }</a></h2>
      </div>
    </div>
  )
}

export default Profileinfo;