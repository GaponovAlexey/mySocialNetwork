import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';
import Data from './../../index.js';

const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessageElement = props.state.message.map(m => <Message message={m.message} id={m.id} />);

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
