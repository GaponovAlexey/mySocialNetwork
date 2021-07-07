import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

  let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let MessageElement = props.dialogsPage.message.map(m => <Message message={m.message} id={m.id} key={m.id} />);


  let sendMessage = (value) => {
    debugger;
    alert(value.newMessageBody);
  };


  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {DialogsElements}
        </div>
        <div className={s.messages}>
          <div>{MessageElement}</div>
          <form>
            <AddMessageFormRedux onSubmit={ sendMessage } />
          </form>
        </div>
      </div>
    </div>
  )
}

const AddMessageForm =(props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field onSubmit={ props.sendMessage } component="textarea" name="newMessageBody"  placeholder="First Name" />
        </div>
        <button > click </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
