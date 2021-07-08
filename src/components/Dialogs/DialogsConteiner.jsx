import React from 'react';
import { sendMessgeCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessgeCreator(newMessageBody));
    },
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(
  Dialogs
);
