import React from 'react';
import s from './test.module.css';
import { NavLink } from 'react-router-dom';


const Test = (props) => {
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
    

    return (
        <div className={s.tHeadClass}>
            <div>
                <textarea>
                    
                </textarea>
            </div>
            <div>
                <button>
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

setTimeout(function() {
    console.log('hello');
}, 1000)