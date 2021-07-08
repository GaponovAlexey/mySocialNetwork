import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogs/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControl';
import { maxLenghtCreator, required } from '../utils/Validators/validators';

const maxLenght10 = maxLenghtCreator(50);
const Dialogs = (props) => {

  let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={ d.name } key={ d.id } id={ d.id } />);
  let MessageElement = props.dialogsPage.message.map(m => <Message message={ m.message } id={ m.id } key={ m.id } />);

  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };


  return (
    <div>
      <div className={ s.dialogs }>
        <div className={ s.dialogsItems }>
          { DialogsElements }
        </div>
        <div className={ s.messages }>
          <div>{ MessageElement }</div>
          <div>
            <AddMessageFormRedux onSubmit={ addNewMessage } />
          </div>
        </div>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field component={ Textarea }
          name="newMessageBody"
          placeholder="First Name"
          validate={ [required, maxLenght10] }
          />
          
      </div>
      <button > Send </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
