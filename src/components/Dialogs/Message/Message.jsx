import React from 'react';
import s from './../Dialogs.module.css';
import Data from './../../../index.js';

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;
