import React from 'react';
import Preolader from '../../common/Preloader/Preloader';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'


const Profileinfo = (props) => {
  if (!props.profile) {
    return <Preolader />
  }
  return (
    <div>
      <div className={ s.descriptionBlock }>
        <ProfileStatusWithHooks
          profile={ props.profile }
          status={ props.status }
          updateStatus={ props.updateStatus }
        />
        <h2>Имя: { props.profile.fullName }</h2>
        <h2>{ props.profile.aboutMe }</h2>
        <h2>Цель: { props.profile.lookingForAJobDescription }</h2>
        <img alt='fotoLogo' src={ props.profile.photos.large } />

      </div>
    </div>
  )
}

export default Profileinfo;