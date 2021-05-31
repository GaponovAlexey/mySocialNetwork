import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';
import { updateNewMessageText, sendMessgeCreatorTest } from '../../../Redux/test-reducer';


const Test = (props) => {
    let state = props.store.getState().testReducer;

    const DatalogMan = (props) => {
        const path = '/test/' + props.id;
        return (
            <div className={s.tHeadClass}>
                <NavLink to={path}>
                    {props.name}
                </NavLink>
            </div>
        )
    }
    const DatalogWoman = (props) => {
        return (
            <div className={s.tHeadClass}>
                {props.name}
            </div>
        )
    }
    let Man = props.state.WomanData.map(m => <DatalogMan name={m.name} id={m.id} />);
    let Woman = props.state.ManData.map(m => <DatalogWoman name={m.name} id={m.id} />);
    
    let newMessageBodyTest = state.GenderText;
    
    let onNewMessageChengeTest = (e) => {
        let test = e.target.value;
        props.store.dispatch(updateNewMessageText(test))
    };
    let onSendMessageClickTest = () => {
      props.store.dispatch(sendMessgeCreatorTest());
    };
    return (
        <div className={s.tHeadClass}>
            <div>
                <textarea 
                value={newMessageBodyTest}
                onChange={onNewMessageChengeTest}
                placeholder='you man'
                />
            </div>
            <div>
                <button
                onClick={onSendMessageClickTest}
                >
                    clic
                </button>
            </div>
            <div className={s.one}>
                {Man}
            </div>
            <div>
                {Woman}
            </div>
            <div>
                {Woman}
            </div>
        </div>
    )
}
export default Test;