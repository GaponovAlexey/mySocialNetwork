import React from 'react';
import { sendMessgeCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsConteiner = () => {

  return <StoreContext.Consumer> 
    { (store) => {
      let onSendMessageClick = () => {
        store.dispatch(sendMessgeCreator());
      };
      let onNewMessageChenge = (body) => {
        store.dispatch(updateNewMessageBodyCreator(body));
      }
      return <Dialogs
      onSendMessageClick={onSendMessageClick}
      onNewMessageChenge={onNewMessageChenge}
      state={store.getState()}
      />
    }
  }
  </StoreContext.Consumer>
}
export default DialogsConteiner;
