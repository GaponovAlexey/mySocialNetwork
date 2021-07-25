import React from 'react'
import preloader from '../../../asets/images/2.gif';
import s from './Preloader.module.css'

let Preolader = (props) => {
	return <div  className={s.preImg} >
		<img alt='preloader' src={preloader} />
	</div>
}

export default Preolader;