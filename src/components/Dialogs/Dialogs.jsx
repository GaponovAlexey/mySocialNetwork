import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';
import Data from './../../index.js';

const Dialogs = (props) => {
    let message = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'you' },
        { id: 3, message: 'how are you mean' },
        { id: 4, message: 'how are you' },
        { id: 4, message: 'did you mean' },
        { id: 6, message: 'thank you man' },
    ];
    let dialogs = [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Vika' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Alena' },
        { id: 4, name: 'Natasha' },
        { id: 6, name: 'Inokentiy' },
    ];
    
    let DialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessageElement = message.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {DialogsElements}
                </div>
                <div className={s.messages}>
                    {MessageElement}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
