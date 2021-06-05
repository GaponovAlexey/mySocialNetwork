import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let MessageElement = props.state.message.map(m => <Message message={m.message} id={m.id} key={m.id} />);
  let newMessageBody = props.newMessageBody;



  let sendMessage = () => {
    props.sendMessage();
  };
  let updateNewMessageBody = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
              onChange={updateNewMessageBody}
              placeholder='Enter your message'/></div>
            <div><button onClick={sendMessage}> click</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
