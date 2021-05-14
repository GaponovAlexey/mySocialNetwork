import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div className={s.dialog + ' ' + s.active}>
                        VIKA
                    </div>
                    <div className={s.dialog}>
                        Danya
                    </div>
                    <div className={s.dialog}>
                        Saha
                    </div>
                    <div className={s.dialog}>
                        Kirill
                    </div>
                    <div className={s.dialog}>
                        Dima
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>hi</div>
                    <div className={s.message}>how are you</div>
                    <div className={s.message}>i'm ok thak you</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;