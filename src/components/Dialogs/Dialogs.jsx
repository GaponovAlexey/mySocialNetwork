import React from 'react';
import { sendMessgeCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let DialogsElements = props.state.dialogsReducer.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let MessageElement = props.state.dialogsReducer.message.map(m => <Message message={m.message} id={m.id} />);
  let newMessageBody = props.state.newMessageBody;



  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };
  let onNewMessageChenge = (e) => {
    let body = e.target.value;
    props.onNewMessageChenge(body);
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
              placeholder='Enter your message'/></div>
            <div><button onClick={onSendMessageClick}> click</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
