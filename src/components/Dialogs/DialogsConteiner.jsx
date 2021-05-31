import React from 'react';
import { sendMessgeCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsConteiner = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessgeCreator());
  };
  let onNewMessageChenge = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <Dialogs
      state={state.dialogsReducer}
      onSendMessageClick={onSendMessageClick}
      onNewMessageChenge={onNewMessageChenge} />
  )
}


export default DialogsConteiner;
