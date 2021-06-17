import React from 'react';
import Preolader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css';

const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preolader />
  }
  debugger;
  return (
    <div>
      <div>
        <img className={s.logo}
          src='https://itelmenko.ru/wp-content/uploads/2015/10/react-logo.jpg' />
      </div>
      <div className={ s.descriptionBlock }>
        <img src={ props.profile.photos.large } />
        <h2>Имя: { props.profile.fullName }</h2>
        <h2>{ props.profile.aboutMe }</h2>
        <h2>Цель: { props.profile.lookingForAJobDescription }</h2>
        <h2>Работа: { props.profile.lookingForAJob }</h2>
        <h2>Вк: <a href="https://vk.com/dimych">{ props.profile.contacts.vk }</a></h2>
        <h2>Twiter: <a href="https://twitter.com/@sdf">{ props.profile.contacts.twitter }</a></h2>
      </div>
    </div>
  )
}

export default Profileinfo;