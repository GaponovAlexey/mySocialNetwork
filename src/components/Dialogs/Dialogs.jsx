import React from 'react';
import { sendMessgeCreator, updateNewMessageBodyCreator } from '../../Redux/State';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;


  let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let MessageElement = state.message.map(m => <Message message={m.message} id={m.id} />);
  let newMessageBody = state.newMessageBody;



  let onSendMessageClick = () => {
    props.store.dispatch(sendMessgeCreator());
  };
  let onNewMessageChenge = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {DialogsElements}
        </div>
        <div className={s.messages}>
          <div>{MessageElement}</div>
          <div>
            <div><textarea
              value={newMessageBody}
              onChange={onNewMessageChenge}
              placeholder='Enter your message'
            /></div>
            <div><button onClick={onSendMessageClick}> click</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
