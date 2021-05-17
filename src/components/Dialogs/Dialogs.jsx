import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Vika' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Alena' },
        { id: 4, name: 'Natasha' },
        { id: 6, name: 'Inokentiy' },
    ];

    let DialogsElements = dialogs
    .map ( d => <DialogItem name={d.name} id={d.id} />);

    let message = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'you' },
        { id: 3, message: 'how are you mean' },
        { id: 4, message: 'how are you' },
        { id: 4, message: 'did you mean' },
        { id: 6, message: 'thank you man' },
    ]
    
    let MessageElement = 
        message.map ( m => <Message 
        message={m.message} id={m.id} />);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { DialogsElements }
                </div>
                <div className={s.messages}>
                    { MessageElement }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
