import React from 'react';
import { sendMessgeCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

//const DialogsConteiner = () => {

//  return <StoreContext.Consumer>
//    {(store) => {
//      let onSendMessageClick = () => {
//        store.dispatch(sendMessgeCreator());
//      };
//      let onNewMessageChenge = (body) => {
//        store.dispatch(updateNewMessageBodyCreator(body));
//      }
//      return <Dialogs
//        updateNewMessageBody={onNewMessageChenge}
//        sendMessage={onSendMessageClick}
//        state={store.getState()}
//      />
//    }
//    }
//  </StoreContext.Consumer>
//}

let mapStateToProps = (state) => {
  return {
    dialogsReducer: state.dialogsReducer,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessgeCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsConteiner;
